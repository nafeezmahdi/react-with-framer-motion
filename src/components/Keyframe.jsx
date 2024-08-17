import { motion } from "framer-motion";

export default function Keyframe() {
  return (
    <motion.div
      className="bg-blue-500 border w-32 h-32 m-52"
      animate={{
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        rotate: [0, 90, 180, 270, 0],
        scale: [1, 1, 2, 2, 1],
      }}
      transition={{ duration: 3 }}
      exit={{
        x: "-100vw",
        transition: {
          ease: "easeInOut",
          duration: 3,
        },
      }}
    />
  );
}
