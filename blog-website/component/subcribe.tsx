"use client";
import styles from "@/stylesheets/subscribe.module.css";
import { Mail } from "lucide-react";

export default function Subscribe() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.left}>
          <h2>Subscribe to our Newsletter</h2>

          <div className={styles.features}>
            <span>✓ Weekly email newsletter</span>
            <span>✓ Access to comments</span>
            <span>✓ No spam ever</span>
            <span>✓ Access to members only posts</span>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.inputBox}>
            <input type="email" placeholder="Enter your email" />

            <button>
              Subscribe
              <Mail size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
