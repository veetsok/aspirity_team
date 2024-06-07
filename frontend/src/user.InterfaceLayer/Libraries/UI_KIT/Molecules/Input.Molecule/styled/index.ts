import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

export const ValidationTextField = styled(TextField)({
  "& .MuiInputLabel-root": {
    color: "var(--text-secondary)", // цвет текста лейбла
    borderColor: "var(--border_primary)", // цвет границы инпута при наведении
    "&.Mui-disabled": {
      color: "var(--text-primary)", // цвет текста лейбла в недоступном состоянии
      borderColor: "var(--border_primary)", // цвет границы инпута
    },
    "&.Mui-focused": {
      color: "var(--text-primary)", // цвет текста лейбла в недоступном состоянии
      borderColor: "var(--text-primary)", // цвет границы инпута
    },
  },
  "& .MuiOutlinedInput-root": {
    "& input": {
      color: "var(--text-secondary)", // цвет текста
    },
    "& fieldset": {
      borderColor: "var(--text-secondary)", // цвет границы инпута
    },
    "&:hover fieldset": {
      borderColor: "var(--text-secondary)", // цвет границы инпута при наведении
    },
    "&.Mui-focused input + fieldset": {
      borderColor: "var(--text-secondary)", // цвет границы инпута в фокусе
      color: "var(--text-secondary)", // цвет текста в инпуте в фокусе
    },
    "&.Mui-disabled input + fieldset": {
      color: "var(--text-secondary)", // цвет текста в недоступном состоянии инпута
      borderColor: "var(--text-secondary)", // цвет границы инпута
    },
  },
});
