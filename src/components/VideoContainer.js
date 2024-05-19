import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/Constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Watchpage from "./WatchPage";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEOS_API);
    const resp = await response.json();
    setVideos(resp.items);
    console.log(resp);
  };

  return (
    <div className=" flex flex-wrap justify-center h-full bg-black">
      {videos.length &&
        videos?.map((video) => (
          <Link to={"/watch?v=" + video.id} key={video.id}>
            <VideoCard key={video.id} info={video} />
          </Link>
        ))}

      <div>{videos.length && <Watchpage info={videos} />}</div>
    </div>
  );
};

export default VideoContainer;
