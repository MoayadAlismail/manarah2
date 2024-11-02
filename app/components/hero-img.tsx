"use client"
// React and Next.js imports
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { BookOpen } from "lucide-react";

// Local component imports
import { Section, Container } from "@/app/components/craft";
import { Button } from "@/app/components/ui/button";
import { BorderBeam } from "./ui/border-beam";
import { RainbowButton } from "@/app/components/ui/rainbow-button";

// Asset imports
import Logo from "@/public/logo.svg";
import BookCover from "@/public/images/book-cover.webp";

const HeroImg = () => {
    return (
<motion.div 
className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
initial={{ opacity: 0 }} 
animate={{ opacity: 1 }} 
transition={{ duration: 0.5, delay: 0.4 }}
>
<Image
  src="/Users/moayadalismail/Desktop/manarah2/active_speaker_view.png"
  alt=""
  width={1100}
  height={550}
  priority={true}
  className="not-prose h-full w-full object-cover object-bottom"
/>
<BorderBeam size={300} duration={14} delay={10} />
</motion.div>
);
}
export default HeroImg;