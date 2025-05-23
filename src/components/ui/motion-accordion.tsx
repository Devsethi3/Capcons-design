"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineExpandCircleDown } from "react-icons/md";
import { cn } from "@/lib/utils";

export interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  className?: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen = false,
  onToggle,
  className,
}) => {
  const [isExpanded, setIsExpanded] = useState(isOpen);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    if (onToggle) {
      onToggle();
    }
  };

  return (
    <div
      className={cn(
        "rounded-2xl overflow-hidden",
        className
      )}
    >
      <motion.button
        className="w-full flex items-center justify-between p-4 text-white bg-[#8e2784]"
        onClick={handleToggle}
        aria-expanded={isExpanded}
        whileTap={{ scale: 0.98 }}
      >
        <h3 className="lg:text-lg text-base font-bold text-[#fff]">
          {title}
        </h3>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <MdOutlineExpandCircleDown className="h-5 w-5 text-white font-extrabold" />
        </motion.div>
      </motion.button>
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.3, ease: "easeInOut" },
              opacity: { duration: 0.2, ease: "easeInOut" },
            }}
          >
            <div className="p-4 text-white bg-[#8e2784] ">{content}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export interface MotionAccordionProps {
  items: {
    id: string;
    title: string;
    content: React.ReactNode;
  }[];
  allowMultiple?: boolean;
  className?: string;
}

export const MotionAccordion: React.FC<MotionAccordionProps> = ({
  items,
  allowMultiple = false,
  className,
}) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const handleToggle = (id: string) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenItems((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn("flex flex-col space-y-3", className)}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          content={item.content}
          isOpen={openItems.includes(item.id)}
          onToggle={() => handleToggle(item.id)}
        />
      ))}
    </div>
  );
};
