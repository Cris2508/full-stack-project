const Select = ({ options, onChange, labelText, label }) => {
  return (
    <>
      <label htmlFor={label}>{labelText}</label>
      <select name={label} id={label} onChange={onChange}>
        <option value="">All Genres</option>
        {options.map((option) => (
          <option key={label + option} value={option.toLowerCase()}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
