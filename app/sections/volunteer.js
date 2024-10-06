import CtaButton from "../components/buttons/ctabuttonlink";
import classes from "./volunteer.module.css";
import Link from "next/link";
import { MdOutlineEmojiTransportation } from "react-icons/md";
import { FaUsersGear, FaHireAHelper } from "react-icons/fa6";

export default function Volunteer() {
  const cta = [
    {
      icon: <MdOutlineEmojiTransportation />,
      title: "Logistics Support",
      link: "/volunteer",
      linkTitle: "volunteer",
      content:
        "Help us ensure the smooth running of the conference by assisting with logistics. Volunteers are needed to manage event setup, coordinate transportation and provide general support to attendees.",
      more: {
        text: "Volunteer",
        link: "/volunteer",
      },
    },
    // {
    //   icon: <FaHireAHelper />,
    //   title: "Request for a Ride",
    //   link: "/volunteer",
    //   content: "Get logistics support from our transport and logistics team",
    //   more: {
    //     text: "Pick me up",
    //     link: "/volunteer",
    //   },
    // },

    {
      icon: <FaUsersGear />,
      title: "Ushering",
      link: "/volunteer",
      content:
        "Be the welcoming face of the conference. As an usher, you will guide attendees to their seats, provide information and ensure everyone feels comfortable and welcomed.",
      more: {
        text: "Join us",
        link: "/volunteer",
      },
    },
    {
      icon: <FaHireAHelper />,
      title: "Hospitality",
      link: "/volunteer",
      content:
        "Assist with hospitality services by helping to manage refreshments and ensuring all guests have a pleasant experience. Your warm hospitality will make a lasting impression on our attendees.",
      more: {
        text: "Get Involved",
        link: "/volunteer",
      },
    },
  ];
  return (
    <div style={{ boxShadow: "1px 15px 45px" }}>
      <div className={classes.moreOnWCC}>
        <div className={classes.header}>
          <h2>Volunteer Opportunities</h2>
          <p>
            Join us for an inspiring church conference in Newcastle from October
            16th to 20th, 2024.
          </p>
        </div>
        <ul className={classes.cta}>
          {cta.map((actions) => {
            return (
              <li key={actions.title}>
                <div className={classes.contents}>
                  <h1>{actions.icon}</h1>
                  <Link href={actions.link}>
                    <h3>{actions.title}</h3>
                  </Link>
                  <section className={classes.outlet}>
                    <p>{actions.content}</p>
                    {actions.more && (
                      <div
                        style={{
                          backgroundColor: "white",
                          margin: "auto",
                          borderRadius: "2rem",
                        }}
                      >
                        <CtaButton
                          action={actions.more.link}
                          design="accent"
                          type="link"
                        >
                          {actions.more.text}
                        </CtaButton>
                      </div>
                    )}
                  </section>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      {/* <div className={classes.donate}>
        <div className={classes.innerDonate}>
          <h2>Support Our Mission</h2>
          <p>
            Your generous donations help us make the World Changers Conference a
            transformative experience for all attendees. Every contribution, big
            or small, brings us closer to our goal of spreading the gospel,
            touching lifes and creating a lasting change.
          </p>
          <div
            style={{
              backgroundColor: "white",
              margin: "auto",
              borderRadius: "2rem",
              color: "black",
            }}
          >
            <CtaButton
              action="/donate"
              design="flat"
              type="link"
              target="_blank"
            >
              Donate Now
            </CtaButton>
          </div>
        </div>
      </div> */}
    </div>
  );
}
