"use client"
// React and Next.js imports
import React from "react"; // Import React
import Link from "next/link";
import { motion, useInView } from "framer-motion"; // Import framer-motion

// Third-party library imports
import Balancer from "react-wrap-balancer";

// UI component imports
import { Button } from "@/components/ui/button";

// Custom components
import { Section, Container } from "@/components/craft";
import { RainbowButton } from "./ui/rainbow-button";
import { Coolshape } from "coolshapes-react";
import AvatarCircles from "@/components/ui/avatar-circles"; // Import AvatarCircles

const CTA = () => {
  const ref = React.useRef(null); // Create a ref for the element
  const isInView = useInView(ref); // Removed triggerOnce option

  return (
    <Section className="px-4 relative">
      <Container>
        <Coolshape className="absolute top-10 left-10" size={100} color="rgba(255, 0, 0, 0.5)" />
        <Coolshape className="absolute top-20 right-20" size={150} color="rgba(0, 255, 0, 0.5)" />
        <Coolshape className="absolute bottom-10 left-20" size={120} color="rgba(0, 0, 255, 0.5)" />
        <Coolshape className="absolute bottom-20 right-10" size={80} color="rgba(255, 255, 0, 0.5)" />

        <div>
        <div className="flex justify-center">
          <AvatarCircles numPeople={100} avatarUrls={["https://avatar.vercel.sh/james", "https://avatar.vercel.sh/jill", "https://avatar.vercel.sh/john"]} className="mb-4" />
        </div>
        </div>
        <motion.div 
          ref={ref} // Attach the ref to the motion div
          className="pt-24 pb-24 flex flex-col items-center gap-6 rounded-lg p-6 text-center md:rounded-xl"
          initial={{ opacity: 0, y: 40 }} // Initial state
          animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate to this state when in view
          transition={{ duration: 0.5 }} // Animation duration
        >
          <h1 className="text-4xl font-bold text-center">انضم إلى عشرات الطلاب المتوفقين</h1>
          <h4 className="text-xl text-muted-foreground text-center z-30">
            <Balancer>
            فرصتك لتحقيق أعلى الدرجات تبدأ هنا
            </Balancer>
          </h4>
          <RainbowButton>
            <Link href="/all-courses">
              !سجل الآن
            </Link>
          </RainbowButton>
        </motion.div>
      </Container>
    </Section>
  );
};

export default CTA;
