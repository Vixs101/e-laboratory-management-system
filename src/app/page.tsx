import Image from "next/image";
import AuthGuard from "@/components/auth-guard/page";

export default function Home() {
  return (
    <AuthGuard>
      <main className="flex min-h-screen flex-col items-center justify-between py-24  bg-gray-900 md:ml-56 lg:ml-64 text-white">
        <div className="flex justify-between gap-2 bg-gray-800 w-11/12 rounded px-24 py-3">
          <aside className="flex flex-col gap-5 pt-5 w-1/2">
            <h1 className="text-5xl font-bold">Lorem ipsum dolor sit</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <button
              type="button"
              className={
                "rounded text-white text-center w-1/3 p-2 mt-10 text-xl bg-indigo-600 hover:bg-indigo-500"}
            >
              Lorem ipsum
            </button>

          </aside>
          <aside className=" flex items-center justify-center">
            <Image
              src="/images/hero.png"
              alt="An illustration of two scientists in the laboratory"
              width={330}
              height={140}
            />
          </aside>
        </div>
      </main>
     </AuthGuard>
  );
}
