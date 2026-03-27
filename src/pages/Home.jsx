import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import Hero from "@/components/ui/Hero";
import AboutUs from "@/components/ui/AboutUs";
import ComboCard from "@/components/ui/ComboCard";
import SectionTitle from "@/components/ui/SectionTitle";
import FoodCard from "@/components/ui/FoodCard";
import WhyChooseUsSection from "@/components/ui/WhChoseUsSection";
import { useCombos } from "@/hooks/useCombos";
import { useFoods } from "@/hooks/useFoods";

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
//     },
// ];

// const dishes = [
//     {
//         id: 1,
//         img: "/best-food.avif",
//         name: "Món ăn 1",
//         description: "Mô tả về món ăn 1"
//     },      
//     {
//         id: 2,
//         img: "/best-food.avif",
//         name: "Món ăn 2",
//         description: "Mô tả về món ăn 2"
//     },
//     {
//         id: 3,
//         img: "/best-food.avif",


//         name: "Món ăn 3",
//         description: "Mô tả về món ăn 3"
//     },
//     {
//         id: 4,
//         img: "/best-food.avif",
//         name: "Món ăn 4",
//         description: "Mô tả về món ăn 4"
//     },
//     {
//         id: 5,
//         img: "/best-food.avif",
//         name: "Món ăn 5",
//         description: "Mô tả về món ăn 5"
//     },
// ];



const HomePage = () => {

    const {
        data: combos = [],
        isLoading: isLoadingCombos,
        error: comboError,
    } = useCombos({isFeatured: true});

    const {
        data: foods = [],
        isLoading: isLoadingFoods,
        error: foodError,
    } = useFoods({isFeatured: true});

    console.log("Combos:", combos);
    console.log("Foods:", foods);

    return (
        <MainLayout>
            <Hero />
            <AboutUs />
            <SectionTitle
                subtitle="COMBO TIỆC"
                title="Combo bàn tiệc"
                description="Chọn combo tiệc phù hợp cho ngày vui."
            />
            {/* combo list */}
            <div className="mx-auto mb-2 max-w-6xl px-4">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:gap-10">
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
            </div>

            {/* Danh sach mon an */}
            <SectionTitle
                subtitle="MÓN ĂN"
                title="Thực đơn"
                description="Khám phá những món ăn đặc sắc tại nhà hàng."
            />
            <div className="mx-auto mb-10 max-w-7xl px-4">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 md:gap-10">
                    {foods.map((food) => (
                        <FoodCard
                            key={food._id}
                            img={food.img}
                            title={food.title}
                            description={food.description}
                            price={food.price}
                        />
                    ))}
                </div>
            </div>

            {/* <WhyChooseUsSection /> */}
            <WhyChooseUsSection />

        </MainLayout>
    );
};

export default HomePage;