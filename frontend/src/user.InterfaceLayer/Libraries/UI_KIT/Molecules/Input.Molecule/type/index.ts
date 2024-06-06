export interface InputMoleculeProps {
  label?: string;
  name?: string;
  value?: any;
  onChange?: (e: React.ChangeEvent<any>) => void;
  onBlur?: (e: React.FocusEvent<any>) => void;
  error?: boolean;
  helperText?: string | false;
  className?: string;
  disabled?: boolean;
}
