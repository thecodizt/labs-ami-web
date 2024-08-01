"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItem {
  year: number;
  event: string;
}

interface TimelineItemProps extends TimelineItem {
  isLeft: boolean;
}

interface TimelineProps {
  data: TimelineItem[];
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const TimelineItem: React.FC<TimelineItemProps> = ({ year, event, isLeft }) => (
  <motion.li
    className={`flex justify-center items-center w-full mb-8 ${isLeft ? 'flex-row-reverse' : ''}`}
    variants={itemVariants}
  >
    <div className={`w-[45%] ${!isLeft ? 'pr-4 text-right' : 'pl-4'}`}>
      <div className="p-4">
        <h3 className="text-xl font-bold text-GOLD mb-2">{year}</h3>
        <p className="text-white text-sm font-thin">{event}</p>
      </div>
    </div>
    <div className="w-[10%] flex justify-center">
      <div className="w-4 h-4 bg-GOLD shadow-sm rounded-full z-10"></div>
    </div>
    <div className="w-[45%]"></div>
  </motion.li>
);

const Timeline: React.FC<TimelineProps> = ({ data }) => {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <motion.ul
        className="relative list-none p-0"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.3
            }
          }
        }}
      >
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gray-400"></div>
        {data.map((item, index) => (
          <TimelineItem key={index} {...item} isLeft={index % 2 === 0} />
        ))}
      </motion.ul>
    </div>
  );
};

export const TimelineComponent = Timeline;