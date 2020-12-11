import React from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { IconType } from "react-icons";

export default function BlockTile({
  title,
  icon,
}: {
  title: string;
  icon?: IconType;
}) {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const BannerIcon = icon ? icon : FaReact;
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 2, delay: 6 }}
      className="text-center border-8 border-double rounded-2xl px-6 py-8 w-60"
    >
      <div className="flex justify-center text-6xl">
        <BannerIcon />
      </div>
      <div className="mt-10">{title}</div>
    </motion.div>
  );
}
