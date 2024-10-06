import { MdMargin } from "react-icons/md";
import CtaButton from "../components/buttons/ctabuttonlink";
import classes from "./about.module.css";
import about1 from "/public/apostlebright1.jpg";
import about2 from "/public/pastormoses.jpg";
import Image from "next/image";
export default function About() {
  return (
    <div className={classes.about}>
      <div className={classes.aboutIntro}>
        <h1>About World Changers Conference</h1>
        <p>
          Join us for the World Changers Conference in Newcastle, featuring
          inspiring speakers and miraculous testimonies from our community.
        </p>
        <div className={classes.cta}>
          <CtaButton action="/register" design="flat" type="link">
            Register
          </CtaButton>
        </div>
      </div>
      <div className={classes.imageSection}>
        <div className={classes.aboutImage}>
          <Image src={about1} fill alt="About WCC" />
        </div>
        <div className={classes.aboutImage}>
          <Image src={about2} fill alt="More About WCC" />
        </div>
      </div>
    </div>
  );
}
