"use client";
import Link from "next/link";
import { Search, ChevronDown, Mail } from "lucide-react";
import styles from "@/stylesheets/Header.module.css";
import { useState } from "react";
import SearchOverlay from "./Searchoverlay";
import { usePathname } from "next/navigation";
import menu from "@/data/menu.json"
export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  if (pathname.startsWith("/postcard")) return null;
  return (
    <>
      <header className={styles.header}>
      <Link href="/" className={styles.left}>
        <div className={styles.logo}></div>
        <h1>vinblog</h1>
      </Link>
       

      <nav className={styles.navbar}>
        {menu.map((item, index) => (
          <div key={index} className={styles.menuItem}>
            
            <div className={styles.menuLink}>
              <Link href={item.link || "#"}>{item.title}</Link>
              {item.children && <ChevronDown size={16} />}
            </div>

            {item.children && (
              <div className={styles.dropdown}>
                {item.children.map((child, i) => (
                  <Link key={i} href={child.link}>
                    {child.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
            <Search
                  size={18}
                  className={styles.search}
                  onClick={() => setSearchOpen(true)}
                />
      </nav>
       

        <div className={styles.right}>
          <button className={styles.subscribe}>
            Subcribe <Mail size={18} />
          </button>
        </div>
      </header>
      <SearchOverlay open={searchOpen} setOpen={setSearchOpen} />
    </>
  );
}
