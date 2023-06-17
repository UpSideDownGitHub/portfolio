import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import formatDate from '@/lib/utils/formatDate'
import { sortedBlogPost, allCoreContent } from '@/lib/utils/contentlayer'
import { InferGetStaticPropsType } from 'next'
import NewsletterForm from '@/components/NewsletterForm'
import { allBlogs } from 'contentlayer/generated'
import Image from '@/components/Image'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import ProjectCard from '@/components/ProjectCard'

const MAX_DISPLAY = 3
const MAX_PROJECTS = 2
var anyData = false

export const getStaticProps = async () => {
  // TODO: move computation to get only the essential frontmatter to contentlayer.config
  const sortedPosts = sortedBlogPost(allBlogs)
  const posts = allCoreContent(sortedPosts)

  return { props: { posts } }
}

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1
            className="text-3xl font-extrabold leading-9 tracking-tight inline-block bg-clip-text text-transparent 
        bg-gradient-to-r from-teal-600 via-cyan-300 to-sky-700 sm:text-4xl md:text-6xl md:leading-14 pb-2"
          >
            Introduction
          </h1>
        </div>

        <div className="flex pt-10">
          <div className="flex-none w-56 relative transition ease-in-out hover:scale-110">
            <Link href={`/about`} aria-label={`Link to About`}>
              <Image
                src="/static/images/Face.jpg"
                alt="avatar"
                width="192px"
                height="192px"
                className="h-48 w-48 rounded-full"
              />
            </Link>
          </div>
          <div className="flex-auto p-6 flex flex-wrap">
            <h1 className="flex-auto text-lg leading-7 text-gray-500 dark:text-gray-400">
              Hello, i am Reuben Miller
            </h1>
          </div>
        </div>
      </div>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="md:space-y-50 space-y-2 pt-10 pb-8">
          <h1
            className="text-3xl font-extrabold leading-9 tracking-tight inline-block bg-clip-text text-transparent 
        bg-gradient-to-r from-teal-600 via-cyan-300 to-sky-700 sm:text-4xl md:text-6xl md:leading-14 pb-2"
          >
            Latest Projects
          </h1>
        </div>

        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="container py-12">
            <div className="-m-4 flex flex-wrap">
              {(anyData = false)}
              {projectsData.slice(0, MAX_PROJECTS).map((d) => {
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
      </div>
      {projectsData.length > MAX_PROJECTS && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/projects"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all projects"
          >
            All Projects &rarr;
          </Link>
        </div>
      )}

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="md:space-y-50 space-y-2 pt-10 pb-8">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight inline-block bg-clip-text text-transparent 
        bg-gradient-to-r from-teal-600 via-cyan-300 to-sky-700 sm:text-4xl md:text-6xl md:leading-14 pb-2">
            Latest Blog Posts
          </h1>
        </div>

        <ul>
        {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <div className="my-10 mx-4 grid items-start gap-10 transition duration-1000 hover:scale-110">
                <div className="group relative">
                  <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-teal-600 to-teal-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                  <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                    <span className="flex items-center space-x-5">
                      <div className="flex">
                        <Link
                          href={`/blog/${slug}`}
                          key={slug}
                          className="group bg-opacity-1 flex bg-transparent px-2"
                        >
                          <li key={slug} className="py-6">
                            <article className=" xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-3">
                              <dl>
                                <dd className="text-sm font-normal leading-6 text-gray-500 dark:text-gray-400">
                                  <time dateTime={date}>{formatDate(date)}</time>
                                </dd>
                              </dl>
                              <div className="space-y-5 xl:col-span-4">
                                <div className="space-y-1">
                                  <div>
                                    <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                      <Link
                                        href={`/blog/${slug}`}
                                        className="text-3xl font-extrabold leading-9 tracking-tight inline-block bg-clip-text text-transparent 
                                        bg-gradient-to-r from-teal-600 via-cyan-300 to-sky-700 sm:text-4xl md:text-4xl md:leading-14"
                                      >
                                        {title}
                                      </Link>
                                    </h2>
                                  </div>
                                  <div className="flex flex-wrap">
                                    {tags.map((tag) => (
                                      <Tag key={tag} text={tag} />
                                    ))}
                                  </div>
                                  <div className="prose max-w-none pt-5 text-gray-500 dark:text-gray-400">
                                    {summary}
                                  </div>
                                </div>
                              </div>
                            </article>
                          </li>
                        </Link>
                      </div>
                    </span>
                  </span>
                </div>
              </div>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
