import "./Select.css";
export const Select = ({ label, options, ...props }) => {
  return (
    <>
      <h3 className="select__label">{label}</h3>
      <div class="select__container" {...props}>
        <select id="select">
          <option value="" disabled selected>
            Select a city
          </option>
          {options.map((option) => (
            <option value={option.value}>{option.title}</option>
          ))}
        </select>
        <span className="material-symbols-outlined">expand_more</span>
      </div>
    </>
  );
};
