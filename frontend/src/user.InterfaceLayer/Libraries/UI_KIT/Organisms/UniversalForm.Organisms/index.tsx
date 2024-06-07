import React, { useState, useRef, useLayoutEffect } from "react";
import { Formik, Form } from "formik";
import ButtonAtom from "../../Atoms/Button.Atom";
import ButtonAtomEnum from "../../Atoms/Button.Atom/enum";
import InputMolecule from "../../Molecules/Input.Molecule";
import { UniversalFormProps } from "./type";
import TextAtom from "../../Atoms/Text.Atom";
import TextAtomEnum from "../../Atoms/Text.Atom/enum";
import Spinner from "../../Spinner";

const UniversalForm: React.FC<UniversalFormProps> = (props) => {
  const { initialValues,isLoading, validationSchema, onSubmit, fields, subtitle } = props;

  const [isEditing, setIsEditing] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (formRef.current && !formRef.current.contains(event.target as Node)) {
      setIsEditing(false);
    }
  };

  useLayoutEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="flex flex-col gap-8" ref={formRef}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          if (isEditing) {
            onSubmit(values);
          }
          setSubmitting(false);
        }}
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
                  onClick={handleEdit}
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
              {isEditing && (
                <>
                  {isLoading ? ( // Показываем спиннер, если isLoading истинно
                    <Spinner />
                  ) : (
                    <ButtonAtom
                      type={ButtonAtomEnum.enum_defaultButton}
                      disabled={isSubmitting}
                      onClick={() => {
                        onSubmit(values);
                        setIsEditing(false);
                      }}
                      className="col-span-2"
                    >
                      Сохранить
                    </ButtonAtom>
                  )}
                </>
              )}
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default React.memo(UniversalForm);
