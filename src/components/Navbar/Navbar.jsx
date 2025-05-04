import { useEffect, useState } from "react";
import { Closebar, Sidebar } from "../../assets/icons/siteIcons";
import styles from "./Navbar.module.css";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const { hash } = useLocation();
  const isHomePage = useLocation().pathname === "/";

  const navTitles = [
    {
      isClose: true,
      content: <Closebar style={{ fontSize: "35px" }} />,
    },
    {
      id: "#projects",
      content: "Projects",
    },
    {
      id: "#career",
      content: "Career",
    },
    {
      id: "#skills",
      content: "Skills",
    },
    {
      id: "#education",
      content: "Education",
    },
    {
      isRoute: true,
      id: "/resume",
      content: "Resume",
    },
  ];

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return (
    <>
      <div id="header" className="commonCSS">
        <div className={styles.sidebar}>
          <nav className={styles.navbar}>
            <div
              className={`${styles.navList} ${
                isOpen ? styles.navListOpen : ""
              }`}
            >
              {navTitles.map((item, index) =>
                item.isClose ? (
                  <button
                    key={index}
                    onClick={() => setOpen(false)}
                    className={styles.closeBtn}
                  >
                    {item.content}
                  </button>
                ) : item.isRoute ? (
                  <NavLink
                    key={index}
                    to={item.id}
                    onClick={() => setOpen(false)}
                  >
                    {item.content}
                  </NavLink>
                ) : isHomePage ? (
                  <a key={index} href={item.id} onClick={() => setOpen(false)}>
                    {item.content}
                  </a>
                ) : (
                  <NavLink
                    key={index}
                    to={`/` + `${item.id}`}
                    onClick={() => setOpen(false)}
                  >
                    {item.content}
                  </NavLink>
                )
              )}
            </div>
          </nav>

          <div className={styles.sidebarBtn}>
            <button className={styles.openBtn} onClick={() => setOpen(!isOpen)}>
              <Sidebar style={{ fontSize: "35px" }} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
