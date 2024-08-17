import { motion } from "framer-motion";

export default function ButtonTap() {
  return (
    <motion.div
      className="mx-[10rem] mt-12"
      exit={{
        x: "-100vw",
        transition: {
          ease: "easeInOut",
          duration: 3,
        },
      }}
    >
      <motion.button
        className="bg-black text-white p-2 border m-2 
     rounded-md"
        whileTap={{ scale: 0.5 }}
        whileHover={{ scale: 1.5 }}
      >
        Tap Me
      </motion.button>
      <motion.button
        className="bg-black text-white p-2 border m-2 
     rounded-md"
        whileTap={{ scale: 0.5 }}
        whileHover={{ scale: 1.5, transition: { yoyo: Infinity } }}
      >
        Tap YoYo
      </motion.button>
    </motion.div>
  );
}
