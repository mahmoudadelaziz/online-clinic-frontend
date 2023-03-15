import "./Button.css";

const Button = ({ title, variant }) => {
  let buttonType;
  if (variant === "primary") buttonType = "primary";
  else if (variant === "secondary") buttonType = "secondary";
  else buttonType = "";
  return <button className={`btn btn-${buttonType}`}>{title}</button>;
};
export { Button };
