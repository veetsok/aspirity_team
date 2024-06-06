import { useMemo } from "react";
import { useDataQuery } from "../useFetchData";
import { baseUrl } from "@/business.InterfaceLayer/config";

export const useContacts = () => {
  const { data, isLoading, isError, isFetching } = useDataQuery(
    "contacts",
    `${baseUrl}/team/contacts`
  );

  const contacts = useMemo(() => data || [], [data]);

  return { contacts, isLoading, isError, isFetching };
};
