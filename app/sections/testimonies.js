import { MdMargin } from "react-icons/md";
import CtaButton from "../components/buttons/ctabuttonlink";
import classes from "./testimonies.module.css";
import testimonials from "/public/testimonials.jpg";
import Image from "next/image";
export default function Testimonies() {
  return (
    <div className={classes.testimonies}>
      <div className={classes.imageSection}>
        <div className={classes.aboutImage}>
          <Image src={testimonials} fill alt="About WCC" />
        </div>
      </div>
      <div className={classes.testimonyIntro}>
        <p>
          The conference was transformative, filled with inspiring speakers and
          miraculous testimonies that uplifted our spirits.
        </p>
        <div className={classes.cta}>
          <CtaButton action="/gallery" design="accent" type="link">
            View More Testimonies
          </CtaButton>
        </div>
      </div>
    </div>
  );
}
