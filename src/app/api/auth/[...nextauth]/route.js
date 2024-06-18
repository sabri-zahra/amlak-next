import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Connect from "@/utils/network";
import { VerifyPassword } from "@/utils/operations/Password";

export const authOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async autorize(credential) {
        const { email, password } = credential;
        if (!email || !password) {
          throw new Error("لطفا تمامی فیلدها را پر کنید");
          return;
        }
        await Connect();
        const user = User.findOne({ email });
        if (!user) {
          throw new Error("کاربر ثبت نام نکرده است.");
          return;
        }
        const verifyPassword = await VerifyPassword(password, user.password);
        if (!verifyPassword) {
          throw new Error("ایمیل یا پسورد اشتباه است");
          return;
        }
        return { email };
      },
    }),
  ],
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
