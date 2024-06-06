import React, { useState } from "react";
import { globalBgBlock } from "@/user.InterfaceLayer/constants/styles/CommonStyles";
import InfoBlock from "../../Widgets/InfoBlock.widget";
import UniversalForm from "../../UI_KIT/Organisms/UniversalForm.Organisms";
import { useEditTeamMember } from "@/business.InterfaceLayer/hooks/useProducts";
import { MainLayoutProps } from "./type";
import {
  contactsFields,
  departmentFields,
  personalInfoFields,
  validationSchema,
} from "./const";

const MainLayout: React.FC<MainLayoutProps> = (props) => {
  const { user, supervisor, contacts } = props;
  const [editingForm, setEditingForm] = useState<string | null>(null);
  const editTeamMemberMutation = useEditTeamMember();
  const userContacts = contacts.find((contact) => contact.team_id === user?.id);
  const initialValues = {
    ...user,
    ...userContacts,
  };

  const handleSubmit = async (values: any, formType: string) => {
    try {
      await editTeamMemberMutation.mutateAsync({
        productId: user?.id,
        updatedData: values,
      });
      setEditingForm(null);
    } catch (error) {
      console.error("Error editing team member:", error);
    }
  };

  return (
    <div className="flex lg:flex-col justify-between gap-4">
      <div className={`${globalBgBlock} gap-10 w-[54.88%] lg:w-full`}>
        <UniversalForm
          subtitle="Персональная информация"
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => handleSubmit(values, "personalInfo")}
          fields={personalInfoFields}
          isEditing={editingForm === "personalInfo"}
          onEdit={() => setEditingForm("personalInfo")}
        />
        <UniversalForm
          subtitle="Подразделение"
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => handleSubmit(values, "department")}
          fields={departmentFields}
          isEditing={editingForm === "department"}
          onEdit={() => setEditingForm("department")}
        />
        <UniversalForm
          subtitle="Контакты"
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => handleSubmit(values, "contacts")}
          fields={contactsFields}
          isEditing={editingForm === "contacts"}
          onEdit={() => setEditingForm("contacts")}
        />
      </div>
      <InfoBlock supervisor={supervisor} />
    </div>
  );
};

export default React.memo(MainLayout);
