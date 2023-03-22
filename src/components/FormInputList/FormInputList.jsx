import { Input } from "../Input/Input";
const FormInputList = ({ formInputs, errors, changeHandler }) => {
  return formInputs.map((input) => (
    <>
      <Input
        placeholder={input.placeholder}
        name={input.name}
        value={input.value}
        key={input.name}
        onChange={(e) => changeHandler(e)}
      />
      {errors[input.name] && <div className="error">{errors[input.name]}</div>}
    </>
  ));
};
export { FormInputList };
