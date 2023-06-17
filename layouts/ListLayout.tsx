import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { ComponentProps, useState } from 'react'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'
import { CoreContent } from '@/lib/utils/contentlayer'
import { type Blog } from 'contentlayer/generated'

interface Props {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: ComponentProps<typeof Pagination>
}

export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination }: Props) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((post) => {
    const searchContent = post.title + post.summary + post.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <div className="divide-y">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight inline-block bg-clip-text text-transparent 
        bg-gradient-to-r from-teal-600 via-cyan-300 to-sky-700 sm:text-4xl md:text-6xl md:leading-14">
            {title}
          </h1>
          <div className="relative max-w-lg">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles"
              className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute right-14 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <div className="absolute -right-1 top-2">
              <Link
                href={`/tags`}
                className="mr-3 text-xl text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 "
              >
                {`Tags`}
              </Link>
            </div>
          </div>
        </div>

        <ul>
          {!filteredBlogPosts.length && 'No posts found.'}
          {displayPosts.map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
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
                                        className="text-gray-900 transition duration-500 ease-in-out hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-500"
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
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
