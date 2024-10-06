import Link from "next/link";
import classes from "./footer.module.css";
import logo from "/public/images/echogeelogo.png";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaX,
  FaXTwitter,
} from "react-icons/fa6";
import CtaButton from "../buttons/ctabuttonlink";
import Image from "next/image";
export default function Footer() {
  const socialMenuLinks = [
    { name: <FaFacebook />, link: "/" },
    { name: <FaInstagram />, link: "/register" },
    { name: <FaTiktok />, link: "/location" },
    { name: <FaXTwitter />, link: "/gallery" },
  ];

  const SocialQuickLinks = () => {
    return (
      <div className={classes.socialMenuLinks}>
        {socialMenuLinks.map((menu) => {
          return (
            <Link href={menu.link} key={menu.link}>
              <li key={menu.link}>{menu.name}</li>
            </Link>
          );
        })}
      </div>
    );
  };
  const footerQuickLinksTop = [
    {
      title: "QUICK LINKS",
      links: [
        {
          name: "Home",
          link: "/",
        },
        {
          name: "About Us",
          link: "/about",
        },
        {
          name: "Services",
          link: "/services",
        },
        {
          name: "Media",
          link: "/media",
        },
        {
          name: "Contact",
          link: "/contact",
        },
        {
          name: "Terms of Use",
          link: "/terms-of-use",
        },
      ],
    },
    {
      title: "SUBSIDIARIES",
      links: [
        {
          name: "Echogee Outsourcing Limited",
          link: "/services/echogee-outsourcing",
        },
        {
          name: "Echogee Software Technologies",
          link: "/services/echogee-software-technologies",
        },
        {
          name: "Echogee Energy Support Services",
          link: "/services/echogee-energy",
        },
        {
          name: "Echogee Express & Logistics",
          link: "/services/echogee-logistics",
        },
        {
          name: "Echogee Assets Management Limited",
          link: "/services/echogee-cash-management",
        },
        {
          name: "Echogee Learning Center Limited",
          link: "/services/echogee-ELC",
        },
      ],
    },
    {
      title: "FOREIGN SUBSIDIARIES",
      links: [
        {
          name: "Echogee Outsourcing (UK) Limited",
          link: "/services/echogee-outsourcing-uk",
        },
        {
          name: "Echogee Energy Support Services (Nigeria) Limited",
          link: "/services/echogee-energy",
        },
        {
          name: "Echogee Express & Logistics (UK & NI) Limited",
          link: "/services/echogee-logistics-uk",
        },
        {
          name: "Echogee Express & Logistics (Ghana) Limited",
          link: "/services/echogee-logistics-ghana",
        },
        {
          name: "Echogee Learning Center(Nigeria) Limited",
          link: "/services/echogee-ELC-nigeria",
        },
      ],
    },
  ];
  const footerQuickLinksMiddle = [
    {
      title: "SERVICES",
      links: [
        {
          name: "Outsourcing Services",
          link: "/services/software-technologies",
        },
        {
          name: "Oil & Gas Engineering Support Services",
          link: "/services/echogee-energy",
        },
        {
          name: "Software Technologies Services",
          link: "/services/echogee-software-technologies",
        },
        {
          name: "Express Courier & Logistics Services",
          link: "/services/echogee-logistics",
        },
        {
          name: "Assets and Facility Management Services",
          link: "/services/echogee-asset-management",
        },
        {
          name: "Human Capital Training and Developement Services",
          link: "/services/echogee-ELC",
        },
      ],
    },
  ];
  function returnfooterQuickLinks(quickLinkData) {
    return (
      <div className={classes.quickLinksContents}>
        {quickLinkData.map((quickLinks) => {
          return (
            <div className={classes.quickLinkSections} key={quickLinks.title}>
              <h4>{quickLinks.title}</h4>
              <ul>
                {quickLinks.links.map((subLinks) => (
                  <li key={subLinks.link}>
                    <Link href={subLinks.link}>{subLinks.name}</Link>
                  </li>
                ))}
                {quickLinks.title === "QUICK LINKS" && (
                  <li>
                    <Link href="/">
                      <Image
                        src={logo}
                        height={50}
                        width={180}
                        alt="Coseng Logo"
                      />
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
  const ContactSection = () => {
    return (
      <div className={classes.quickLinkSections}>
        <h4>CONTACT US</h4>
        <ul className={classes.contactUsSection}>
          <li>
            <span>Address: </span>Gateshead, Newcastle United Kingdom.
          </li>
          <li>
            <span>Phone: </span> +44-744-388-707
          </li>
          <li>
            <span>E-mail: </span>
            info@echogeeglobal.com
          </li>
        </ul>
        <SocialQuickLinks />
      </div>
    );
  };

  return (
    <div className={classes.footerDiv}>
      <footer>
        <div className={classes.footerQuickLinksTop}>
          {returnfooterQuickLinks(footerQuickLinksTop)}
          {returnfooterQuickLinks(footerQuickLinksMiddle)}
          <ContactSection />
        </div>
      </footer>

      <div className={classes.subFooter}>
        <section>
          <p></p>
          <h3>© {new Date().getFullYear()} | Echogee Global |</h3>
        </section>
        <Link href="/termsofuse"> All rights reserved</Link>

        <Link href="/termsofuse" style={{ textDecoration: "underline" }}>
          Terms of use
        </Link>
      </div>
    </div>
  );
}
