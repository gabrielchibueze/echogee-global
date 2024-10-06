"use client";
import { useEffect, useState } from "react";
import classes from "./introTopPage.module.css";
import Link from "next/link";

export default function IntroPageTop() {
  const allServiceList = [
    {
      title: "Asset and Facility Management",
      image: "/images/homepage/assets.jpg",
      position: "left",
      slidePosition: "bottom",
      message:
        "          FMX Integrated Services Limited provides projects and facilities management services with unrivalled expertise and co-ordination for successful and timely delivery of medium and large projects across West Africa.",
      cta: "View Details",
      ctaLink: "/services/echogee-asset-management",
    },
    {
      title: "Security and Protection Services",
      image: "/images/homepage/security.jpeg",
      position: "right",
      slidePosition: "right",
      message:
        "Security Training and Risk Consultancy Services, Static Man-Guarding Services, Quick Response Services, Nationwide Armed Escort Services, Investigation & Background Profiling Services, Security Surveys and Audits",
      cta: "Explore",
      ctaLink: "/services/security",
    },
    {
      title: "Software Technology Services",
      image: "/images/homepage/outsourcing.jpg",
      position: "left",
      slidePosition: "top",

      message:
        "Web Application Development, Software Solutions, Mobile Application Development, Business Data analytics services, Project Management",
      cta: "Make Enquiry",
      ctaLink: "/services/echogee-software-technologies",
    },
    {
      title: "Echogee Learning Center",
      image: "/images/homepage/learning.jpg",
      position: "right",
      slidePosition: "left",
      message:
        "Training and Human Development, Entrepreneurship Mentoring, Scholarships and Business Grants, Advocacy, Graduate Internship Programme, Graduate Advancement Programme",
      cta: "View Details",
      ctaLink: "/services/echogee-ELC",
    },
    {
      title: "Courier Express & Logistics",
      image: "/images/homepage/logistics.jpg",
      position: "left",
      slidePosition: "bottom",
      message:
        "Parcel Tracker, Mailroom Management, Express Delivery Services, Courier and Logistic Services, Bulk Mail Deliveries, Logistics Planning and Supply Chain Management Services, Cargo clearing and forwarding Services, Warehousing Services, Haulage",
      cta: "Use our Services",
      ctaLink: "/services/echogee-logistics",
    },
    {
      title: "Energy Support Services",
      image: "/images/homepage/energy.jpeg",
      position: "right",
      slidePosition: "top",
      message:
        "FEED (Front-End Engineering Design) Services, Procurement Services, Construction Management Services, Fabrication & Installation Services",
      cta: "Use our Services",
      ctaLink: "/services/echogee-logistics",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === allServiceList.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);
    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <div className={classes.introTopPage}>
      {allServiceList.map((service, index) => {
        return (
          currentIndex === index && (
            <div
              key={index}
              className={`${classes.serviceComponent}
                ${
                  service.slidePosition === "bottom"
                    ? classes.componentSlideInBottom
                    : ""
                } ${
                service.slidePosition === "top"
                  ? classes.componentSlideInTop
                  : ""
              } ${
                service.slidePosition === "right"
                  ? classes.componentSlideInRight
                  : ""
              }${
                service.slidePosition === "left"
                  ? classes.componentSlideInLeft
                  : ""
              }`}
              style={{ backgroundImage: `url(${service.image})` }}
            >
              <div className={classes.outerServiceComponent}>
                <div
                  className={classes.innerServiceComponent}
                  style={{
                    margin: `${
                      service.position === "right" ? "0 0 0 auto" : "0 auto 0 0"
                    }`,
                  }}
                >
                  <h2 className={classes.serviceTitle}>{service.title}</h2>
                  <p className={classes.serviceMessage}>{service.message}</p>
                  <Link href={service.ctaLink}>
                    <div className={classes.serviceCtaLink}>
                      <span>{service.cta}</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          )
        );
      })}
    </div>
  );
}
