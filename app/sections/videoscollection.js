import classes from "./videocollection.module.css";
import Link from "next/link";
import VideoPlayer from "../components/videoPlayer/videoplayer";

export default function VideosColection({ videos, background, height, width }) {
  let videoWidth = width ? width : "100%";
  const back = "#e0f7fa";
  return (
    <div
      className={classes.moreOnWCC}
      style={{
        backgroundColor: `${background.color ? background.color : back}`,
      }}
    >
      <ul className={classes.cta}>
        {videos &&
          videos.map((video) => {
            return (
              <li key={video.title}>
                <VideoPlayer
                  height={height}
                  width={videoWidth}
                  url={video.url}
                  description={video.description}
                  title={video.title}
                  key={video.title}
                />
                <div className={classes.outlet}>
                  <Link href={video?.link}>
                    <h3>{video?.title}</h3>
                  </Link>
                  <main className={classes.outlet}>
                    <p>{video?.description}</p>
                  </main>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
