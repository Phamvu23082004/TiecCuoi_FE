// import MainLayout from '@/components/layout/MainLayout'
// import ComboCard from '@/components/ui/ComboCard'
// import React from 'react'

// const combos = [
//     {
//         id: 1,
//         img: "/planner.jpg",
//         title: "Combo 1",
//         description: "Mô tả về combo tiệc",
//         items: [
//             "Gỏi ngó sen tôm thịt",
//             "Gà hấp lá chanh",
//             "Lẩu thái hải sản",
//             "Trái cây tráng miệng"
//         ],
//         price: "5.000.000đ/bàn"
//     },
//     {
//         id: 2,
//         img: "/planner.jpg",
//         title: "Combo 2",
//         description: "Mô tả về combo tiệc",
//         items: [
//             "Gỏi ngó sen tôm thịt",
//             "Gà hấp lá chanh",
//             "Lẩu thái hải sản",
//             "Trái cây tráng miệng"
//         ],
//         price: "5.000.000đ/bàn"
//     },
//     {
//         id: 3,
//         img: "/planner.jpg",
//         title: "Combo 3",
//         description: "Mô tả về combo tiệc",
//         items: [
//             "Gỏi ngó sen tôm thịt",
//             "Gà hấp lá chanh",
//             "Lẩu thái hải sản",
//             "Trái cây tráng miệng"
//         ],
//         price: "5.000.000đ/bàn"
//     }
// ]



// const Combo = () => {
//     return (
//         <MainLayout>
//         <div className="mx-auto mt-6 mb-10 max-w-6xl px-4">
//             <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:gap-10">
//                 {combos.map((combo) => (
//                     <ComboCard
//                         key={combo.id}
//                         img={combo.img}
//                         title={combo.title}
//                         description={combo.description}
//                         items={combo.items}
//                         price={combo.price}
//                     />
//                 ))}
//             </div>
//         </div>
//     </MainLayout>
//     )
// }

// export default Combo

import MainLayout from "@/components/layout/MainLayout";
import ComboCard from "@/components/ui/ComboCard";
import React from "react";
import { useCombos } from "@/hooks/useCombos";

const Combo = ({}) => {
  const {
          data: combos = [],
          isLoading: isLoadingCombos,
          error: comboError,
      } = useCombos();

  console.log("Combos:", combos);

  return (
    <MainLayout>
      <div className="mx-auto mt-6 mb-10 max-w-6xl px-4">
        {isLoadingCombos && (
          <p className="text-center text-gray-500">Đang tải combo...</p>
        )}

        {comboError && (
          <p className="text-center text-red-500">
            {comboError?.response?.data?.message || "Có lỗi xảy ra khi tải combo"}
          </p>
        )}

        {!isLoadingCombos && !comboError && combos.length === 0 && (
          <p className="text-center text-gray-500">Chưa có combo nào</p>
        )}

        {!isLoadingCombos && !comboError && combos.length > 0 && (
          <div className="grid grid-cols-1 gap-6 md:gap-10 lg:grid-cols-3">
            {combos.map((combo) => (
              <ComboCard
                key={combo._id}
                img={combo.img}
                title={combo.title}
                description={combo.description}
                items={combo.items}
                price={combo.price}
              />
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Combo;