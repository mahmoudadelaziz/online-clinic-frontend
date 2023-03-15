import { forwardRef } from "react";
import "./Input.css";

const Input = forwardRef(({ placeholder }, ref) => (
  <input className="input" placeholder={placeholder} ref={ref} />
));
export { Input };
