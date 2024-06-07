import * as Yup from "yup";

export interface UniversalFormProps {
  subtitle?: string;
  isLoading?: boolean;
  initialValues: any;
  validationSchema: Yup.ObjectSchema<any>;
  onSubmit: (values: any) => void;
  fields: { name: string; label: string; type: string; className: string }[];
  onEdit: () => void;
  isEditing: boolean;
}
