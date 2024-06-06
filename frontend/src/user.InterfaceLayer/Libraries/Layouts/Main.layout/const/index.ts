import * as Yup from "yup";

const col_span_1 = "col-span-1 md:col-span-2";
const col_span_2 = "col-span-2";

export const personalInfoFields = [
  { name: "first_name", label: "Имя", type: "text", className: col_span_1 },
  {
    name: "last_name",
    label: "Фамилия",
    type: "text",
    className: col_span_1,
  },
  {
    name: "middle_name",
    label: "Отчество",
    type: "text",
    className: col_span_2,
  },
  {
    name: "birth_date",
    label: "Дата рождения",
    type: "date",
    className: col_span_1,
  },
  {
    name: "hire_date",
    label: "Дата трудоустройства",
    type: "date",
    className: col_span_1,
  },
  { name: "country", label: "Страна", type: "text", className: col_span_1 },
  { name: "city", label: "Город", type: "text", className: col_span_1 },
  {
    name: "salary",
    label: "Зарплата",
    type: "text",
    className: col_span_1,
  },
  {
    name: "weekly_salary",
    label: "Еженедельная зарплата",
    type: "text",
    className: col_span_1,
  },
  {
    name: "account_number",
    label: "Номер счета",
    type: "text",
    className: col_span_2,
  },
];

export const departmentFields = [
  {
    name: "department",
    label: "Отдел",
    type: "text",
    className: col_span_1,
  },
  {
    name: "supervisor",
    label: "Руководитель",
    type: "text",
    className: col_span_1,
  },
  { name: "level", label: "Уровень", type: "text", className: col_span_1 },
  {
    name: "position",
    label: "Должность",
    type: "text",
    className: col_span_1,
  },
];

export const contactsFields = [
  {
    name: "phone_number",
    label: "Номер телефона",
    type: "text",
    className: col_span_1,
  },
  {
    name: "email",
    label: "Электронная почта",
    type: "text",
    className: col_span_1,
  },
  {
    name: "telegram",
    label: "Telegram",
    type: "text",
    className: col_span_1,
  },
  { name: "slack", label: "Slack", type: "text", className: col_span_1 },
];

export const validationSchema = Yup.object().shape({
  first_name: Yup.string().required("Обязательно"),
  last_name: Yup.string().required("Обязательно"),
  middle_name: Yup.string().required("Обязательно"),
  birth_date: Yup.date().required("Обязательно"),
  hire_date: Yup.date().required("Обязательно"),
  country: Yup.string().required("Обязательно"),
  city: Yup.string().required("Обязательно"),
  salary: Yup.string().required("Обязательно"),
  weekly_salary: Yup.string().required("Обязательно"),
  account_number: Yup.string().required("Обязательно"),
  department: Yup.string().required("Обязательно"),
  supervisor: Yup.string().required("Обязательно"),
  level: Yup.string().required("Обязательно"),
  position: Yup.string().required("Обязательно"),
  phone_number: Yup.string().required("Обязательно"),
  email: Yup.string().required("Обязательно"),
  telegram: Yup.string().required("Обязательно"),
  slack: Yup.string().required("Обязательно"),
});
