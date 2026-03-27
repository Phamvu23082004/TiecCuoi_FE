import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const SectionTitle = ({ subtitle, title, description }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="mx-auto max-w-3xl px-4 py-8 text-center sm:py-12 md:py-16"
    >
      {subtitle && (
        <motion.div
          variants={item}
          className="mb-3 flex items-center justify-center gap-3 sm:mb-4 sm:gap-4"
        >
          <span className="h-px w-4 bg-[#e6d7cc] sm:w-5" />
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#d88d5d] sm:text-[12px] md:text-[13px] md:tracking-[0.28em]">
            {subtitle}
          </p>
          <span className="h-px w-4 bg-[#e6d7cc] sm:w-5" />
        </motion.div>
      )}

      <motion.h2
        variants={item}
        className="font-serif text-[28px] leading-tight text-[#4b423f] sm:text-[34px] md:text-[48px] lg:text-[56px]"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          variants={item}
          className="mx-auto mt-3 max-w-xl text-[13px] leading-6 text-[#8a817c] sm:mt-4 sm:text-[14px] sm:leading-7 md:text-[16px]"
        >
          {description}
        </motion.p>
      )}

      <motion.div
        variants={item}
        className="mt-4 flex items-center justify-center gap-2 sm:mt-5 md:mt-6"
      >
        <span className="h-px w-12 bg-[#ecd8cb] sm:w-16 md:w-20" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#d88d5d]" />
        <span className="h-px w-12 bg-[#ecd8cb] sm:w-16 md:w-20" />
      </motion.div>
    </motion.div>
  );
};

export default SectionTitle;