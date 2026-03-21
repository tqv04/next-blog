"use client";
import styles from "@/stylesheets/Section1.module.css";
import { Pencil } from "lucide-react";

export default function Section1() {
  return (
    <section className={styles.section}>
      <p className={styles.topText}>
        Connect with millions of top-rated ✨ designers & agencies around the
        world.
      </p>

      <h1 className={styles.title}>Thousands of graphics in one place!</h1>

      <form className={styles.searchBox}>
        <input placeholder="Search for magic inspiration..." />

        <button type="button">
          <Pencil size={18} />
        </button>
      </form>
    </section>
  );
}
