import withAuth from "@/components/HOC/withAuth";
import Home from "@/components/Home";

export default function HomePage() {
  const AuthHomePage = withAuth(Home);
  return <AuthHomePage />;
}
