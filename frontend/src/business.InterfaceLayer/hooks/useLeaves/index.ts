import { useMemo } from "react";
import { useDataQuery } from "../useFetchData";
import { baseUrl } from "@/business.InterfaceLayer/config";

export const useLeaves = () => {
  const { data, isLoading, isError, isFetching } = useDataQuery(
    "leaves",
    `${baseUrl}/team/leaves`
  );

  const leaves = useMemo(() => data || [], [data]);

  return { leaves, isLoading, isError, isFetching };
};
