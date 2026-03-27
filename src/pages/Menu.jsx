import React, { useMemo, useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import FoodCard from "@/components/ui/FoodCard";
import { Button } from "@/components/ui/button";
import { useInfiniteFoods } from "@/hooks/useFoods";

const TYPE_FOOD = {
  tatca: "Tất cả",
  khaivi: "Món khai vị",
  monchinh: "Món chính",
  trangmieng: "Món tráng miệng",
};

const Menu = () => {
  const [filter, setFilter] = useState("tatca");

  const queryParams = useMemo(
    () => ({
      limit: 8,
      ...(filter !== "tatca" ? { type: filter } : {}),
    }),
    [filter]
  );

  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteFoods(queryParams);

  const foods = data?.pages?.flatMap((page) => page?.data || []) || [];

  console.log("Foods:", foods);

  if (isLoading) return <div>Đang tải...</div>;
  if (error) return <div>Lỗi tải dữ liệu</div>;

  return (
    <MainLayout>
      <div className="sticky top-20 z-40  border-[#efe7e2] bg-white py-2 backdrop-blur-sm">
        <div className="flex gap-2 overflow-x-auto px-4 scrollbar-hide sm:flex-wrap sm:justify-center">
          {Object.entries(TYPE_FOOD).map(([type, label]) => (
            <Button
              key={type}
              onClick={() => setFilter(type)}
              variant={filter === type ? "default" : "outline"}
              size="sm"
              className="whitespace-nowrap rounded-full px-3 text-[12px] sm:px-4 sm:text-sm"
            >
              {label}
            </Button>
          ))}
        </div>
      </div>

      <section className="bg-gradient-to-b from-[#f6efe9] to-[#eef5f1] pt-10 pb-6 md:pt-16 md:pb-10">
        <div className="mx-auto w-full px-4 sm:max-w-6xl sm:px-6">
          <div className="grid grid-cols-2 gap-1 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
            {foods.map((food) => (
              <FoodCard key={food._id} {...food} />
            ))}
          </div>

          {hasNextPage && (
            <div className="mt-8 flex justify-center">
              <button
                onClick={fetchNextPage}
                disabled={isFetchingNextPage}
                className="rounded-full border border-[#d5a27d] px-6 py-2 sm:px-8 sm:py-3 text-[12px] sm:text-sm font-playfair tracking-wide text-[#c7804f] transition-all duration-300 hover:bg-[#c7804f] hover:text-white hover:shadow-md disabled:opacity-50"
              >
                {isFetchingNextPage ? "Đang tải..." : "Xem thêm"}
              </button>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default Menu;