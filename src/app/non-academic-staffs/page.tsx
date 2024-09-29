import AuthGuard from "../../components/auth-guard/page";

export default function NonAcademicStaffs() {
  return (
    <AuthGuard>
      <div>
        <h1>NonAcademicStaffs</h1>
      </div>
    </AuthGuard>
  )
};
