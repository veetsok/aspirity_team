import { useMemo } from "react";
import { useDataQuery } from "../useFetchData";
import { baseUrl } from "@/business.InterfaceLayer/config";
import { useEditData } from "../useEditData";

export const useProducts = () => {
  const { data, isLoading, isError, isFetching } = useDataQuery(
    "team",
    `${baseUrl}/team`
  );

  const products = useMemo(() => data || [], [data]);

  return { products, isLoading, isError, isFetching };
};

export const useEditTeamMember = () => {
  const editTeamMemberMutation = useEditData(`${baseUrl}/team`);

  return editTeamMemberMutation;
};
