export const theadEquipment = ["Название товара", "Статус", "Осталось недель"];

const getStatusClassName = (status: string) => {
  if (status === "Личное") {
    return "bg-bg_blue text-text_accent px-2 rounded-[8px]";
  }
  if (status === "Компания") {
    return "bg-bg_orange text-text_orange px-2 rounded-[8px]";
  }
  return "";
};

export const equipmentTbodyStyle = (cell: string, cellIndex: number) => {
  if (cellIndex === 1) {
    return getStatusClassName(cell);
  }
  return "";
};
