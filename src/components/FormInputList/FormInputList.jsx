import { TextField } from "@mui/material";
const FormInputList = ({ formInputs, errors, changeHandler }) => {
  return formInputs.map((input) => (
    <>
      <TextField
        label={input.placeholder}
        name={input.name}
        fullWidth
        error={errors[input.name] ? true : false}
        helperText={errors[input.name]}
        value={input.value}
        key={input.name}
        sx={{ my: 2 }}
        onChange={(e) => changeHandler(e)}
      />
    </>
  ));
};
export { FormInputList };
