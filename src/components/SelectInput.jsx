import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export const SelectInput = ({
  options,
  label,
  selectedOption,
  handleOptionSelect,
}) => {
  return (
    <>
      <FormControl>
        <InputLabel id="city-select-label">{label}</InputLabel>
        <Select
          labelId="city-select-label"
          label={label}
          value={selectedOption}
          onChange={(e) => handleOptionSelect(e)}
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
