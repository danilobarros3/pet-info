import { AuthProvider } from "@/context/authContext";
import { Main } from "@/main";

export default function Page() {
  return (
    <AuthProvider>
      <Main/>
    </AuthProvider>
  );
}
