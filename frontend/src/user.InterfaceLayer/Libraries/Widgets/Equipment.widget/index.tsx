import React, { useMemo } from "react";
import { globalBgBlock } from "@/user.InterfaceLayer/constants/styles/CommonStyles";
import TableBlock from "../../UI_KIT/Organisms/Table.Organisms";
import { useEquipment } from "@/business.InterfaceLayer/hooks/useEquipment";
import { TEquipment } from "@/business.InterfaceLayer/type";
import { equipmentTbodyStyle, theadEquipment } from "./const";
import { TableWidgetProps } from "./type";

const TableWidget: React.FC<TableWidgetProps> = (props) => {
  const { teamId } = props;
  const { equipment: teamEquipment } = useEquipment();
  const filteredEquipment = useMemo(() => {
    if (!teamId || !teamEquipment) return [];
    return teamEquipment.reduce((filtered: TEquipment[], item: TEquipment) => {
      if (item.team_id === Number(teamId)) {
        filtered.push(item);
      }
      return filtered;
    }, []);
  }, [teamId, teamEquipment]);

  const tbody = filteredEquipment.map((item: TEquipment) => [
    item.equipment_name,
    item.status,
    "-",
  ]);

  return (
    <div className={`${globalBgBlock} gap-4`}>
      <TableBlock
        title="Оборудование"
        subtitle="Изменить"
        thead={theadEquipment}
        tbody={tbody}
        tbodyStyle={equipmentTbodyStyle}
      />
    </div>
  );
};

export default React.memo(TableWidget);
