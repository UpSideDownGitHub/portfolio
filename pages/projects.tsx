import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import { PageSEO } from '@/components/SEO'
import ProjectCard from '@/components/ProjectCard'

var anyData = false

export default function Projects() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1
            className="text-3xl font-extrabold leading-9 tracking-tight inline-block bg-clip-text text-transparent 
        bg-gradient-to-r from-teal-600 via-cyan-300 to-sky-700 sm:text-4xl md:text-6xl md:leading-14 pb-2"
          >
            Profesonal Projects
          </h1>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
          {(anyData = false)}
            {projectsData.map((d) => {
              if (d.type == 0) {
                anyData = true
                return (
                  <ProjectCard
                    key={d.title}
                    title={d.title}
                    description={d.description}
                    imgSrc={d.imgSrc}
                    github={d.github}
                    tools={d.tools}
                    itch={d.itch}
                    blog={d.blog}
                  />
                )
              }
            })}
            {!anyData && (
              <h1
                className="text-3xl font-extrabold leading-9 tracking-tight inline-block bg-clip-text text-transparent 
              bg-gradient-to-r from-teal-600 via-cyan-300 to-sky-700 sm:text-4xl md:text-3xl md:leading-14 pl-5 pb-2"
              >
                No Projects Avaiable
              </h1>
            )}
          </div>
        </div>
      </div>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1
            className="text-3xl font-extrabold leading-9 tracking-tight inline-block bg-clip-text text-transparent 
        bg-gradient-to-r from-teal-600 via-cyan-300 to-sky-700 sm:text-4xl md:text-6xl md:leading-14 pb-2"
          >
            Personal Projects
          </h1>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {(anyData = false)}
            {projectsData.map((d) => {
              if (d.type == 1) {
                anyData = true
                return (
                  <ProjectCard
                    key={d.title}
                    title={d.title}
                    description={d.description}
                    imgSrc={d.imgSrc}
                    github={d.github}
                    tools={d.tools}
                    itch={d.itch}
                    blog={d.blog}
                  />
                )
              }
            })}
            {!anyData && (
              <h1
                className="text-3xl font-extrabold leading-9 tracking-tight inline-block bg-clip-text text-transparent 
              bg-gradient-to-r from-teal-600 via-cyan-300 to-sky-700 sm:text-4xl md:text-3xl md:leading-14 pl-5 pb-2"
              >
                No Projects Avaiable
              </h1>
            )}
          </div>
        </div>
      </div>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1
            className="text-3xl font-extrabold leading-9 tracking-tight inline-block bg-clip-text text-transparent 
        bg-gradient-to-r from-teal-600 via-cyan-300 to-sky-700 sm:text-4xl md:text-6xl md:leading-14 pb-2"
          >
            Game Jam's
          </h1>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
          {(anyData = false)}
            {projectsData.map((d) => {
              if (d.type == 2) {
                anyData = true
                return (
                  <ProjectCard
                    key={d.title}
                    title={d.title}
                    description={d.description}
                    imgSrc={d.imgSrc}
                    github={d.github}
                    tools={d.tools}
                    itch={d.itch}
                    blog={d.blog}
                  />
                )
              }
            })}
            {!anyData && (
              <h1
                className="text-3xl font-extrabold leading-9 tracking-tight inline-block bg-clip-text text-transparent 
              bg-gradient-to-r from-teal-600 via-cyan-300 to-sky-700 sm:text-4xl md:text-3xl md:leading-14 pl-5 pb-2"
              >
                No Projects Avaiable
              </h1>
            )}
          </div>
        </div>
      </div>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1
            className="text-3xl font-extrabold leading-9 tracking-tight inline-block bg-clip-text text-transparent 
        bg-gradient-to-r from-teal-600 via-cyan-300 to-sky-700 sm:text-4xl md:text-6xl md:leading-14 pb-2"
          >
            University Projects
          </h1>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
          {(anyData = false)}
            {projectsData.map((d) => {
              if (d.type == 3) {
                anyData = true
                return (
                  <ProjectCard
                    key={d.title}
                    title={d.title}
                    description={d.description}
                    imgSrc={d.imgSrc}
                    github={d.github}
                    tools={d.tools}
                    itch={d.itch}
                    blog={d.blog}
                  />
                )
              }
            })}
            {!anyData && (
              <h1
                className="text-3xl font-extrabold leading-9 tracking-tight inline-block bg-clip-text text-transparent 
              bg-gradient-to-r from-teal-600 via-cyan-300 to-sky-700 sm:text-4xl md:text-3xl md:leading-14 pl-5 pb-2"
              >
                No Projects Avaiable
              </h1>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
