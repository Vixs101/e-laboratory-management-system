import Image from "next/image";
import AuthGuard from "@/components/auth-guard/page";

export default function Home() {
  return (
    <AuthGuard>
      <main className="min-h-screen bg-gray-900 mt-14 md:mt-0 md:ml-56 lg:ml-64 px-7 py-5 md:p-12 text-white">
        <div className="flex flex-col md:flex-row justify-between gap-2 bg-gray-800 w-full rounded px-10 md:px-20 md:py-3 mb-8 md:mb-12">
          <aside className="flex flex-col gap-5 pt-5 md:w-1/2 text-center md:text-start">
            <h1 className="text-3xl md:text-5xl font-bold">Lorem ipsum dolor sit</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.
            </p>
            <button
              type="button"
              className={
                "rounded text-white text-center md:w-1/3 p-2 mt-10 text-xl bg-indigo-600 hover:bg-indigo-500"}
            >
              Lorem ipsum
            </button>

          </aside>
          <aside className=" flex items-center justify-center">
            <Image
              src="/images/hero.png"
              alt="An illustration of two scientists in the laboratory"
              width={350}
              height={140}
            />
          </aside>
        </div>
        <div className="">
          <h2 className="font-bold text-xl md:text-2xl text-center md:text-start">Lorem ipsum dolor sit amet</h2>
          <p className="text-justify text-lg">
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
          </p>
        </div>
      </main>
     </AuthGuard>
  );
}
