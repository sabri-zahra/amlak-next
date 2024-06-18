import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function AccountLayout({ children }) {
  const session = await getServerSession(authOptions);
  console.log(session);
  if (!session) redirect("/signIn");
  return <div>{children}</div>;
}
