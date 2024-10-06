import dynamic from "next/dynamic";
import Image from "next/image";
import classes from "./page.module.css";
import Intro from "./sections/intro";
import MoreonWCC from "./sections/moreonwcc";
import RegisterComponent from "./sections/registerComponent";
import Testimonies from "./sections/testimonies";
import HomePgaeIntro from "./components/homePage/homePageIntro";
import OurServices from "./components/homePage/ourServices";
import IntroPageTop from "./components/homePage/introTopPage";

const About = dynamic(() => import("./sections/about"));

export default function Home() {
  return (
    <div className={classes.page}>
      {/* <div className={classes.loadComponentsSimple}> */}
      <IntroPageTop />
      {/* </div> */}
      <div className={classes.loadComponentsSimple}>
        <HomePgaeIntro />
      </div>
      <div className={classes.loadComponents}>
        <OurServices />
      </div>
      {/* <div className={classes.loadComponents}>
        <About />
      </div>
      <div className={classes.loadComponents}>
        <MoreonWCC />
      </div>
      <div className={classes.loadComponents}>
        <RegisterComponent />
      </div> */}
    </div>
  );
}
