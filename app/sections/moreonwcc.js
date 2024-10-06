import CtaButton from "../components/buttons/ctabuttonlink";
import classes from "./moreonwcc.module.css";
import registernow from "/public/registernow.jpg";
import location from "/public/location.jpg";
import testimony from "/public/testimony.jpg";
import Image from "next/image";
import Link from "next/link";
import VideoPlayer from "../components/videoPlayer/videoplayer";

export default function MoreonWCC() {
  const cta = [
    {
      image: (
        <div className={classes.ctaImage}>
          <Image src={registernow} fill alt={`registernow Photos`} />
        </div>
      ),
      title: "Register Now",
      link: "/register",
      content:
        "Secure your spot for the World Changers Conference and be part of a transformative experience.",
      more: {
        text: "Register",
        link: "/register",
      },
      moreCta: {
        text: "Request Pickup",
        link: "/register",
      },
    },
    {
      image: (
        <div className={classes.ctaImage}>
          <Image src={location} fill alt={`location Photos`} />
        </div>
      ),
      title: "Location Details",
      link: "/location",
      content:
        "Find hotel accomodation and directions to the conference venue in Walker area of Newcastle upon Tyne easily. Venue: Church walk, walker NE6 4DP.",
      more: {
        text: "Get Direction",
        link: "https://tinyurl.com/hotelsnearbycogwcc",
      },
      moreCta: {
        text: "Hotels Nearby",
        link: "https://tinyurl.com/hotelsnearbycogwcc",
      },
    },
    {
      image: (
        <div>
          {
            <VideoPlayer
              height={240}
              width="100%"
              title="Testimonies from WCC2023"
              url="https://www.youtube.com/watch?v=UrcUPdRUOJg"
            />
          }
        </div>
      ),
      title: "Testimonies",
      link: "/gallery",
      content:
        "Experience powerful testimonies and miracles through photos and videos from previous conferences and events.",
      more: {
        text: "Testimonies",
        link: "/gallery",
      },
      moreCta: {
        text: "Stream Live",
        link: null,
      },
    },
  ];
  return (
    <div className={classes.moreOnWCC}>
      <div className={classes.header}>
        <h1>World Changers Conference</h1>
        <p>
          Join us for an inspiring church conference in Newcastle from October
          16th to 20th, 2024.
        </p>
      </div>
      <ul className={classes.cta}>
        {cta.map((actions) => {
          return (
            <li key={actions.title}>
              {actions.image}{" "}
              <div className={classes.contents}>
                <Link href={actions.link}>
                  <h3>{actions.title}</h3>
                </Link>
                <main className={classes.outlet}>
                  <p>{actions.content}</p>
                  {actions.more && (
                    <section style={{ display: "flex", gap: "2rem" }}>
                      {/* <div
                      style={{
                        backgroundColor: "white",
                        marginLeft: "auto",
                        borderRadius: "1rem",
                      }}
                    >
                      <CtaButton
                        action={actions.more.link}
                        design="flat"
                        type="link"
                        target="_blank"
                      >
                        {actions.more.text}
                      </CtaButton>
                    </div> */}
                      <div>
                        <CtaButton
                          action={
                            actions.moreCta.link ? actions.moreCta.link : ""
                          }
                          design="accent"
                          type="link"
                          target="_blank"
                          disabled={
                            (actions.moreCta.link = null ? true : false)
                          }
                        >
                          {actions.moreCta.text}
                        </CtaButton>
                      </div>
                    </section>
                  )}
                </main>{" "}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
