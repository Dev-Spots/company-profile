"use client";

import useMounted from "@/hooks/useMounted";
import { useTheme } from "next-themes";
import {
  BsCloudMoon,
  BsCloudSun,
} from "@/components/atoms/icons/react-icons-bs";
import { motion } from "framer-motion";

export default function ThemeButtonToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const mount = useMounted();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return mount ? (
    <motion.button
      id="dark-mode-switcher"
      aria-label="Toggle Theme"
      onClick={toggleTheme}
      className={`rounded-xl p-2 ${
        resolvedTheme === "light" ? "bg-white" : "bg-neutral-800"
      }`}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      {resolvedTheme === "light" ? <BsCloudSun /> : <BsCloudMoon />}
    </motion.button>
  ) : null;
}
