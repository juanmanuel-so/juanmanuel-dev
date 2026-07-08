'use client'
import PianoKey from "./piano-key"

const Piano = () => {
  return (
    <div className="flex flex-row items-start bg-slate-400/20 backdrop-md p-3 rounded-2xl h-fit drop-shadow-sm" >
      <PianoKey note="C" />
      <PianoKey note="C#" isBlack/>
      <PianoKey note="D" />
      <PianoKey note="D#" isBlack/>
      <PianoKey note="E" />
      <PianoKey note="F" />
      <PianoKey note="F#" isBlack/>
      <PianoKey note="G" />
      <PianoKey note="G#" isBlack/>
      <PianoKey note="A" />
      <PianoKey note="A#" isBlack/>
      <PianoKey note="B" />

    </div>
  )
}
export default Piano