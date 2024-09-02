import Image from "next/image";
import AuthGuard from "@/components/auth-guard/page";

export default function Home() {
  return (
    <AuthGuard>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-900">

      </main>
     </AuthGuard>
  );
}
