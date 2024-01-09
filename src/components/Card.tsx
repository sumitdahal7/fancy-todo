import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CardProps {
  title: string;
  descp: string;
  withbtn: boolean;
  btntitle?: string;
  className?: string;
}

export default function Card({ ...props }: CardProps) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <motion.div
      animate={{ x: 100 }}
      className="sumitw-flex sumitw-flex-col sumitw-h-52 sumitw-w-72 sumitw-bg-gray-100 sumitw-rounded-md sumitw-shadow-2xl sumitw-px-2 sumitw-py-5"
    >
      <motion.h1
        className={
          isLoading
            ? "sumitw-animate-pulse sumitw-text-gray-300  sumitw-rounded-md sumitw-bg-gray-300"
            : "sumitw-font-bold"
        }
      >
        {props.title}
      </motion.h1>
      <h2
        className={
          isLoading
            ? "sumitw-animate-pulse sumitw-rounded-md sumitw-bg-gray-300 sumitw-text-sm sumitw-h-1/2 sumitw-mt-5 sumitw-text-gray-300 "
            : "sumitw-text-sm sumitw-h-1/2 sumitw-mt-5"
        }
      >
        {props.descp}
      </h2>
      {props.withbtn && (
        <button
          className={
            isLoading
              ? "sumitw-animate-pulse sumitw-rounded-md sumitw-bg-gray-300 sumitw-text-sm sumitw-h-1/2 sumitw-mt-5 sumitw-text-gray-300 sumitw-flex sumitw-font-bold sumitw-w-1/2 sumitw-p-2 "
              : "sumitw-flex sumitw-font-bold sumitw-w-1/2 sumitw-p-2 sumitw-text-sm sumitw-rounded-md"
          }
        >
          {props.btntitle}
        </button>
      )}
    </motion.div>
  );
}
