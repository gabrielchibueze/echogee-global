import Image from "next/image";
import CtaButton from "../components/buttons/ctabuttonlink";
import classes from "./gallery.module.css";
import highlight1 from "/public/musicministergideononofeghara.jpg";
import highlight2 from "/public/pastorkelechi.jpg";
import highlight3 from "/public/pastorjohnsmartwilliams.jpg";
import highlight4 from "/public/apostlebright1.jpg";
import gallery1 from "/public/wccchoir1.jpg";
import gallery2 from "/public/pastorvictor.jpg";
import gallery3 from "/public/healingservice.jpg";
import gallery4 from "/public/joyingodspresence.jpg";
import VideosColection from "../sections/videoscollection";

export default function Gallery() {
  return (
    <div className={classes.gallery}>
      <div className={classes.topsection}>
        <div className={classes.heading}>
          <h1>Conference Highlights</h1>
          <p>
            Explore photos and videos of testimonies of Gods glorious wonders in
            the World Changers conference.
          </p>
        </div>
        <section className={classes.photohighlights}>
          <ul className={classes.topPhotohighlights}>
            <li
              key="photo gallery 1"
              className={`${classes.aboutImage} ${classes.topsectionimageLarger}`}
            >
              <Image
                src={gallery1}
                fill
                alt="photo gallery 1"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </li>
            <li
              className={`${classes.aboutImage} ${classes.topsectionimageSmaller}`}
            >
              <Image
                src={gallery2}
                fill
                alt="photo gallery 2"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </li>
          </ul>
          <ul className={classes.topPhotohighlights}>
            <li
              key="photo gallery 2"
              className={`${classes.aboutImage} ${classes.topsectionimageSmaller}`}
            >
              <Image
                src={gallery3}
                fill
                alt="photo gallery 3"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </li>
            <li
              key="photo gallery 3"
              className={`${classes.aboutImage} ${classes.topsectionimageLarger}`}
            >
              <Image
                src={gallery4}
                fill
                alt="photo gallery 4"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </li>
          </ul>
        </section>

        <div className={classes.photos}></div>
      </div>
      <main className={classes.bottomsection}>
        <div className={classes.heading}>
          <h1>Conference Highlights</h1>
          <p>
            Explore moments of faith and transformation from our conferences.
          </p>
        </div>
        <section className={classes.subsection}>
          <ul className={classes.galleryimageSection}>
            <li key="photobottm gallery 1" className={classes.aboutImage}>
              <Image
                src={highlight1}
                fill
                alt="photo gallery 1"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </li>
            <li key="photobottm gallery 2" className={classes.aboutImage}>
              <Image
                src={highlight2}
                fill
                alt="photo gallery 2"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </li>
          </ul>
          <section style={{ marginTop: "2rem", padding: "0" }}>
            <VideosColection
              height={200}
              width="95%"
              background={{ color: "#ffffff" }}
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
          </section>{" "}
          <div className={classes.viewmore}>
            <div className={classes.viewmoreText}>
              <h2>Testimonies</h2>
              <p>Witness incredible testimonies of faith and healing shared.</p>
            </div>
            <div className={classes.cta}>
              <CtaButton
                action="/gallery/testimonies"
                design="flat"
                type="link"
              >
                View
              </CtaButton>
            </div>
          </div>
        </section>
        <section className={classes.subsection}>
          <ul className={classes.galleryimageSection}>
            <li key="image gallery 1" className={classes.aboutImage}>
              <Image src={highlight3} fill alt="photo gallery 3" />
            </li>
            <li key="image gallery 2" className={classes.aboutImage}>
              <Image src={highlight4} fill alt="photo gallery 4" />
            </li>
          </ul>
          <div className={classes.viewmore}>
            <div className={classes.viewmoreText}>
              <h2>Event Photos</h2>
              <p>
                Browse captivating images showcasing the conference&apos;s
                impactful moments.
              </p>
            </div>
            <div className={classes.cta}>
              <CtaButton action="/gallery/photos" design="flat" type="link">
                Gallery
              </CtaButton>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
