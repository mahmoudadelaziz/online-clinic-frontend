import { forwardRef } from "react";
import "./Input.css";

const Input = forwardRef(({ placeholder, name, type, ...props }, ref) => (
  <input
    className="input"
    name={name}
    placeholder={placeholder}
    ref={ref}
    type={type ? type : "text"}
    {...props}
  />
));
export { Input };
