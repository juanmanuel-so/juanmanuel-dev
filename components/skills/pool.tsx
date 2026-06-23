'use client'

import { useEffect, useRef } from "react"
import { Card } from "../ui/card"
type Skill = {
  x: number
  y: number

  vx: number
  vy: number

  width: number
  height: number

  label: string
}

const skillsList: Skill[] = [
  { x: 0, y: 0, vx: 0.8, vy: 0.8, width: 100, height: 50, label: 'Aprendizaje Rápido' },
  { x: 200, y: 100, vx: -0.8, vy: 0.8, width: 100, height: 50, label: 'Creatividad' },
  { x: 400, y: 200, vx: 0.8, vy: -0.8, width: 100, height: 50, label: 'Liderazgo' },
]

const Pool = () => {
  const skills = useRef<Skill[]>(skillsList)
  const cardRefs = useRef<HTMLDivElement[]>([])
  const poolRef = useRef<HTMLDivElement>(null)
  useEffect(() => {

    let frame: number

    const update = () => {

      const pool = poolRef.current!

      const width = pool.clientWidth
      const height = pool.clientHeight
      const poolWidth = width
      const poolHeight = height
      for (let i = 0; i < skills.current.length; i++) {

        const skill = skills.current[i]

        skill.x += skill.vx
        skill.y += skill.vy

        // aquí irán colisiones
        if (skill.x <= 0) { //izq
          skill.x = 0
          skill.vx *= -1
        }

        if (skill.x + skill.width >= poolWidth) { // derecha
          skill.x = poolWidth - skill.width
          skill.vx *= -1
        }

        if (skill.y <= 0) { //arriba
          skill.y = 0
          skill.vy *= -1
        }
        if (skill.y + skill.height >= poolHeight) { // abajo
          skill.y = poolHeight - skill.height
          skill.vy *= -1
        }


        const element = cardRefs.current[i]

        element.style.transform =
          `translate(${skill.x}px, ${skill.y}px)`
      }

      frame = requestAnimationFrame(update)
    }

    update()

    return () => cancelAnimationFrame(frame)

  }, [])
  return (
    <Card ref={poolRef} className="w-full h-full">
      {
        skillsList.map((item, index) => (
          <div
            ref={(el) => {
              if (el)
                cardRefs.current[index] = el
            }}
            key={index} className="absolute p-2  rounded-sm shadow-primary/20 shadow-sm bg-background backdrop-blur-md w-fit h-fit"
          >
            {item.label}
          </div>
        ))
      }
    </Card>
  )
}
export default Pool