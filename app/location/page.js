"use client";
import CtaButton from "../components/buttons/ctabuttonlink";
import classes from "./location.module.css";
import Image from "next/image";
import locationImage from "/public/map.png";
import Link from "next/link";
import { useFormState } from "react-dom";
import { submitRegisterForm } from "../register/registerServer";
import VideosColection from "../sections/videoscollection";

export default function Location() {
  const [state, formAction] = useFormState(submitRegisterForm, {
    message: null,
  });
  return (
    <div>
      <main className={classes.location}>
        <div className={classes.RegisterComponent}>
          <div className={classes.topsection}>
            <div className={classes.header}>
              <h1>Conference Location</h1>
              <p>
                Join us in City of God Christian Center, Church Walk, Walker,
                Newcastle upon Tyne for the World Changers Conference from
                October 16th to 20th, 2024. Experience miracles, Gods healing
                and inspiration.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  maxWidth: "25rem",
                }}
              >
                <section>
                  <h3>Venue</h3>
                  <p>Church Walk, Walker, Newcastle upon Tyne. NE6 3DP</p>
                </section>
                <section
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <h3>Hours</h3>
                  <p style={{ display: "flex", gap: "1rem" }}>
                    <span>Wednessday:</span>
                    <span>7 PM </span>
                  </p>
                  <p style={{ display: "flex", gap: "2.7rem" }}>
                    <span>Thursday:</span>
                    <span>7 PM </span>
                  </p>
                  <p style={{ display: "flex", gap: "4.2rem" }}>
                    <span>Friday:</span>
                    <span>7 PM </span>
                  </p>
                  <p style={{ display: "flex", gap: "2.7rem" }}>
                    <span>Saturday:</span>
                    <span>
                      Healing Service - 12 PM, <br /> World Changers Conference
                      - 6 PM
                    </span>
                  </p>
                  <p style={{ display: "flex", gap: "3.4rem" }}>
                    <span>Sunday:</span>
                    <span>10:30 AM </span>
                  </p>
                </section>
              </div>
              <div style={{ display: "flex", gap: "1rem" }}>
                <CtaButton action="/register" design="flat" type="link">
                  Register
                </CtaButton>
                <CtaButton
                  target="_blank"
                  action="https://tinyurl.com/hotelsnearbycogwcc"
                  design="accent"
                  type="link"
                >
                  Hotels nearby
                </CtaButton>
              </div>
            </div>
            <div className={classes.locationSection}>
              <div className={classes.locationImage}>
                <Link target="_blank" href="https://tinyurl.com/COGWCCADDRESS">
                  <Image src={locationImage} fill alt="location for WCC 2024" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.subLocationSection}>
          <div className={classes.subLocationHeader}>
            <h1>Welcome to the 2024 World Changers Conference </h1>
            <h3 style={{ fontStyle: "italic" }}>Theme: Open Doors</h3>
          </div>
          <div className={classes.locationContentSection}>
            <p>
              Join us in Newcastle for an inspiring church conference featuring
              renowned speakers and miraculous testimonies. Experience faith,
              fellowship, and transformation from October 16th to 20th, 2024.
            </p>
            <section className={classes.joinus}>
              <p>
                <span>450+</span>
                Join us
              </p>
              <p>
                <span>15</span>
                Faith, Community, Miracles
              </p>
            </section>
          </div>
        </div>
      </main>
      <section
        style={{
          marginTop: "-2rem",
          backgroundColor: "#e0f7fa",
          padding: "3rem 2rem",
        }}
      >
        <div
          className={classes.topsermons}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            textAlign: "center",
            maxWidth: "500px",
          }}
        >
          <h2>
            Listen to Inspiring Sermons from the World Changers Conference
          </h2>
          <p>
            Join us for an inspiring church conference in Newcastle from October
            16th to 20th, 2024.
          </p>
        </div>
        <div style={{ margin: "0 auto" }}>
          <VideosColection
            background={{ color: "#e0f7fa" }}
            height={200}
            width="92%"
            videos={[
              {
                title: "Testimonies ",
                link: "/gallery",
                description:
                  "Experience powerful testimonies and miracles through photos and videos from previous conferences and events.",
                url: "https://www.youtube.com/live/bzeRDJSsqY0",
              },
              {
                title: "Preaching",
                link: "/gallery",
                description:
                  "Experience powerful testimonies and miracles through photos and videos from previous conferences and events.",
                url: "https://www.youtube.com/watch?v=UrcUPdRUOJg",
              },
              {
                title: "Joyful dance",
                link: "/gallery",
                description:
                  "Experience powerful testimonies and miracles through photos and videos from previous conferences and events.",
                url: "https://www.youtube.com/watch?v=ihBIa-fT2jU",
              },
            ]}
          />
          <div className={classes.viewmoretestimonies}>
            <CtaButton action="/gallery" design="accent" type="link">
              View More
            </CtaButton>
          </div>
        </div>
      </section>
    </div>
  );
}
