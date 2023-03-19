import { forwardRef } from "react";
import "./Input.css";

const Input = forwardRef(({ placeholder, name, ...props }, ref) => (
  <input
    className="input"
    name={name}
    placeholder={placeholder}
    ref={ref}
    {...props}
  />
));
export { Input };
