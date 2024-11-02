"use client"
// React and Next.js imports
import React from "react"; // Import React
import Link from "next/link";
import { motion, useInView } from "framer-motion"; // Import framer-motion

// Third-party library imports
import Balancer from "react-wrap-balancer";

// UI component imports
import { Button } from "@/app/components/ui/button";

// Custom components
import { Section, Container } from "@/app/components/craft";
import { RainbowButton } from "./ui/rainbow-button";
import { Coolshape } from "coolshapes-react";
import AvatarCircles from "@/app/components/ui/avatar-circles"; // Import AvatarCircles

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import Particles from "@/app/components/ui/particles";
  
  const CTA = () => {
    const ref = React.useRef(null); // Create a ref for the element
    const isInView = useInView(ref); // Removed triggerOnce option
    
    const { theme } = useTheme();
    const [color, setColor] = useState("#ffffff");
  
    useEffect(() => {
      setColor(theme === "dark" ? "#ffffff" : "#000000");
    }, [theme]);

  return (
    <Section className="px-4 relative">
      <Container>
        <Coolshape className="absolute top-10 left-10" size={100} color="rgba(255, 0, 0, 0.5)" />
        <Coolshape className="absolute top-20 right-20" size={150} color="rgba(0, 255, 0, 0.5)" />
        <Coolshape className="absolute bottom-10 left-20" size={120} color="rgba(0, 0, 255, 0.5)" />
        <Coolshape className="absolute bottom-20 right-10" size={80} color="rgba(255, 255, 0, 0.5)" />

        {/* profile pics */}
        <div>
        <div className="flex justify-center">
          <AvatarCircles numPeople={100} avatarUrls={["https://avatar.vercel.sh/james", "https://avatar.vercel.sh/jill", "https://avatar.vercel.sh/john"]} className="mb-4" />
        </div>
        </div>

      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />

        <motion.div 
          ref={ref} // Attach the ref to the motion div
          className="pt-24 pb-24 flex flex-col items-center gap-6 rounded-lg p-6 text-center md:rounded-xl"
          initial={{ opacity: 0, y: 40 }} // Initial state
          animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate to this state when in view
          transition={{ duration: 0.5 }} // Animation duration
        >
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-500/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 leading-[1.2] py-4">
        انضم إلى عشرات المتوفقين
        </span>
          {/* <h1 className="text-4xl font-bold text-center">انضم إلى عشرات الطلاب المتوفقين</h1> */}
          <h4 className="text-xl text-muted-foreground text-center z-30">
            <Balancer>
            فرصتك لتحقيق أعلى الدرجات تبدأ هنا
            </Balancer>
          </h4>
          <RainbowButton>
          <Link href={`/courses/${encodeURIComponent("qudurat")}`}>
              !سجل الآن
            </Link>
          </RainbowButton>
        </motion.div>
      </Container>
    </Section>
  );
};

export default CTA;