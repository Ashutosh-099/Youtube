const WatchVideo = (props) => {
  return (
    <iframe
      src={
        "https://www.youtube.com/embed/" +
        props.videoId +
        "?&autoplay=1&loop=1&rel=0"
      }
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="w-full aspect-[16/6]"
    ></iframe>
  );
};

export default WatchVideo;
