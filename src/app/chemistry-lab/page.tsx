import Image from 'next/image';
import AuthGuard from "../../components/auth-guard/page";
import { tools } from "../../utils/dummy-data/page";

export default function ChemistryLab() {
  return (
    <AuthGuard>
      <main className="min-h-screen bg-gray-900 mt-14 md:mt-0 md:ml-56 lg:ml-64 px-7 py-5 md:p-12 text-white">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-3 lg:gap-6">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="flex flex-col items-center gap-3 bg-gray-50 hover:bg-slate-200 border-2 rounded-lg cursor-pointer p-2"
            >
              <Image
                src={`/images/${tool.image}.webp`}
                alt="This is a tool used in the computer lab"
                width={200}
                height={70}
                priority    
              />
              <div className="px-3 gap-6 pb-50 border-t-2 border-indigo-600">
                <h2 className="text-lg md:text-sm lg:text-lg text-black font-semibold">
                  {tool.title}
                </h2>
                <p className="text-[#8f8f3b] text-xs lg:text-base mb-2">
                  {tool.description}
                </p>
                <button className="rounded text-white text-center w-full lg:w-1/2 p-2 bg-indigo-600 hover:bg-indigo-500">
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
     
      </main>
    </AuthGuard>
  )
}
