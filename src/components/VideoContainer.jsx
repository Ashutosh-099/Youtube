import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const videoList = useSelector((store) => store.video.youtubeVideos);
  return (
    <section className="flex flex-wrap py-6 gap-5">
      {videoList.length > 0
        ? videoList.map((video) => (
            <VideoCard
              key={video.id}
              id={video.id}
              snippet={video.snippet}
              stats={video.statistics}
              content={video.contentDetails}
            />
          ))
        : null}
    </section>
  );
};

export default VideoContainer;
