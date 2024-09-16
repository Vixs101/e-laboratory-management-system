import AuthGuard from "@/components/auth-guard/page";

export default function About() {
  return (
    <AuthGuard>
      <main className="min-h-screen bg-gray-900 mt-14 md:mt-0 md:ml-56 lg:ml-64 px-7 py-5 md:p-12 text-white">
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
