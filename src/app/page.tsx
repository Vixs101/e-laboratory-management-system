import Image from "next/image";
import AuthGuard from "@/components/auth-guard/page";

export default function Home() {
  return (
    <AuthGuard>
      <main className="min-h-screen bg-gray-900 mt-14 md:mt-0 md:ml-56 lg:ml-64 px-7 py-5 md:p-12 text-white">
        <div className="flex flex-col md:flex-row justify-between gap-2 bg-gray-800 w-full rounded px-5 md:px-20 md:py-3 mb-8 md:mb-12">
          <aside className="flex flex-col gap-5 pt-5 md:w-1/2 text-center md:text-start">
            <h1 className="text-xl md:text-4xl font-bold">Econometrics Laboratory</h1>
            <p className="text-lg text-justify">
              Econometrics is the use of statistical methods to analyze economic data. It combines economics, mathematics, and statistics to test theories and make forecasts. By examining real-world data, econometrics helps economists understand relationships like supply and demand, providing a basis for decision-making and policy formulation.
            </p>
            <button
              type="button"
              className={
                "rounded text-white text-center md:w-1/3 p-2 text-xl bg-indigo-600 hover:bg-indigo-500"}
            >
              History
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
          <h2 className="font-bold text-xl md:text-2xl text-center md:text-start">Econometrics Laboratory</h2>
          <p className="text-justify text-lg">
            Econometrics is the application of statistical and mathematical techniques to economic data to test hypotheses and forecast future trends. It combines economic theory, mathematics, and statistics to analyze real-world economic phenomena, offering empirical validation to theoretical models. Econometrics plays a crucial role in understanding complex relationships in economics, such as consumer behavior, market dynamics, and policy impacts. By employing methods like regression analysis, it helps identify patterns and relationships, guiding economists in making informed decisions. The discipline requires a deep understanding of both economics and statistical methods, making it essential for those looking to engage in data-driven economic analysis and research.     
          </p>
        </div>
      </main>
    </AuthGuard>
  );
}
