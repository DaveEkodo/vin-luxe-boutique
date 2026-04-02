import type { MotionProps } from "framer-motion";

export const getResponsiveMotionProps = (
  isMobile: boolean,
  props: MotionProps
): MotionProps => (isMobile ? {} : props);