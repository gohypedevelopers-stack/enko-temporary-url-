"use client";

import { useRef, FC } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

export interface ParallaxSection {
  id: number | string;
  title: string;
  kicker?: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
}

interface ParallaxScrollFeatureSectionProps {
  sections: ParallaxSection[];
}

const ParallaxCard: FC<{ section: ParallaxSection; isDark: boolean }> = ({ section, isDark }) => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "center start"]
  });

  const opacityContent = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
  const clipProgress = useTransform(scrollYProgress, [0, 0.7], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);
  const translateContent = useTransform(scrollYProgress, [0, 1], [-50, 0]);

  return (
    <div 
        ref={ref} 
        className={cn(
            "w-full shadow-lg overflow-hidden flex flex-col lg:flex-row min-h-[60vh] border",
            isDark ? "bg-forge text-white border-white/10" : "bg-warm text-forge border-forge/10"
        )}
    >
        {/* Text Content */}
        <div 
            className={cn(
                "w-full lg:w-1/2 p-12 lg:p-24 xl:p-32 flex flex-col justify-center transition-colors duration-500",
                section.reverse ? "order-2 lg:order-1 border-r-4 border-forge/0 hover:border-charge" : "border-l-4 border-charge/0 hover:border-charge",
                isDark ? "hover:border-charge" : "hover:border-charge"
            )}
        >
            <motion.div style={{ y: translateContent }}>
                {section.kicker && (
                    <p className={cn(
                        "label-kicker mb-4 text-charge"
                    )}>
                        {section.kicker}
                    </p>
                )}
                <h2 className={cn(
                    "text-3xl lg:text-5xl font-black uppercase mb-6 tracking-tight",
                    isDark ? "text-white" : "text-forge"
                )}>
                    {section.title}
                </h2>
                <motion.p 
                    style={{ y: translateContent }} 
                    className={cn(
                        "text-base lg:text-lg leading-8 text-justify max-w-2xl",
                        isDark ? "text-white/70" : "text-forge/70"
                    )}
                >
                    {section.description}
                </motion.p>
            </motion.div>
        </div>

        {/* Image Reveal Effect */}
        <motion.div 
            style={{ 
                opacity: opacityContent,
                clipPath: clipProgress,
            }}
            className={cn(
                "w-full lg:w-1/2 relative min-h-[300px] lg:min-h-full",
                section.reverse ? "order-1 lg:order-2" : ""
            )}
        >
            <Image 
                src={section.imageUrl} 
                alt={section.title}
                fill
                className="object-cover transition-all duration-700 hover:scale-105" 
            />
        </motion.div>
    </div>
  );
};

export const ParallaxScrollFeatureSection: FC<ParallaxScrollFeatureSectionProps> = ({ sections }) => {
  return (
    <div className="bg-warm overflow-hidden w-full">
        <div className="flex flex-col w-full py-0 space-y-16">
            {sections.map((section, index) => {
                const isDark = index % 2 === 0;
                return <ParallaxCard key={section.id} section={section} isDark={isDark} />;
            })}
        </div>
    </div>
  );
};
