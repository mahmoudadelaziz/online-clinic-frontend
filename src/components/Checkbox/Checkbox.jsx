import { forwardRef } from "react";
import "./Checkbox.css";

const Checkbox = forwardRef(({ name, value, text }, ref) => {
  return (
    <div className="checkbox__container">
      <label className="checkbox">
        <input id={name} type="checkbox" name={name} value={value} ref={ref} />
        <span className="checkmark"></span>
      </label>
      <span className="text-small">{text}</span>
    </div>
  );
});

export { Checkbox };
