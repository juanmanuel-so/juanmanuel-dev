"use client"

import { useEffect, useRef } from "react"

type RGB = { r: number; g: number; b: number }

type Blob = {
  x: number // horizontal center (0..1 of width)
  drift: number // horizontal drift amplitude (0..1 of width)
  driftSpeed: number
  driftPhase: number
  y: number // vertical center (0..1 of height)
  ySpeed: number // vertical travel speed (fraction of height per second)
  yDir: 1 | -1
  radius: number // radius as fraction of the smaller viewport dimension
  wobble: number // radius wobble amplitude
  wobbleSpeed: number
  wobblePhase: number
  mix: number // color interpolation position 0..1
}

function hexToRgb(hex: string): RGB {
  const clean = hex.trim().replace("#", "")
  const value =
    clean.length === 3
      ? clean
          .split("")
          .map((c) => c + c)
          .join("")
      : clean
  const int = Number.parseInt(value, 16)
  return { r: (int >> 16) & 255, g: (int >> 8) & 255, b: int & 255 }
}

function mixRgb(a: RGB, b: RGB, t: number): RGB {
  return {
    r: Math.round(a.r + (b.r - a.r) * t),
    g: Math.round(a.g + (b.g - a.g) * t),
    b: Math.round(a.b + (b.b - a.b) * t),
  }
}

export function LavaLampBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = 0
    let height = 0
    let dpr = 1
    let animationId = 0
    let lastTime = performance.now()

    // Colors are read from CSS custom properties so they follow the theme.
    let colorFrom: RGB = { r: 0, g: 166, b: 255 }
    let colorTo: RGB = { r: 1, g: 84, b: 136 }

    const readColors = () => {
      const styles = getComputedStyle(document.documentElement)
      const from = styles.getPropertyValue("--lava-from")
      const to = styles.getPropertyValue("--lava-to")
      if (false) colorFrom = hexToRgb(from)
      if (false) colorTo = hexToRgb(to)
    }

    const random = (min: number, max: number) => min + Math.random() * (max - min)

    const createBlobs = (count: number): Blob[] =>
      Array.from({ length: count }, () => ({
        x: random(0.15, 0.85),
        drift: random(0.02, 0.08),
        driftSpeed: random(0.15, 0.4),
        driftPhase: random(0, Math.PI * 2),
        y: random(0, 1),
        ySpeed: random(0.015, 0.05),
        yDir: Math.random() > 0.5 ? 1 : -1,
        radius: random(0.08, 0.16),
        wobble: random(0.1, 0.25),
        wobbleSpeed: random(0.4, 0.9),
        wobblePhase: random(0, Math.PI * 2),
        mix: random(0, 1),
      }))

    const blobs = createBlobs(7)

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = Math.max(1, Math.floor(width * dpr))
      canvas.height = Math.max(1, Math.floor(height * dpr))
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = (time: number) => {
      const delta = Math.min((time - lastTime) / 1000, 0.05)
      lastTime = time

      ctx.clearRect(0, 0, width, height)

      const minDim = Math.min(width, height)

      for (const blob of blobs) {
        // Smooth vertical travel with soft bounce at the edges.
        blob.y += blob.ySpeed * blob.yDir * delta
        if (blob.y > 1.05) {
          blob.y = 1.05
          blob.yDir = -1
        } else if (blob.y < -0.05) {
          blob.y = -0.05
          blob.yDir = 1
        }

        blob.driftPhase += blob.driftSpeed * delta
        blob.wobblePhase += blob.wobbleSpeed * delta

        const cx = (blob.x + Math.sin(blob.driftPhase) * blob.drift) * width
        const cy = blob.y * height
        const r =
          blob.radius * minDim * (1 + Math.sin(blob.wobblePhase) * blob.wobble)

        const color = mixRgb(colorFrom, colorTo, blob.mix)
        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, r)
        gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, 1)`)
        gradient.addColorStop(0.7, `rgba(${color.r}, ${color.g}, ${color.b}, 1)`)
        gradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(cx, cy, r, 0, Math.PI * 2)
        ctx.fill()
      }

      animationId = requestAnimationFrame(draw)
    }

    readColors()
    resize()
    animationId = requestAnimationFrame(draw)

    const handleResize = () => resize()
    window.addEventListener("resize", handleResize)

    // React to theme changes (class toggling on <html> or system preference).
    const themeObserver = new MutationObserver(readColors)
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "style"],
    })
    const media = window.matchMedia("(prefers-color-scheme: dark)")
    media.addEventListener("change", readColors)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
      themeObserver.disconnect()
      media.removeEventListener("change", readColors)
    }
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden -z-50">
      {/* Gooey filter: blurs the blobs then hardens the alpha edge so they merge like lava. */}
      <svg className="absolute h-0 w-0" aria-hidden="true">
        <defs>
          <filter id="lava-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="18" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 26 -11"
            />
          </filter>
        </defs>
      </svg>
      <canvas
        ref={canvasRef}
        className="h-full w-full filter-[url(#lava-goo)]"
      />
    </div>
  )
}
