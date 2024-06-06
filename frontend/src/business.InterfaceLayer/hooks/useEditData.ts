import { useMutation, useQueryClient } from "react-query";

const editData = async (
  url: string,
  data: { productId: number | undefined; updatedData: any }
) => {
  const { productId, updatedData } = data;
  if (productId === undefined) {
    throw new Error("ProductId must be provided");
  }

  const response = await fetch(`${url}/${productId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const useEditData = (url: string) => {
  const queryClient = useQueryClient();

  return useMutation(
    (data: { productId: number | undefined; updatedData: any }) =>
      editData(url, data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("team");
      },
    }
  );
};
