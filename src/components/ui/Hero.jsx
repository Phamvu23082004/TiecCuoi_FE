import { Button } from "../ui/button";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router";

const banners = [
  {
    id: 1,
    image: "/vietnam-wedding.jpg",
    badge: "Dịch vụ nấu tiệc cưới tại nhà",
    titleLine1: "Bàn tiệc ấm cúng",
    titleLine2: "Trọn vẹn ngày vui",
    desc: "Thực đơn đa dạng, phục vụ tận nơi, phong cách hiện đại và lịch sự, phù hợp cho tiệc cưới gia đình Việt.",
    primaryBtn: "Xem thực đơn",
    secondaryBtn: "Liên hệ",
  },
  {
    id: 2,
    image: "/best-food.avif",
    badge: "Thực đơn phong phú",
    titleLine1: "Món ngon chỉn chu",
    titleLine2: "Phục vụ tận tâm",
    desc: "Từ món khai vị đến món chính, mọi bàn tiệc đều được chuẩn bị kỹ lưỡng để mang lại trải nghiệm trọn vẹn.",
    primaryBtn: "Xem món ăn",
    secondaryBtn: "Nhận tư vấn",
  },
  {
    id: 3,
    image: "/planner.jpg",
    badge: "Combo tiệc tiết kiệm",
    titleLine1: "Lựa chọn tiện lợi",
    titleLine2: "Chi phí hợp lý",
    desc: "Nhiều combo bàn tiệc phù hợp số lượng khách, ngân sách và phong cách tổ chức của từng gia đình.",
    primaryBtn: "Xem combo",
    secondaryBtn: "Báo giá",
  },
];

const Hero = () => {
  return (
    <div>
      <section className="relative h-[400px] overflow-hidden bg-background md:h-[700px]">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          className="h-full"
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <div className="relative h-full w-full overflow-hidden">
                <img
                  src={banner.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />

                {/* Ảnh blur chỉ hiện bên trái, mờ dần sang phải */}
                <img
                  src={banner.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover object-center blur-md scale-100"
                  style={{
                    maskImage:
                      "linear-gradient(to right, black 0%, black 35%, transparent 70%)",
                    WebkitMaskImage:
                      "linear-gradient(to right, black 0%, black 35%, transparent 70%)",
                  }}
                />

                {/* overlay tối nhẹ bên trái để text nổi hơn */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 35%, rgba(0,0,0,0.05) 65%, rgba(0,0,0,0) 100%)",
                  }}
                />

                <div className="absolute inset-0 flex items-center">
                  <div className="max-w-xl space-y-5 px-6 text-white md:px-10">
                    <span
                      className="inline-block font-playfair rounded-full bg-white/20 px-4 py-1 text-sm backdrop-blur animate-fade-up opacity-0"
                      style={{ animationDelay: "0ms", animationFillMode: "forwards" }}
                    >
                      {banner.badge}
                    </span>

                    <h1
                      className="text-xl font-playfair md:text-5xl animate-fade-up opacity-0"
                      style={{ animationDelay: "150ms", animationFillMode: "forwards" }}
                    >
                      {banner.titleLine1} <br />
                      {banner.titleLine2}
                    </h1>

                    <p
                      className="text-sm text-white/90 md:text-base animate-fade-up opacity-0"
                      style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
                    >
                      {banner.desc}
                    </p>

                    <div
                      className="flex flex-wrap gap-3 animate-fade-up opacity-0"
                      style={{ animationDelay: "450ms", animationFillMode: "forwards" }}
                    >
                      <Button asChild className="rounded-full px-6">
                        <Link to="/menu">Xem thực đơn</Link>
                      </Button>

                      <Button
                        asChild
                        variant="outline"
                        className="rounded-full border-white bg-transparent text-white hover:bg-white hover:text-black"
                      >
                        <Link to="/contact">Liên hệ</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </section>
    </div>

  );
};

export default Hero;