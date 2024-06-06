//useFetchData.ts
import { useQuery } from "react-query";

const fetchData = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const useDataQuery = (key: string, url: string) => {
  return useQuery(key, () => fetchData(url));
};
