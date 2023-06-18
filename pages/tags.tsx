import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import kebabCase from '@/lib/utils/kebabCase'
import { getAllTags } from '@/lib/utils/contentlayer'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { allBlogs } from 'contentlayer/generated'

// TODO: refactor into contentlayer once compute over all docs is enabled

export const getStaticProps: GetStaticProps<{ tags: Record<string, number> }> = async () => {
  const tags = await getAllTags(allBlogs)

  return { props: { tags } }
}

export default function Tags({ tags }: InferGetStaticPropsType<typeof getStaticProps>) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
  return (
    <>
      <PageSEO title={`Tags - ${siteMetadata.author}`} description="Things I blog about" />
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="space-x-2 pt-6 pb-8 md:space-y-5">
          <h1
            className="text-3xl font-extrabold leading-9 tracking-tight inline-block bg-clip-text text-transparent 
        bg-gradient-to-r from-teal-600 via-cyan-300 to-sky-700 sm:text-4xl md:text-6xl md:leading-14 pb-2 md:border-r-2 md:px-6 "
          >
            Tags
          </h1>
        </div>
        <div className="flex flex-wrap">
          {Object.keys(tags).length === 0 && 'No tags found.'}
          {sortedTags.map((t) => {
            return (
              <div key={t} className=" mr-5">
                <Link
                  href={`/tags/${kebabCase(t)}`}
                  className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
                >
                  <div className="grid items-start gap-10 transition duration-1000 hover:scale-110">
                    <div className="group relative">
                      <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-teal-600 to-cyan-300 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                      <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                        <span className="flex items-center space-x-5">
                          <div className="flex">
                            <div
                              className="text-3xl font-extrabold leading-9 tracking-tight inline-block bg-clip-text text-transparent 
        bg-gradient-to-r from-teal-600 via-cyan-300 to-sky-700 sm:text-6xl md:text-sm md:leading-4  md:border-r-2 md:pr-4 "
                            >
                              {t}
                            </div>
                          </div>
                          <div className="text-3xl font-extrabold leading-9 tracking-tight inline-block bg-clip-text text-transparent 
        bg-gradient-to-r from-teal-600 via-cyan-300 to-sky-700 sm:text-4xl md:text-base ">{`${tags[t]}`}</div>
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
