import React from "react";
import Grid from "@mui/material/Grid";
import { ValidationTextField } from "./styled";
import { InputMoleculeProps } from "./type";

const InputMolecule: React.FC<InputMoleculeProps> = (props) => {
  const {
    label,
    name,
    value,
    onChange,
    onBlur,
    disabled,
    error,
    helperText,
    className,
  } = props;

  return (
    <Grid item xs={12} sm={6} md={6} className={className}>
      <ValidationTextField
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        error={error}
        helperText={helperText}
        variant="outlined"
        fullWidth
      />
    </Grid>
  );
};

export default React.memo(InputMolecule);
