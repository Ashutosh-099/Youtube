import { useNavigate } from "react-router-dom";
import { convertTime, getPublishedInfo, getViewCount } from "../utils/helper";
import ImageThumbnail from "./ImageThumbnail";

const VideoCard = (props) => {
  const navigate = useNavigate();
  const { id, snippet, stats, content } = props;
  const { thumbnails, title, channelTitle, publishedAt } = snippet;

  return (
    <section
      className="w-largeScreenVideo p-1 cursor-pointer hover:shadow-md"
      onClick={() => {
        navigate("/watch?v=" + id);
      }}
    >
      <ImageThumbnail thumbnails={thumbnails} />
      <div className="mt-1">
        <p className="title font-semibold">{title}</p>
        <p className="text-[#606060]">{channelTitle}</p>
        <span className="text-[#606060]">
          <span>{getViewCount(stats.viewCount)}</span> •{" "}
          <span>{getPublishedInfo(publishedAt)}</span> •{" "}
          <span>{convertTime(content.duration)}</span>
        </span>
      </div>
    </section>
  );
};

export default VideoCard;
