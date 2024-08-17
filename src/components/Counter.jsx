import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function Counter() {
  const count = useMotionValue(0);
  const roundedValue = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 100, { duration: 10 });
    return animation.stop;
  }, [count]);

  return <motion.div>{roundedValue}</motion.div>;
}
