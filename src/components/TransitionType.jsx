import { motion } from "framer-motion";

export default function TransitionType() {
  return (
    <>
      <motion.div
        className="m-4"
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 3 }}
      >
        <h1>Learning Animation</h1>
        <p>
          We Love Animation. We are Enjoying it a lot. Framer Motion is great.
        </p>
      </motion.div>
      <motion.div
        className="m-4"
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", duration: 3 }}
      >
        <h1>Learning Animation</h1>
        <p>
          We Love Animation. We are Enjoying it a lot. Framer Motion is great.
        </p>
      </motion.div>
      <motion.div
        className="m-4"
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", bounce: 0.8, duration: 3 }}
      >
        <h1>Learning Animation</h1>
        <p>
          We Love Animation. We are Enjoying it a lot. Framer Motion is great.
        </p>
      </motion.div>
    </>
  );
}
