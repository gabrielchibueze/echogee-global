"use client";
import { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./header.module.css";
import Image from "next/image";
import logo from "/public/images/echogeelogo.png";
import { FaFacebook, FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";
import { MdWifiCalling3, MdOutlineMail } from "react-icons/md";
import { VscLocation } from "react-icons/vsc";
export default function Header() {
  const initialMenuLinks = [
    { name: "HOME", link: "/", viewSub: false },
    { name: "ABOUT US", link: "/about", viewSub: false },
    {
      name: "SERVICES",
      link: "/services",
      viewSub: false,
      submenu: [
        { name: "Biogas Solutions", link: "/services/biogas" },
        { name: "Business Data Analytics", link: "/services/data-services" },
        { name: "Data Analytics Training", link: "/services/data-training" },
        { name: "Web Developement", link: "/services/web-design" },
        { name: "Project management", link: "/services/project-management" },
        { name: "Real Estate", link: "/services/real-estate" },
      ],
    },
    { name: "CLIENTS", link: "/clients" },
    {
      name: "MEDIA",
      link: "/media",
      viewSub: false,
      submenu: [
        { name: "Blog", link: "/media/blog" },
        { name: "Gallery", link: "/media/gallery" },
      ],
    },
    { name: "CONTACT", link: "/contact", viewSub: false },
  ];

  const socialMenuLinks = [
    { name: <FaFacebook />, link: "https://facebook.com" },
    { name: <FaInstagram />, link: "https://instagram.com" },
    { name: <FaTiktok />, link: "https://tiktok.com" },
    { name: <FaXTwitter />, link: "https://x.com" },
  ];

  const topHeader = [
    { icon: <MdWifiCalling3 />, detail: +447444388707 },
    { icon: <MdOutlineMail />, detail: "info@echogeeglobal.com" },
    {
      icon: <VscLocation />,
      detail: "Swalwell Gateshead, Newcastle, United Kingdom",
    },
  ];
  const socials = (
    <ul className={classes.socialMenuLinks}>
      {socialMenuLinks.map((menu) => (
        <li key={menu.link}>
          <Link href={menu.link}>{menu.name}</Link>
        </li>
      ))}
    </ul>
  );

  const pathname = usePathname();
  const [menuLinks, setMenuLinks] = useState(initialMenuLinks);

  const [headerState, setHeaderState] = useState({
    viewMobileMode: false,
    viewDesktopMode: null,
    viewMenu: false,
  });

  const [fixHeader, setFixedHeader] = useState(false);
  const [isActiveIndex, setIsActiveIndex] = useState(null);
  useEffect(() => {
    function scrollHandler() {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;
      const screenHeight = window.innerHeight;
      setFixedHeader(
        scrollPosition / (scrollHeight - screenHeight) >= 0.03662558
      );
    }
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);
  // Toggle submenu visibility for a specific menu item
  function showSubMenu(index) {
    setMenuLinks((prevMenuLinks) =>
      prevMenuLinks.map((menu, i) =>
        i === index
          ? { ...menu, viewSub: !menu.viewSub }
          : { ...menu, viewSub: false }
      )
    );

    setIsActiveIndex(index);
  }

  function toggleMenu() {
    setHeaderState((prevState) => ({
      ...prevState,
      viewMenu: !prevState.viewMenu,
    }));
  }

  function closeMenu() {
    setHeaderState((prevState) => ({
      ...prevState,
      viewMenu: false,
    }));
  }

  useEffect(() => {
    function resizeWindowFunction() {
      if (window.outerWidth <= 799) {
        setHeaderState((prevState) => ({
          ...prevState,
          viewMobileMode: true,
          viewDesktopMode: false,
        }));
      } else {
        setHeaderState((prevState) => ({
          ...prevState,
          viewMobileMode: false,
          viewDesktopMode: true,
          viewMenu: false,
        }));
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", resizeWindowFunction);
      resizeWindowFunction(); // Set initial state based on window size
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", resizeWindowFunction);
      }
    };
  }, []);

  const AllHeader = () => {
    return (
      <div
        className={classes.mainHeader}
        style={{
          position: fixHeader ? "fixed" : "",
          top: fixHeader && "0",
        }}
      >
        <div className={classes.logosection}>
          <Link href="/" onClick={closeMenu}>
            <Image src={logo} height={70} width={180} alt="echogee Logo" />
          </Link>
          <div>
            <Link href="mailto:info@echogeeglobal.co.uk">Quick Email</Link> |{" "}
            <Link href="/careers">Careers</Link>
          </div>
        </div>

        <header className={classes.header}>
          {headerState.viewDesktopMode ? (
            <div
              className={[
                `${classes.headerNagivationLink}`,
                `${classes.desktopViewMode}`,
              ].join(" ")}
            >
              <ul className={classes.desktopMenuLinks}>
                {menuLinks.map((menu, index) => (
                  <div
                    onMouseLeave={() => showSubMenu(index)}
                    onClick={() => showSubMenu(index)}
                  >
                    <li key={menu.link}>
                      <Link
                        className={`${
                          pathname === `${menu.link}` ? classes.isActive : ""
                        } ${
                          pathname.startsWith(menu.link) && menu.link !== "/"
                            ? classes.isActive
                            : ""
                        }`}
                        href={menu.link}
                      >
                        {menu.name}
                      </Link>
                      {menu.submenu && (
                        <div className={classes.menuwithsubs}>
                          <p> v</p>
                        </div>
                      )}
                    </li>
                    {menu.submenu &&
                      isActiveIndex === index &&
                      menu.viewSub && (
                        <ul className={classes.subMenu}>
                          {menu.submenu.map((subMenu) => (
                            <Link key={subMenu.link} href={subMenu.link}>
                              <li>{subMenu.name}</li>
                            </Link>
                          ))}
                        </ul>
                      )}
                  </div>
                ))}
              </ul>
              {socials}
            </div>
          ) : (
            <div className={classes.toggleIcon}>
              <h1 onClick={toggleMenu}>
                <IoMenu />
              </h1>
            </div>
          )}
          {headerState.viewMenu && (
            <div className={classes.mobileViewMode}>
              <h1
                style={{
                  margin: "0px",
                  marginTop: "-1rem",
                  padding: "0px",
                  marginLeft: "auto",
                  cursor: "pointer",
                }}
              >
                <MdOutlineCloseFullscreen onClick={toggleMenu} />
              </h1>

              <ul className={classes.mobileMenuLinks}>
                {menuLinks.map((menu, index) => (
                  <div key={`${menu.name + "1"}`}>
                    <li
                      key={menu.link}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Link
                        className={
                          (pathname === `${menu.link}` && classes.isActive) ||
                          (pathname.startsWith(menu.link) &&
                            menu.link != "/" &&
                            classes.isActive)
                        }
                        href={menu.link}
                        onClick={toggleMenu}
                      >
                        {menu.name}
                      </Link>

                      {menu.submenu && (
                        <span className={classes.showMobileSub}>
                          <IoMenu onClick={() => showSubMenu(index)} />
                        </span>
                      )}
                    </li>
                    {menu.submenu && menu.viewSub && (
                      <ul className={classes.subMenuMobile}>
                        {menu.submenu.map((subMenu) => (
                          <Link
                            key={subMenu.link}
                            href={subMenu.link}
                            onClick={toggleMenu}
                          >
                            <li key={subMenu.name}>{subMenu.name}</li>
                          </Link>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
                <div style={{ margin: "0 auto" }} onClick={toggleMenu}>
                  {socials}
                </div>
              </ul>
            </div>
          )}
        </header>
      </div>
    );
  };
  return (
    <section className={classes.generalHeader}>
      <main className={fixHeader ? classes.hideHeader : classes.showHeader}>
        <div
          className={classes.topHeaderWrapper}
          style={{ display: headerState.viewMenu && "none" }}
        >
          <ul className={classes.topHeader}>
            {topHeader.map((menu) => (
              <li key={menu.detail}>
                <h2>{menu.icon}</h2>
                <p>{menu.detail}</p>
              </li>
            ))}
          </ul>
        </div>
        <AllHeader />
      </main>
      <main
        className={classes.hideSlider}
        style={{
          display: !fixHeader ? "none" : "",
          zIndex: !fixHeader ? "0" : "",
        }}
      >
        <AllHeader />
      </main>
    </section>
  );
}
