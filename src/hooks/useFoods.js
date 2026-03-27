import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { getFoods } from "../api/foodApi";

// Case 1: load bình thường
export const useFoods = (params) => {
    return useQuery({
        queryKey: ["foods", params],
        queryFn: () => getFoods(params),
        select: (data) => data?.data || [],
    });
};

// Case 2: xem thêm / load more
export const useInfiniteFoods = (params = {}) => {
    return useInfiniteQuery({
        queryKey: ["foods-infinite", params],
        queryFn: ({ pageParam = 1 }) =>
            getFoods({
                ...params,
                page: pageParam,
                limit: params.limit || 8,
            }),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
            const currentPage = Number(lastPage?.pagination?.page || 1);
            const totalPages = Number(lastPage?.pagination?.pages || 1);

            return currentPage < totalPages ? currentPage + 1 : undefined;
        },
    });
};
