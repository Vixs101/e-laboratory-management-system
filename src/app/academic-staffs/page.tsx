import AuthGuard from "../../components/auth-guard/page";

export default function AcademicStaff() {
  return (
    <AuthGuard>
      <main className="min-h-screen bg-gray-900 mt-14 md:mt-0 md:ml-56 lg:ml-64 px-7 py-5 md:p-12 text-white">
        <div>
          <h1 className="font-bold text-xl md:text-2xl text-center md:text-start">
            Academic Staffs
          </h1>
          <table className="w-full flex flex-col py-3 px-5 mt-7">
            <thead>
              <tr className="flex justify-between border-b-gray-800 border-b-2 pb-3 text-lg font-medium">
                <td>S/N</td>
                <td className="mr-5">Name</td>
                <td>Department</td>
              </tr>
            </thead>
            <tbody>
              <tr className="flex justify-between border-b-gray-800 border-b-2 pb-3 text-sm font-medium pt-2 hover:bg-gray-800">
                <td className="flex items-center gap-2">1.</td>
                <td className="flex items-center gap-2">James Etuk</td>
                <td className="flex items-center gap-2">Computer Science</td>
              </tr>
              <tr className="flex justify-between border-b-gray-800 border-b-2 pb-3 text-sm font-medium pt-2 hover:bg-gray-800">
                <td className="flex items-center gap-2">2.</td>
                <td className="flex items-center gap-2">James Etuk</td>
                <td className="flex items-center gap-2">Computer Science</td>
              </tr> 
              <tr className="flex justify-between border-b-gray-800 border-b-2 pb-3 text-sm font-medium pt-2 hover:bg-gray-800">
                <td className="flex items-center gap-2">3.</td>
                <td className="flex items-center gap-2">Blessing David</td>
                <td className="flex items-center gap-2">Computer Science</td>
              </tr>
              <tr className="flex justify-between border-b-gray-800 border-b-2 pb-3 text-sm font-medium pt-2 hover:bg-gray-800">
                <td className="flex items-center gap-2">4.</td>
                <td className="flex items-center gap-2">John Peter</td>
                <td className="flex items-center gap-2">Computer Science</td>
              </tr>
              <tr className="flex justify-between border-b-gray-800 border-b-2 pb-3 text-sm font-medium pt-2 hover:bg-gray-900">
                <td className="flex items-center gap-2">5.</td>
                <td className="flex items-center gap-2">Vera Idris</td>
                <td className="flex items-center gap-2">Computer Science</td>
              </tr>      
              <tr className="flex justify-between border-b-gray-800 border-b-2 pb-3 text-sm font-medium pt-2 hover:bg-gray-800">
                <td className="flex items-center gap-2">6.</td>
                <td className="flex items-center gap-2">Gladys Victor</td>
                <td className="flex items-center gap-2">Computer Science</td>
              </tr>
              <tr className="flex justify-between border-b-gray-800 border-b-2 pb-3 text-sm font-medium pt-2 hover:bg-gray-800">
                <td className="flex items-center gap-2">7.</td>
                <td className="flex items-center gap-2">Emmanuel Hope</td>
                <td className="flex items-center gap-2">Computer Science</td>
              </tr>
              <tr className="flex justify-between border-b-gray-800 border-b-2 pb-3 text-sm font-medium pt-2 hover:bg-gray-800">
                <td className="flex items-center gap-2">8.</td>
                <td className="flex items-center gap-2">Elijah Enoch</td>
                <td className="flex items-center gap-2">Computer Science</td>
              </tr>
            </tbody>

          </table>
        </div>
      </main>   
    </AuthGuard>
  )
}
