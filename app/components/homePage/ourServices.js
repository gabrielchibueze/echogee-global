"use client";
import React, { useEffect, useRef, useState } from "react";
import classes from "./ourServices.module.css";
import { SiCrowdsource } from "react-icons/si";
import { GrSettingsOption } from "react-icons/gr";
import { GrDeliver } from "react-icons/gr";
import { TbHomeStats } from "react-icons/tb";
import { FaShopLock } from "react-icons/fa6";
import { BsCassetteFill } from "react-icons/bs";
import { SiBookstack } from "react-icons/si";
import Link from "next/link";

export default function OurServices() {
  const ourServices = [
    {
      name: "Outsourcing Services",
      icon: <SiCrowdsource />,
      serviceList: [
        "Staff Outsourcing/Managed",
        "Recruitment & Selection",
        "Training",
        "Payroll Administration",
        "Certificate Verification and Background Check",
        "Fleet Management and Operating Lease",
        "E-Learning Management System",
      ],
      link: "/services/echogee-outsourcing",
    },
    {
      name: "Energy Support Services",
      icon: <GrSettingsOption />,
      serviceList: [
        "FEED (Front-End Engineering Design) Services",
        "Procurement Services",
        "Construction Management Services",
        "Fabrication & Installation Services",
      ],
      link: "/services/echogee-energy",
    },
    {
      name: "Courier Express & Logistics",
      icon: <GrDeliver />,
      serviceList: [
        "Parcel Tracker",
        "Mailroom Management",
        "Express Delivery Services",
        "Courier and Logistic Services",
        "Bulk Mail Deliveries",
        "Logistics Planning and Supply Chain Management Services",
        "Cargo clearing and forwarding Services",
        "Warehousing Services",
        "Haulage",
      ],
      link: "/services/echogee-logistics",
    },
    {
      name: "Asset and Facility Management",
      icon: <TbHomeStats />,
      serviceList: [
        "Estate Management",
        "Product and Processes Management",
        "Industrial Maintenance Services",
        "Project and Construction Management Services",
        "Integrated Facility Management Services",
      ],
      link: "/services/echogee-cash-management",
    },
    {
      name: "Security and Protection Services",
      icon: <FaShopLock />,
      serviceList: [
        "Security Training and Risk Consultancy Services",
        "Static Man-Guarding Services",
        "Quick Response Services",
        "Nationwide Armed Escort Services",
        "Investigation & Background Profiling Services",
        "Security Surveys and Audits",
      ],
      link: "/services/security",
    },
    {
      name: "Software Technology Services",
      icon: <BsCassetteFill />,
      serviceList: [
        "Web Application Development",
        "Software Solutions",
        "Mobile Application Development",
        "Business Data analytics services",
        "Project Management",
      ],
      link: "/services/echogee-software-technologies",
    },
    {
      name: "Echogee Learning Center",
      icon: <SiBookstack />,
      serviceList: [
        "Training and Human Development",
        "Entrepreneurship Mentoring",
        "Scholarships and Business Grants",
        "Advocacy",
        "Graduate Internship Programme",
        "Graduate Advancement Programme",
      ],
      link: "/services/echogee-ELC",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const serviceRefs = useRef([]);

  // Create refs dynamically for each service
  useEffect(() => {
    serviceRefs.current = ourServices.map(
      (_, i) => serviceRefs.current[i] || React.createRef()
    );
  }, [ourServices]);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
    console.log(serviceRefs.current[index]); // Log the ref to check it's working
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <section className={classes.ourServicesSection}>
      <h1>OUR SERVICES</h1>
      <main className={classes.ourServicesMain}>
        {ourServices.map((service, index) => (
          <div
            key={index}
            ref={serviceRefs.current[index]} // Assign the ref
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className={classes.service}
          >
            <h1
              className={
                activeIndex === index
                  ? classes.activeServiceText
                  : classes.normal
              }
            >
              {service.icon}
            </h1>
            <h2>{service.name}</h2>
            <ul className={classes.serviceList}>
              {service.serviceList.map((list) => (
                <li key={list}>{list}</li>
              ))}
            </ul>

            <Link href={service.link}>
              <div
                className={[
                  `${classes.viewDetailButton}`,
                  //   `${activeIndex === index ? classes.activeServiceCTA : ""}`,
                ].join(" ")}
              >
                <span>View Details</span>
              </div>
            </Link>
          </div>
        ))}
      </main>
    </section>
  );
}
