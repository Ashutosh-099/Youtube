const NavigationPanel = (props) => {
  const { options } = props;
  return (
    <>
      <ul className="border-b border-gray-300 pb-1 px-6">
        {options["main"].map((option, index) => (
          <li key={index} className="py-1">
            <span>{option}</span>
          </li>
        ))}
      </ul>
      <h4 className="text-lg my-2 font-semibold px-6">{"You >"}</h4>
      <ul className="border-b border-gray-300 pb-1 px-6">
        {options["You"].map((option, index) => (
          <li key={index} className="py-1">
            <span>{option}</span>
          </li>
        ))}
      </ul>
      <h4 className="text-lg my-2 font-semibold px-6">{"Explore"}</h4>
      <ul className="pb-1 px-6">
        {options["Explore"].map((option, index) => (
          <li key={index} className="py-1">
            <span>{option}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavigationPanel;
