import SkillIcon from '@/components/skill-icons/index2'

export default function Skills() {
    return (
        <>
    <div className="space-y-2 pt-6 md:space-y-5">
        <h1
          className="text-3xl font-extrabold leading-9 tracking-tight inline-block bg-clip-text text-transparent 
        bg-gradient-to-r from-teal-600 via-cyan-300 to-sky-700 sm:text-4xl md:text-6xl md:leading-14"
        >
          Skills
        </h1>
      </div>

      <div className="flex flex-auto pb-5">
        <div className="my-4 mx-4 grid items-start gap-10 transition duration-1000 hover:scale-110">
          <div className="group relative">
            <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-teal-600 to-cyan-300 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
            <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
              <span className="flex items-center space-x-5">
                <div className="flex">
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
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1
          className="text-3xl font-extrabold leading-9 tracking-tight inline-block bg-clip-text text-transparent 
        bg-gradient-to-r from-teal-600 to-cyan-300 sm:text-4xl md:text-4xl md:leading-14"
        >
          Languages
        </h1>
      </div>
      <div className="flex flex-wrap pt-5 ">
        <div className="my-4 mx-4 grid items-start gap-10 transition duration-1000 hover:scale-110">
          <div className="group relative">
            <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-teal-600 to-teal-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
            <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
              <span className="flex items-center space-x-5">
                <div className="flex">
                  <SkillIcon kind="cSharp" size={10} />
                  <div className="pl-2 pr-2 pt-2 dark:prose-dark">C#</div>
                  <SkillIcon kind="advanced" size={10} />
                </div>
              </span>
            </span>
          </div>
        </div>
        <div className="my-4 mx-4 grid items-start gap-10 transition duration-1000 hover:scale-110">
          <div className="group relative">
            <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-teal-600 to-teal-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
            <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
              <span className="flex items-center space-x-5">
                <div className="flex">
                  <SkillIcon kind="cPlusPlus" size={10} />
                  <div className="pl-2 pr-2 pt-2 dark:prose-dark">C++</div>
                  <SkillIcon kind="proficent" size={10} />
                </div>
              </span>
            </span>
          </div>
        </div>
        <div className="my-4 mx-4 grid items-start gap-10 transition duration-1000 hover:scale-110">
          <div className="group relative">
            <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-teal-600 to-teal-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
            <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
              <span className="flex items-center space-x-5">
                <div className="flex">
                  <SkillIcon kind="java" size={10} />
                  <div className="pl-2 pr-2 pt-2 dark:prose-dark ">JAVA</div>
                  <SkillIcon kind="intermediate" size={10} />
                </div>
              </span>
            </span>
          </div>
        </div>
        <div className="my-4 mx-4 grid items-start gap-10 transition duration-1000 hover:scale-110">
          <div className="group relative">
            <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-teal-600 to-teal-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
            <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
              <span className="flex items-center space-x-5">
                <div className="flex">
                  <SkillIcon kind="python" size={10} />
                  <div className="pl-2 pr-2 pt-2 dark:prose-dark ">Python</div>
                  <SkillIcon kind="intermediate" size={10} />
                </div>
              </span>
            </span>
          </div>
        </div>
        <div className="my-4 mx-4 grid items-start gap-10 transition duration-1000 hover:scale-110">
          <div className="group relative">
            <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-teal-600 to-teal-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
            <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
              <span className="flex items-center space-x-5">
                <div className="flex">
                  <SkillIcon kind="html" size={10} />
                  <div className="pl-2 pr-2 pt-2 dark:prose-dark ">HTML</div>
                  <SkillIcon kind="beginner" size={10} />
                </div>
              </span>
            </span>
          </div>
        </div>
        <div className="my-4 mx-4 grid items-start gap-10 transition duration-1000 hover:scale-110">
          <div className="group relative">
            <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-teal-600 to-teal-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
            <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
              <span className="flex items-center space-x-5">
                <div className="flex">
                  <SkillIcon kind="nextJS" size={10} />
                  <div className="pl-2 pr-2 pt-2 dark:prose-dark ">Next.js</div>
                  <SkillIcon kind="beginner" size={10} />
                </div>
              </span>
            </span>
          </div>
        </div>
        <div className="my-4 mx-4 grid items-start gap-10 transition duration-1000 hover:scale-110">
          <div className="group relative">
            <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-teal-600 to-teal-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
            <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
              <span className="flex items-center space-x-5">
                <div className="flex">
                  <SkillIcon kind="tailwindCSS" size={10} />
                  <div className="pl-2 pr-2 pt-2 dark:prose-dark ">Tailwind CSS</div>
                  <SkillIcon kind="beginner" size={10} />
                </div>
              </span>
            </span>
          </div>
        </div>
        <div className="my-4 mx-4 grid items-start gap-10 transition duration-1000 hover:scale-110">
          <div className="group relative">
            <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-teal-600 to-teal-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
            <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
              <span className="flex items-center space-x-5">
                <div className="flex">
                  <SkillIcon kind="vb" size={10} />
                  <div className="pl-2 pr-2 pt-2 dark:prose-dark ">Visual Basic</div>
                  <SkillIcon kind="beginner" size={10} />
                </div>
              </span>
            </span>
          </div>
        </div>
        <div className="my-4 mx-4 grid items-start gap-10 transition duration-1000 hover:scale-110">
          <div className="group relative">
            <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-teal-600 to-teal-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
            <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
              <span className="flex items-center space-x-5">
                <div className="flex">
                  <SkillIcon kind="typeScript" size={10} />
                  <div className="pl-2 pr-2 pt-2 dark:prose-dark ">Type Script</div>
                  <SkillIcon kind="beginner" size={10} />
                </div>
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1
          className="text-3xl font-extrabold leading-9 tracking-tight inline-block bg-clip-text text-transparent 
        bg-gradient-to-r from-cyan-300 to-sky-700 sm:text-4xl md:text-4xl md:leading-14"
        >
          Programs
        </h1>
      </div>
      <div className="flex flex-wrap pt-5">
        <div className="my-4 mx-4 grid items-start gap-10 transition duration-1000 hover:scale-110">
          <div className="group relative">
            <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-cyan-300 to-cyan-300 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
            <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
              <span className="flex items-center space-x-5">
                <div className="flex">
                  <SkillIcon kind="unity" size={10} />
                  <div className="pl-2 pr-2 pt-2 dark:prose-dark">Unity</div>
                  <SkillIcon kind="advanced" size={10} />
                </div>
              </span>
            </span>
          </div>
        </div>
        <div className="my-4 mx-4 grid items-start gap-10 transition duration-1000 hover:scale-110">
          <div className="group relative">
            <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-cyan-300 to-cyan-300 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
            <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
              <span className="flex items-center space-x-5">
                <div className="flex">
                  <SkillIcon kind="unrealEngine" size={10} />
                  <div className="pl-2 pr-2 pt-2 dark:prose-dark ">Unreal Engine</div>
                  <SkillIcon kind="intermediate" size={10} />
                </div>
              </span>
            </span>
          </div>
        </div>
        <div className="my-4 mx-4 grid items-start gap-10 transition duration-1000 hover:scale-110">
          <div className="group relative">
            <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-cyan-300 to-cyan-300 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
            <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
              <span className="flex items-center space-x-5">
                <div className="flex">
                  <SkillIcon kind="godot" size={10} />
                  <div className="pl-2 pr-2 pt-2 dark:prose-dark ">GODOT</div>
                  <SkillIcon kind="intermediate" size={10} />
                </div>
              </span>
            </span>
          </div>
        </div>
        <div className="my-4 mx-4 grid items-start gap-10 transition duration-1000 hover:scale-110">
          <div className="group relative">
            <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-cyan-300 to-cyan-300 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
            <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
              <span className="flex items-center space-x-5">
                <div className="flex">
                  <SkillIcon kind="androidStudio" size={10} />
                  <div className="pl-2 pr-2 pt-2 dark:prose-dark ">Android Studio</div>
                  <SkillIcon kind="intermediate" size={10} />
                </div>
              </span>
            </span>
          </div>
        </div>
        <div className="my-4 mx-4 grid items-start gap-10 transition duration-1000 hover:scale-110">
          <div className="group relative">
            <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-cyan-300 to-cyan-300 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
            <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
              <span className="flex items-center space-x-5">
                <div className="flex">
                  <SkillIcon kind="visualStudio" size={10} />
                  <div className="pl-2 pr-2 pt-2 dark:prose-dark ">Visual Studio</div>
                  <SkillIcon kind="advanced" size={10} />
                </div>
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
)}
