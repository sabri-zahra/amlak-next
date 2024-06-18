import SignUpPage from "@/components/templates/SignUpPage";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/account");
  }

  return <SignUpPage />;
}
