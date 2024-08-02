"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

interface TimelineItem {
  year: number;
  event: string;
}

interface TimelineItemProps extends TimelineItem {
  isLeft: boolean;
  progress: number;
}

interface TimelineProps {
  data: TimelineItem[];
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, event, isLeft, progress }) => {
  const opacity = useTransform(progress, [0, 0.5, 1], [0, 1, 1]);
  const y = useTransform(progress, [0, 0.5, 1], [50, 0, 0]);

  return (
    <motion.li
      className={`flex justify-center items-center w-full mb-8 ${isLeft ? 'flex-row-reverse' : ''}`}
      style={{ opacity, y }}
    >
      <div className={`w-[90%] ${!isLeft ? ' text-right' : ''}`}>
        <div className="p-4">
          <h3 className="text-3xl font-bold text-GOLD mb-1">{year}</h3>
          <p className="text-white text-sm lg:text-md">{event}</p>
        </div>
      </div>
      <div className="w-[10%] flex justify-center">
        <div className="w-3 h-3 bg-GOLD shadow-sm rounded-full z-10"></div>
      </div>
      <div className="w-[90%]"></div>
    </motion.li>
  );
};

const Timeline: React.FC<TimelineProps> = ({ data }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { damping: 50, stiffness: 400 });

  return (
    <div className="max-w-5xl mx-auto p-4" ref={containerRef}>
      <ul className="relative list-none p-0">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-slate-600 via-slate-500 to-slate-600 rounded-full"></div>
        {data.map((item, index) => {
          const itemProgress = useTransform(
            smoothProgress,
            [index / data.length, (index + 1) / data.length],
            [0, 1]
          );
          return (
            <TimelineItem 
              key={index} 
              {...item} 
              isLeft={index % 2 === 0} 
              progress={itemProgress}
            />
          );
        })}
      </ul>
    </div>
  );
};

export const TimelineComponent = Timeline;