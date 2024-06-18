"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/components/templates/SignUpPage.module.css";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function SignUpPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupHandler = async (e) => {
    e.preventDefaults();
    const res = await fetch("/api/auth/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (data.status === 201) {
      toast.success(data.message);
      router.push("signIn");
    } else {
      toast.error(data.message);
    }
  };
  return (
    <div className={styles.container}>
      <form>
        <div>
          <label htmlFor="email">ایمیل:</label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">کلمه عبور:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={signupHandler}>ثبت نام</button>
        <div className={styles.link}>
          <Link href="signIn">
            <p>حساب کاربری دارید؟ ورود</p>
          </Link>
        </div>
      </form>
      <div className={styles.image}>
        <Image
          src="/pictures/2bb70cc2f77993b57b37661c6e54f05b.jpg"
          width="350"
          height="200"
        />
      </div>
      <Toaster />
    </div>
  );
}
