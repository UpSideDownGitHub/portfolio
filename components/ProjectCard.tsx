import Image from './Image'
import Link from './Link'
import SocialIcon from './social-icons'

const ProjectCard = ({ title, description, imgSrc, github, tools, itch, blog }) => (
  <div className="card">
    <div className="my-4 mx-4 grid items-start gap-10 transition duration-1000 hover:scale-110">
      <div className="group relative">
        <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-teal-600 to-teal-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
        <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
          <span className="flex items-center space-x-5">
            <div className="flex">
              <div className="flex">
                <div className="flex-none w-96 relative">
                  <Image
                    title={title}
                    alt={title}
                    src={imgSrc}
                    width={1920}
                    height={1080}
                    layout="responsive"
                    placeholder="blur"
                    objectFit="cover"
                    blurDataURL={imgSrc}
                    quality={50}
                    className="object-cover object-center md:h-36 lg:h-48"
                  />
                </div>
                <div className="flex-auto p-6 flex flex-wrap">
                  <div className="flex-auto ">
                    <h1
                      className="text-3xl font-extrabold leading-9 tracking-tight inline-block bg-clip-text text-transparent 
        bg-gradient-to-r from-teal-600 via-cyan-300 to-sky-700 sm:text-4xl md:text-3xl md:leading-14"
                    >
                      {title}
                    </h1>
                    <p className="truncate-2 prose max-w-none text-gray-500 dark:text-gray-400">
                      {description}
                    </p>

                    <div className="flex flex-wrap items-center  gap-1">
                      {tools.map((tool, index) => {
                        return (
                          <span
                            key={`${tool}-${index}`}
                            className="bg-gray-900 px-2 py-1 text-xs text-gray-500 md:text-lg rounded-xl"
                          >
                            {tool}
                          </span>
                        )
                      })}
                    </div>
                    <div className="flex">
                      <div className="mt-auto flex w-fit items-center gap-4 p-2">
                        {github && <SocialIcon kind="github" href={github} size={6} />}
                        {itch && <SocialIcon kind="itch" href={itch} size={6} />}
                        {blog && (
                          <Link
                            href={blog}
                            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            aria-label={`Link to ${title}`}
                          >
                            Learn more &rarr;
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </span>
        </span>
      </div>
    </div>
  </div>
)

export default ProjectCard
