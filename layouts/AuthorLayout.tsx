import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SkillIcon from '@/components/skill-icons/index2'
import Link from '@/components/Link'

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
          <h1
            className="text-3xl font-extrabold leading-9 tracking-tight inline-block bg-clip-text text-transparent 
            bg-gradient-to-r from-teal-600 via-cyan-300 to-sky-700 sm:text-4xl md:text-6xl md:leading-14"
          >
            About
          </h1>
        </div>

        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div>
            <div className="flex items-center  my-4 mx-4 pt-8 gap-10 transition duration-1000 hover:scale-110">
              <div className="group relative">
                <div
                  className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-teal-600 to-cyan-300 opacity-50 
                blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"
                ></div>
                <span className="relative flex divide-y divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                  <span>
                    <div className="pl-5">
                      <Image
                        src={avatar}
                        alt="avatar"
                        width="5900px"
                        height="6377px"
                        className="h-48 w-48  rounded-full"
                      />
                    </div>
                    <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight text-center">
                      {name}
                    </h3>
                    <div className="text-gray-500 dark:text-gray-400 text-center">{occupation}</div>
                    <div className="text-gray-500 dark:text-gray-400 text-center">{company}</div>
                    <div className="pl-8 flex space-x-3 pt-6 pb-10">
                      <SocialIcon kind="mail" href={`mailto:${email}`} />
                      <SocialIcon kind="github" href={github} />
                      <SocialIcon kind="linkedin" href={linkedin} />
                      <SocialIcon kind="twitter" href={twitter} />
                    </div>
                  </span>
                </span>
              </div>
            </div>
            <div className="text-center mx-3 pt-4 grid items-center gap-10 transition duration-1000 hover:scale-110">
              <Link href={`/skills`}>
                <div className=" group items-center relative">
                  <div className=" animate-tilt items-center absolute -inset-0.5 rounded-lg bg-gradient-to-r from-cyan-300 to-cyan-300 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                  <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                    <span className="flex text-center space-x-5">
                      <div className="mx-20 text-center">
                        <h2
                          className=" font-extrabold    bg-clip-text text-transparent 
    bg-gradient-to-r from-cyan-300 to-sky-700  md:text-3xl"
                        >
                          Skills
                        </h2>
                      </div>
                    </span>
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">{children}</div>
        </div>
      </div>
    </>
  )
}
