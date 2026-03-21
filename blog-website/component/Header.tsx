"use client";
import Link from "next/link";
import { Search, ChevronDown, Mail } from "lucide-react";
import styles from "@/stylesheets/Header.module.css";
import { useState } from "react";
import SearchOverlay from "./Searchoverlay";
import { usePathname } from "next/navigation";
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  if (pathname.startsWith("/postcard")) return null;
  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <div className={styles.logo}></div>
          <h1>vinblog</h1>
        </div>

        <nav className={`${styles.navbar} ${open ? styles.active : ""}`}>
          <div className={styles.menuItem}>
            <Link href="/">Home</Link>
            <ChevronDown size={16} />
            <div className={styles.dropdown}>
              <Link href="#">Home Classic /w Intro</Link>
              <Link href="#">Home Magazine /w Intro</Link>
              <Link href="#" className={styles.activeItem}>
                Home Prompts + Magazine
              </Link>
              <Link href="#">Home Classic with Sidebar</Link>
              <Link href="#">Home Posts Carousel</Link>
              <Link href="#">Home Minimal</Link>
              <Link href="#">Home Prompts + Grid Posts</Link>
              <Link href="#">Home Grid Posts Only</Link>
            </div>
          </div>
          <div className={styles.menuItem}>
            <Link href="#">Header Styles</Link>
            <ChevronDown size={16} />
            <div className={styles.dropdown}>
              <Link href="#"> Minimalist Style (default)</Link>
              <Link href="#">Classic Style</Link>
              <Link href="#" className={styles.activeItem}>
                Notice on Top
              </Link>
            </div>
          </div>
          <div className={styles.menuItem}>
            <Link href="#">Post Features</Link>
            <ChevronDown size={16} />
            <div className={styles.dropdown}>
              <Link href="#">Post Formats</Link>
              <Link href="#">Fullwidth with Sidebar</Link>
              <Link href="#" className={styles.activeItem}>
                Fullwidth no Sidebar
              </Link>
              <Link href="#" className={styles.activeItem}>
                Vertical with Sidebar
              </Link>
              <Link href="#" className={styles.activeItem}>
                Vertical no Sidebar
              </Link>
              <Link href="#" className={styles.activeItem}>
                Classic with Sidebar
              </Link>
              <Link href="#" className={styles.activeItem}>
                Post Pagination
              </Link>
            </div>
          </div>
          <div className={styles.menuItem}>
            <Link href="#">#Tags</Link>
          </div>
          <div className={styles.menuItem}>
            <Link href="#">Features</Link>
            <ChevronDown size={16} />
            <div className={styles.dropdown}>
              <Link href="#"> Style Guide</Link>
              <Link href="#">Gutenberg Blocks</Link>
              <Link href="#" className={styles.activeItem}>
                Explore our Categories
              </Link>
              <Link href="#" className={styles.activeItem}>
                Meet the Authors
              </Link>
              <Link href="#" className={styles.activeItem}>
                Prompts Archive
              </Link>
              <Link href="#" className={styles.activeItem}>
                Buttons
              </Link>
              <Link href="#" className={styles.activeItem}>
                Accordions and Tabs
              </Link>
              <Link href="#" className={styles.activeItem}>
                Columns
              </Link>
              <Link href="#" className={styles.activeItem}>
                Alert Messages
              </Link>
              <Link href="#" className={styles.activeItem}>
                404 Page
              </Link>
              <Link href="#" className={styles.activeItem}>
                Author Page
              </Link>
            </div>
          </div>
          <div className={styles.menuItem}>
            <Link href="#">Contact</Link>
          </div>
          <Search
            size={18}
            className={styles.search}
            onClick={() => setOpen(true)}
          />
        </nav>

        <div className={styles.right}>
          <button className={styles.subscribe}>
            Subcribe <Mail size={18} />
          </button>
        </div>
      </header>
      <SearchOverlay open={open} setOpen={setOpen} />
    </>
  );
}
