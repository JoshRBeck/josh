import { useAnimation, motion, Variants } from "framer-motion";
import { useEffect } from "react";

interface AnimationProps {
  delay: number,
  duration: number
}

const useAnimationHook = ({ duration, delay }: AnimationProps) => {
  const controls = useAnimation();

  const variants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  }

  const animation = {
    initial: 'hidden',
    animate: 'visible',
    exit: 'hidden',
    variants,
    transition: { duration, delay }
  }

  useEffect(() => {
    return () => {
      controls.stop();
    };
  }, [controls])

  return { controls, animation };
};

export default useAnimationHook