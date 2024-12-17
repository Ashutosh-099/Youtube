const Tags = (props) => {
  const { tags } = props;

  return (
    <section className="flex gap-3 overflow-x-hidden">
      {/* <h1 className="absolute">Left</h1> */}
      {tags.map((tag, index) => (
        <button
          key={index}
          className="bg-gray-100 py-1 px-3 rounded-lg font-semibold shrink-0"
        >
          {tag}
        </button>
      ))}
      {/* <h1 className="absolute right-0">Right</h1> */}
    </section>
  );
};

export default Tags;
