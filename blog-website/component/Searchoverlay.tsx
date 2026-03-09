"use client";

import { useEffect } from "react";
import styles from "../stylesheets/searchOverlay.module.css";
import { X } from "lucide-react";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SearchOverlay({ open, setOpen }: Props) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [setOpen]);

  if (!open) return null;

  return (
    <div className={styles.overlay}>
      <button className={styles.close} onClick={() => setOpen(false)}>
        <X size={20} />
      </button>

      <div className={styles.box}>
        <p>Press ESC to close</p>

        <div className={styles.search}>
          <input placeholder="Search for magic inspiration..." />
          <button>✨</button>
        </div>
      </div>
    </div>
  );
}
