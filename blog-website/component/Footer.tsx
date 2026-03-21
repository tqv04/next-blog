"use client";
import styles from "@/stylesheets/Footer.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Footer() {
  const pathname = usePathname();

  if (pathname.startsWith("/postcard")) return null;
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.logoContainer}>
              <div className={styles.logo}></div>
              <h1>vinblog</h1>
            </div>

            <div>
              <p>
                A super modern theme following the latest trends with premium
                features and fully compatible with WordPress.
              </p>
              <p>Check more themes like this on estudiopatagon.com</p>
            </div>
          </div>
          <div className={styles.middle}>
            <h1>Quick Link</h1>
            <Link href="/">Home</Link>
            <Link href="/">Terms & Conditions</Link>
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Contact</Link>
          </div>
          <div className={styles.right}>
            <h1>Follow me!</h1>
            <p>Don`t forget to follow for special updates and offers!</p>
            <div className={styles.buttongroup}>
              <button>x</button>
              <button>f</button>
              <button>i</button>
              <button>t</button>
              <button>r</button>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>Vinblog Theme by EstudioPatagon</div>
      </footer>
    </>
  );
}
