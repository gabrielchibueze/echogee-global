import CtaButton from "../components/buttons/ctabuttonlink";
import classes from "./intro.module.css";

export default function Intro() {
  return (
    <div className={classes.intro}>
      <div className={classes.content}>
        <h1 className={classes.intotext}>
          Join the World Changers Conference 2024
        </h1>
        <div className={classes.subsection}>
          <p>
            Experience miracles and inspiration in Newcastle from October 16th -
            20th, 2024.
          </p>
          <div style={{ margin: "0 auto" }}>
            <CtaButton action="/register" design="raised" type="link">
              Register
            </CtaButton>
          </div>
          <div>
            <h3 style={{ textTransform: "uppercase" }}>
              Transformative, Inspiring, Life-Changing
            </h3>
            <p>★★★★★</p>
          </div>
        </div>
      </div>
    </div>
  );
}
