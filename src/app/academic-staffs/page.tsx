import AuthGuard from "../../components/auth-guard/page";

export default function AcademicStaff() {
  return (
    <AuthGuard>
      <h1>Academic Staffs</h1>   
    </AuthGuard>
  )
}
