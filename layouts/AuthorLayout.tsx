import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SkillIcon from '@/components/skill-icons/index2'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = content

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="divide-y">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8">
            <Image
              src={avatar}
              alt="avatar"
              width="192px"
              height="192px"
              className="h-48 w-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6 pb-10">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="twitter" href={twitter} />
            </div>
          </div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">{children}</div>
        </div>
      </div>

      <div className="space-y-2 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Skills
        </h1>
      </div>
      <div className="divide-y">
        <div className="flex flex-auto pb-5">
          <SkillIcon kind="beginner" size={10} />
          <div className="pl-2 pr-5 pt-2 dark:prose-dark flex-auto">Beginner</div>
          <SkillIcon kind="intermediate" size={10} />
          <div className="pl-2 pr-5 pt-2 dark:prose-dark flex-auto">Intermediate</div>
          <SkillIcon kind="proficent" size={10} />
          <div className="pl-2 pr-5 pt-2 dark:prose-dark flex-auto">Proficient</div>
          <SkillIcon kind="advanced" size={10} />
          <div className="pl-2 pr-5 pt-2 dark:prose-dark flex-auto">Advanced</div>
          <SkillIcon kind="profesonal" size={10} />
          <div className="pl-2 pr-5 pt-2 dark:prose-dark flex-auto">Professional</div>
        </div>

        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-10 md:text-4xl md:leading-14">
            Languages
          </h1>
        </div>
        <div className="flex flex-wrap pt-5 ">
        <div className="flex px-5 pb-4 transition ease-in-out hover:scale-110">
            <SkillIcon kind="cSharp" size={10} />
            <div className="pl-2 pr-2 pt-2 dark:prose-dark ">C#</div>
            <SkillIcon kind="advanced" size={10} />
          </div>
          <div className="flex px-5 pb-4 transition ease-in-out hover:scale-110">
            <SkillIcon kind="cPlusPlus" size={10} />
            <div className="pl-2 pr-2 pt-2 dark:prose-dark">C++</div>
            <SkillIcon kind="proficent" size={10} />
          </div>
          <div className="flex px-5 pb-4 transition ease-in-out hover:scale-110">
            <SkillIcon kind="java" size={10} />
            <div className="pl-2 pr-2 pt-2 dark:prose-dark ">JAVA</div>
            <SkillIcon kind="intermediate" size={10} />
          </div>
          <div className="flex px-5 pb-4 transition ease-in-out hover:scale-110">
            <SkillIcon kind="python" size={10} />
            <div className="pl-2 pr-2 pt-2 dark:prose-dark ">Python</div>
            <SkillIcon kind="intermediate" size={10} />
          </div>
          <div className="flex px-5 pb-4 transition ease-in-out hover:scale-110">
            <SkillIcon kind="html" size={10} />
            <div className="pl-2 pr-2 pt-2 dark:prose-dark ">HTML</div>
            <SkillIcon kind="beginner" size={10} />
          </div>
          <div className="flex px-5 pb-4 transition ease-in-out hover:scale-110">
            <SkillIcon kind="nextJS" size={10} />
            <div className="pl-2 pr-2 pt-2 dark:prose-dark ">Next.js</div>
            <SkillIcon kind="beginner" size={10} />
          </div>
          <div className="flex px-5 pb-4 transition ease-in-out hover:scale-110">
            <SkillIcon kind="tailwindCSS" size={10} />
            <div className="pl-2 pr-2 pt-2 dark:prose-dark ">Tailwind CSS</div>
            <SkillIcon kind="beginner" size={10} />
          </div>
          <div className="flex px-5 pb-4 transition ease-in-out hover:scale-110">
            <SkillIcon kind="vb" size={10} />
            <div className="pl-2 pr-2 pt-2 dark:prose-dark ">Visual Basic</div>
            <SkillIcon kind="beginner" size={10} />
          </div>
          <div className="flex px-5 pb-4 transition ease-in-out hover:scale-110">
            <SkillIcon kind="typeScript" size={10} />
            <div className="pl-2 pr-2 pt-2 dark:prose-dark ">Type Script</div>
            <SkillIcon kind="beginner" size={10} />
          </div>
        </div>

        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-10 md:text-4xl md:leading-14">
            Programs
          </h1>
        </div>
        <div className="flex flex-wrap pt-5">
          <div className="flex px-5 pb-4 transition ease-in-out hover:scale-110 ">
            <SkillIcon kind="unity" size={10} />
            <div className="pl-2 pr-2 pt-2 dark:prose-dark">Unity</div>
            <SkillIcon kind="advanced" size={10} />
          </div>
          <div className="flex px-5 pb-4 transition ease-in-out hover:scale-110">
            <SkillIcon kind="unrealEngine" size={10} />
            <div className="pl-2 pr-2 pt-2 dark:prose-dark ">Unreal Engine</div>
            <SkillIcon kind="intermediate" size={10} />
          </div>
          <div className="flex px-5 pb-4 transition ease-in-out hover:scale-110">
            <SkillIcon kind="godot" size={10} />
            <div className="pl-2 pr-2 pt-2 dark:prose-dark ">GODOT</div>
            <SkillIcon kind="intermediate" size={10} />
          </div>
          <div className="flex px-5 pb-4 transition ease-in-out hover:scale-110">
            <SkillIcon kind="androidStudio" size={10} />
            <div className="pl-2 pr-2 pt-2 dark:prose-dark ">Android Studio</div>
            <SkillIcon kind="intermediate" size={10} />
          </div>
          <div className="flex px-5 pb-4 transition ease-in-out hover:scale-110">
            <SkillIcon kind="visualStudio" size={10} />
            <div className="pl-2 pr-2 pt-2 dark:prose-dark ">Visual Studio</div>
            <SkillIcon kind="advanced" size={10} />
          </div>
        </div>
      </div>
    </>
  )
}
