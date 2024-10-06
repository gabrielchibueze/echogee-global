"use client";
import { useState } from "react";
import ReactPlayer from "react-player";

export default function VideoPlayer({
  title,
  description,
  url,
  height,
  width,
}) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const videos = {
    title: title,
    url: url,
  };

  const videoPlayer = (
    <div>
      <ReactPlayer url={videos.url} controls width={width} height={height} />
    </div>
  );

  return <div>{videoPlayer}</div>;
}
