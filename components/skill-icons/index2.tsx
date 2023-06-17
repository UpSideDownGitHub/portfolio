import Advanced from './advanced.svg'
import AndroidStudio from './android-studio.svg'
import Beginner from './beginner.svg'
import CPlusPlus from './c-plus-plus.svg'
import CSharp from './c-sharp.svg'
import Git from './git.svg'
import Godot from './godot.svg'
import Html from './html.svg'
import Intermediate from './intermediate.svg'
import Java from './java.svg'
import NextJS from './next-js.svg'
import Profesonal from './profesonal.svg'
import Proficent from './proficent.svg'
import Python from './python.svg'
import TailwindCSS from './tailwind-css.svg'
import TypeScript from './typescript.svg'
import Unity from './unity.svg'
import UnrealEngine from './unreal-engine.svg'
import VB from './vb.svg'


const components = {
  advanced: Advanced,
  androidStudio: AndroidStudio,
  beginner: Beginner,
  cPlusPlus: CPlusPlus,
  cSharp: CSharp,
  git: Git,
  godot: Godot,
  html: Html,
  intermediate: Intermediate,
  java: Java,
  nextJS: NextJS,
  profesonal: Profesonal,
  proficent: Proficent,
  python: Python,
  tailwindCSS: TailwindCSS,
  typeScript: TypeScript,
  unity: Unity,
  unrealEngine: UnrealEngine,
  vb: VB,
}

const SkillIcon = ({ kind, size = 8 }) => {
  const SkillSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="sr-only">{kind}</span>
      <SkillSvg
        className={` fill-current text-gray-700 hover:text-blue-500 
        dark:text-gray-200 dark:hover:text-blue-400 
        h-${size} w-${size}`}
      />
    </a>
  )
}

export default SkillIcon