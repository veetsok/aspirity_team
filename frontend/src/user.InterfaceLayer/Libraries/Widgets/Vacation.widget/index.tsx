import { globalBgBlock } from "@/user.InterfaceLayer/constants/styles/CommonStyles";
import React, { useMemo } from "react";
import StatsBlockWidget from "@/user.InterfaceLayer/Libraries/Widgets/Stats.widget";
import TableBlockOrganisms from "@/user.InterfaceLayer/Libraries/UI_KIT/Organisms/Table.Organisms";
import { useLeaves } from "@/business.InterfaceLayer/hooks/useLeaves";
import { format } from "date-fns";
import { TLeaves } from "@/business.InterfaceLayer/type";
import { theadLeaves } from "./const";
import { VacationProps } from "./type";

const Vacation: React.FC<VacationProps> = ({ teamId }) => {
  const { leaves: teamLeaves } = useLeaves();
  const filteredLeaves = useMemo(() => {
    if (!teamId || !teamLeaves) return [];
    return teamLeaves.reduce((filtered: TLeaves[], item: TLeaves) => {
      if (item.team_id === Number(teamId)) {
        filtered.push(item);
      }
      return filtered;
    }, []);
  }, [teamId, teamLeaves]);

  const tbodyLeaves = useMemo(() => {
    return filteredLeaves.map((leave: TLeaves) => [
      leave.leave_type,
      `${format(new Date(leave.start_date), "dd.MM.yyyy")} - ${format(
        new Date(leave.end_date),
        "dd.MM.yyyy"
      )}`,
      leave.days_count.toString(),
    ]);
  }, [filteredLeaves]);

  return (
    <div className="flex flex-start gap-2 lg:gap-4 lg:flex-col lg:items-center">
      <StatsBlockWidget />
      <div className={`${globalBgBlock} w-[65%] lg:w-full`}>
        <TableBlockOrganisms
          title="История отпусков"
          subtitle="Посмотреть все"
          thead={theadLeaves}
          tbody={tbodyLeaves}
        />
      </div>
    </div>
  );
};

export default React.memo(Vacation);
