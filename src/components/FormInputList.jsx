import { TextField } from "@mui/material";
const FormInputList = ({ formInputs, errors, changeHandler }) => {
  return formInputs.map((input) => (
    <TextField
      label={input.placeholder}
      fullWidth
      error={errors[input.name] ? true : false}
      helperText={errors[input.name]}
      value={input.value}
      key={input.name}
      inputProps={{ name: input.name, type: input.type }}
      InputLabelProps={{
        shrink:
          input.name === "workingHoursStart" || input.name === "workingHoursEnd"
            ? true
            : undefined,
      }}
      sx={{ my: 2 }}
      onChange={(e) => changeHandler(e)}
    />
  ));
};
export { FormInputList };
