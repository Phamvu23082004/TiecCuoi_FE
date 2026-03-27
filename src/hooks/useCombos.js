import { useQuery } from "@tanstack/react-query";
import { getCombos } from "@/api/comboApi";

export const useCombos = (params) => {
  return useQuery({
    queryKey: ["combos", params],
    queryFn: () => getCombos(params),
    select: (data) => data?.data || [],
  });
};