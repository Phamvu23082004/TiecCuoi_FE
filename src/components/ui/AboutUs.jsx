import React from "react";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";

const imageVariant = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const textVariant = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      delay: 0.4,
    },
  },
};

const AboutUs = () => {
  return (
    <section className="my-10 ">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        {/* Text */}
        <div>
          <SectionTitle
            subtitle="VỀ CHÚNG TÔI"
            title="Dịch vụ tiệc cưới tại nhà chỉn chu và tận tâm"
            description="Chúng tôi mang đến những bàn tiệc ấm cúng, phù hợp với phong cách và ngân sách của từng gia đình."
          />

          <motion.p
            variants={textVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-2 text-[15px] leading-7 text-[#6f6662] md:text-[16px] text-center"
          >
            Với nhiều năm kinh nghiệm, chúng tôi luôn đặt chất lượng món ăn và
            sự hài lòng của khách hàng lên hàng đầu.
          </motion.p>
        </div>

        {/* Image */}
        <motion.div
          variants={imageVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <img
            src="/vietnam-wedding.jpg"
            alt="Tiệc cưới"
            className="w-full rounded-2xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;