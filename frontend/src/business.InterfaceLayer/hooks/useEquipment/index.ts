import { useMemo } from "react";
import { useDataQuery } from "../useFetchData";
import { baseUrl } from "@/business.InterfaceLayer/config";

export const useEquipment = () => {
  const { data, isLoading, isError, isFetching } = useDataQuery(
    "equipment",
    `${baseUrl}/team/equipment`
  );

  const equipment = useMemo(() => data || [], [data]);

  return { equipment, isLoading, isError, isFetching };
};
