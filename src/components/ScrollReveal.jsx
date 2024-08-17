/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

export default function ScrollReveal() {
  const greetings = [
    "Hello",
    "Okay",
    "Welcome",
    "Come In",
    "Thank You",
    "Hello",
    "Okay",
    "Welcome",
    "Come In",
    "Thank You",
    "Hello",
    "Okay",
    "Welcome",
    "Come In",
    "Thank You",
  ];

  return (
    <div>
      {greetings.map((greeting, index) => (
        <Box key={index} text={greeting} />
      ))}
    </div>
  );
}

const Box = ({ text }) => {
  return (
    <motion.div
      className="w-32 h-32 border rounded-sm bg-pink-300 text-black text-center m-4"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1.5,
        },
      }}
      viewport={{ once: true }}
    >
      {text}
    </motion.div>
  );
};
