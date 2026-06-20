import { cn } from "@/lib/utils"
import React, { useCallback, useMemo, useRef } from "react"

type PianoKeyProps = {
  note: string
  isBlack?: boolean
}
const frequencies: Record<string, number> = {
  "C": 261.63,
  "C#": 277.18,
  "D": 293.66,
  "D#": 311.13,
  "E": 329.63,
  "F": 349.23,
  "F#": 369.99,
  "G": 392.00,
  "G#": 415.30,
  "A": 440.00,
  "A#": 466.16,
  "B": 493.88
}
type WebAudioContext = AudioContext
const PianoKey = ({ note, isBlack }: PianoKeyProps) => {
  const [pressed, setPressed] = React.useState(false)

  const audioRef = useRef<WebAudioContext | null>(null)

  const getAudioContext = (): WebAudioContext | null => {
    if (typeof window === "undefined") return null

    const WAudioContext =
      window.AudioContext || (window as unknown as typeof AudioContext)

    if (!audioRef.current) {
      audioRef.current = new WAudioContext()
    }

    return audioRef.current
  }

  const playFrequency = useCallback((freq: number) => {
    const audioContext = getAudioContext()
    if (!audioContext) return

    const osc = audioContext.createOscillator()
    const gain = audioContext.createGain()

    osc.type = "triangle"
    osc.frequency.value = freq

    osc.connect(gain)
    gain.connect(audioContext.destination)

    gain.gain.value = 0.1

    osc.start()
    setTimeout(() => osc.stop(), 500)
  }, [])

  return (
    <div className={cn(
      !isBlack ? "w-fit h-fit" : "w-0 overflow-visible -translate-x-6 top-0",
      isBlack && "z-10"
    )}>
      <button
        className={cn(
          !isBlack ? "h-60 w-20 z-0" : "h-40 w-12 rounded-t-none hover:bg-black/90 top-0 active:",
          !isBlack ? "bg-white" : "bg-black",
          "transition-all duration-75 shadow-md active:-translate-y-1 active:scale-95 active:brightness-90 active:shadow-inner ",

        )}
        onPointerDown={() => playFrequency(frequencies[note])}
      />
    </div>
  )
}
export default PianoKey