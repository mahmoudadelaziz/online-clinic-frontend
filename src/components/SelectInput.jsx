import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useState } from "react";

export const SelectInput = ({ options, label }) => {
  const [option, setOption] = useState("");
  const handleCitySelectChange = (event) => {
    setOption(event.target.value);
  };
  return (
    <>
      <FormControl>
        <InputLabel id="city-select-label">{label}</InputLabel>
        <Select
          labelId="city-select-label"
          label={label}
          value={option}
          onChange={handleCitySelectChange}
          variant="filled"
          sx={{ width: 200 }}
        >
          {Object.entries(options).map(([key, value]) => (
            <MenuItem value={key} key={key}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};
