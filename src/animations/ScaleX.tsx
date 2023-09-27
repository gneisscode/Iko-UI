import { motion } from "framer-motion";
import React, { useState } from "react";

export default function ScaleX({
  children,
}: {
  children: JSX.Element | React.ReactNode;
}) {
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive(!isActive); 
  };

  return (
    <div>
      <motion.div
        onClick={handleButtonClick}
        initial={{ opacity: 1, scale: 1 }}
        whileTap={{ scale: 0.9 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
