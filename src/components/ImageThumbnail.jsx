const ImageThumbnail = (props) => {
  const { thumbnails } = props;
  return (
    <img
      src={thumbnails.medium.url}
      alt="thumbnail"
      loading="lazy"
      width="100%"
      className="rounded-xl shadow-md"
    />
  );
};

export default ImageThumbnail;
