import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

interface SelectMoleculeProps {}

const StyledFormControl = styled(FormControl)({
  "& .MuiInputLabel-root": {
    color: "var(--text-secondary)",
    "&.Mui-focused": {
      color: "blue",
    },
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "var(--text-secondary)",
    },
    "&:hover fieldset": {
      borderColor: "var(--text-secondary)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "blue",
    },
    "& .MuiSelect-select": {
      color: "var(--text-secondary)",
    },
  },
  "& .MuiMenuItem-root": {
    color: "var(--text-secondary)",
  },
});

const SelectMolecule: React.FC<SelectMoleculeProps> = (props) => {
  return (
    <Grid container justifyContent="center" spacing={1}>
      <Grid item xs={12} sm={6} md={12}>
        <StyledFormControl fullWidth variant="outlined">
          <InputLabel id="demo-simple-select-outlined-label">
            Occupation
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            label="Occupation"
            // onChange={handleChange}
            // onBlur={handleBlur}
            // value={values.occupation}
            name="occupation"
          >
            <MenuItem>None</MenuItem>

            {/* {options.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))} */}
          </Select>
        </StyledFormControl>
      </Grid>
    </Grid>
  );
};

export default React.memo(SelectMolecule);
