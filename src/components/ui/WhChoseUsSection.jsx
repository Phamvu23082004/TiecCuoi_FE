import { Check } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";

const features = [
  "Nguyên liệu tươi và chọn lọc",
  "Phục vụ tận nơi đúng giờ",
  "Thực đơn đa dạng, dễ tùy chỉnh",
  "Chi phí hợp lý theo ngân sách",
];

const why = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const WhyChooseUsSection = () => {
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto grid items-center max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-2 md:gap-20">
        <div>
          <SectionTitle
            align="left"
            subtitle="LÝ DO LỰA CHỌN"
            title="Vì sao nên tin chọn dịch vụ của chúng tôi"
            description="Chúng tôi không chỉ mang đến món ăn ngon mà còn chú trọng trải nghiệm chỉn chu, ấm cúng và phù hợp với từng buổi tiệc."
          />
        </div>

        <div className="space-y-5">
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={why}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex items-start gap-4 border-b border-[#e7ddd7] pb-5"
            >
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#c7804f] shadow-sm">
                <Check size={16} />
              </div>
              <p className=" text-[13px] sm:text-[17px] leading-7 text-[#6f6662]">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;