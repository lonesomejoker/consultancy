
const CustomDropdown = ({ options, placeholder, value, onChange }) => {
  return (
    <div className="relative">
      <button className="w-full px-3 py-2 border-b-2 bg-gray-100">
        {value || placeholder}
      </button>
      <ul className="absolute z-10 bg-white border w-full">
        {options.map((option) => (
          <li
            key={option.value}
            className="flex items-center px-3 py-2 hover:bg-gray-200 cursor-pointer"
            onClick={() => onChange(option.value)}
          >
            {option.icon}
            <span className="ml-2">{option.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomDropdown;