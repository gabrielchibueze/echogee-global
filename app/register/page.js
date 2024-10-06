import RegisterComponent from "../sections/registerComponent";
import VolunteerComponent from "../sections/volunteer";

import classes from "./register.module.css";
export default function Register() {
  return (
    <div>
      <div className={classes.register}>
        {/* <div className={classes.heading}>
        <h2>
          Experience the wonderful power of God in this years' World Changers
          Conference 2024
        </h2>
        <h3>Theme: Open Doors</h3>
      </div> */}
        <div className={classes.registerComponent}>
          <RegisterComponent />
        </div>
      </div>
      <VolunteerComponent />
    </div>
  );
}
