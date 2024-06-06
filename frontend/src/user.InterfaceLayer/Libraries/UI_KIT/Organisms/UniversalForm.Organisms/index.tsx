import React from "react";
import { Formik, Form } from "formik";
import ButtonAtom from "../../Atoms/Button.Atom";
import ButtonAtomEnum from "../../Atoms/Button.Atom/enum";
import InputMolecule from "../../Molecules/Input.Molecule";
import { UniversalFormProps } from "./type";
import TextAtom from "../../Atoms/Text.Atom";
import TextAtomEnum from "../../Atoms/Text.Atom/enum";

const UniversalForm: React.FC<UniversalFormProps> = (props) => {
  const {
    initialValues,
    validationSchema,
    onSubmit,
    fields,
    subtitle,
    isEditing,
    onEdit,
  } = props;

  return (
    <div className="flex flex-col gap-8">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({
          isSubmitting,
          handleChange,
          handleBlur,
          values,
          errors,
          touched,
          dirty,
        }) => (
          <>
            <div className="flex items-center justify-between">
              <TextAtom
                type={TextAtomEnum.enum_h5}
                className="text-text_primary"
              >
                {subtitle}
              </TextAtom>
              {!isEditing && (
                <ButtonAtom
                  type={ButtonAtomEnum.enum_textButton}
                  onClick={onEdit}
                >
                  Изменить
                </ButtonAtom>
              )}
            </div>

            <Form className="grid grid-cols-2 md:grid-cols-1 gap-6">
              {fields.map((field, index) => (
                <div key={index} className={`${field.className}`}>
                  <InputMolecule
                    label={field.label}
                    name={field.name}
                    value={values[field.name]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched[field.name] && Boolean(errors[field.name])}
                    helperText={
                      touched[field.name] &&
                      typeof errors[field.name] === "string"
                        ? (errors[field.name] as string)
                        : undefined
                    }
                    disabled={!isEditing}
                  />
                </div>
              ))}
              {isEditing && dirty && (
                <ButtonAtom
                  type={ButtonAtomEnum.enum_defaultButton}
                  disabled={isSubmitting}
                  onClick={() => onSubmit(values)}
                  className="col-span-2"
                >
                  Сохранить изменения
                </ButtonAtom>
              )}
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default React.memo(UniversalForm);
