"use client";
import Link from "next/link";
import styles from "@/components/modules/Header.module.css";
import { useSession } from "next-auth/react";

function Header() {
  const { data } = useSession();
  console.log(data);
  return (
    <div className={styles.container}>
      <div className={styles.right}>
        <Link href="/">صفحه اصلی</Link>
        <Link href="/buy-residential">آگهی ها</Link>
      </div>
      <div className={styles.left}>
        <div className={styles.login}>
          {!data ? (
            <Link href="/signIn">ورود</Link>
          ) : (
            <Link href="/account">حساب کاربری</Link>
          )}
        </div>
      </div>
    </div>
  );
  // return (
  //   <div className={styles.container}>
  //     <div className={styles.right}>
  //       <Link href="/">صفحه اصلی</Link>
  //       <Link href="/buy-residential">آگهی ها</Link>
  //     </div>
  //     <div className={styles.left}>
  //       <div className={styles.login}>
  //         <Link href="/">ورود</Link>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default Header;
