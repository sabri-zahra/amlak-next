import Connect from "@/utils/network";
import User from "@/models/user";
import HashPassword from "@/utils/operations/Password";
//import NextAuth from "next-auth/next";
import { NextResponse } from "next/server";

export async function Post() {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json({
        status: 422,
        message: "لطفا تمام فیلدها را پر کنید.",
      });
    }
    await Connect();
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json({
        status: 401,
        message: "کاربر ثبت نام کرده است",
      });
    }
    const hashedPassword = await HashPassword(password);

    const newUser = User.create({
      email,
      password: hashedPassword,
    });
    return NextResponse.json({
      status: 201,
      message: "ثبت نام انجام شد.",
      data: newUser,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, message: "Server Error!" });
  }
}
