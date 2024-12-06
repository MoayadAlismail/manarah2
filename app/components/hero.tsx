"use client";
// React and Next.js imports
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { ArrowDown } from "lucide-react";

// Local component imports
import { Section, Container } from "@/app/components/craft";
import { BorderBeam } from "./ui/border-beam";
import { RainbowButton } from "@/app/components/ui/rainbow-button";

// Asset imports
import Logo from "@/public/logo.svg";
import BookCover from "@/public/images/book-cover.webp";

// Import the CoolShapes component
import { Coolshape } from "coolshapes-react";
import { useEffect, useState } from "react";

const Hero = () => {
    // states for shape sizes
    const [shapeSizes, setShapeSizes] = useState({
      star: 40,
      moon: 30,
      misc: 35,
      ellipse: 25,
    });
  
    // adjust shape sizes based on screen width
    useEffect(() => {
      const updateShapeSizes = () => {
        const width = window.innerWidth;
        if (width >= 1024) {
          setShapeSizes({ star: 180, moon: 160, misc: 150, ellipse: 130 });
        } else if (width >= 768) {
          setShapeSizes({ star: 120, moon: 100, misc: 90, ellipse: 80 });
        } else {
          setShapeSizes({ star: 80, moon: 70, misc: 75, ellipse: 65 });
        }
      };
  
      updateShapeSizes();
      window.addEventListener("resize", updateShapeSizes);
  
      // cleanup listener
      return () => window.removeEventListener("resize", updateShapeSizes);
    }, []);
    
  return (
    <Section>
      <Container className="z-50 flex-center flex-col items-end text-center mt-24 mb-12">
        <motion.h1
          className="z-50 text-5xl font-bold !mb-0 leading-relaxed"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* <Balancer> */}
            {/* حقق حلمك في القبول بأفضل الجامعات العالمية */}
            {/* !اختبار القدرات صار أسهل */}
          {/* </Balancer> */}
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-500/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 leading-[1.2] py-4">
        اختبار القدرات صار أسهل
        </span>
        </motion.h1>
        <motion.h3
          className="text-xl text-muted-foreground mt-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Balancer>
            {/* نساعدك في التفوق في اختبارات القدرات والتحصيلي وإعداد ملف قبول متميز */}
            حلمك لتحقيق الـ 100 في القدرات يبدأ هنا
          </Balancer>
        </motion.h3>
        <div className="mt-8 flex justify-center gap-4 md:mt-12">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
          {/* <Link href="/checkout/qudurat">
          <RainbowButton 
            className="mt-8 h-12 px-8 text-lg"
          >
            سجل الآن
          </RainbowButton> */}
        {/* </Link> */}
            <Link href="/#final">
              <motion.button
                className="mt-8 flex text-muted-foreground items-center gap-2"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  animate={{ translateY: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowDown />
                </motion.div>
                اعرف أكثر 
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Sorrounding them with <div>'s here because size is not an intrinsic 
            attribute of the cool shapes*/}
        <div className="absolute top-20 left-10 z-10">
          <Coolshape type="star" index={7} size={shapeSizes.star} />
        </div>
        <div className="absolute top-10 right-20 z-20">
          <Coolshape type="moon" index={13} size={shapeSizes.moon} />
        </div>
        <div className="absolute inset-center z-30">
          <Coolshape type="misc" index={7} size={shapeSizes.misc} />
        </div>
        <div className="absolute bottom-50 right-40 z-40">
          <Coolshape type="ellipse" index={1} size={shapeSizes.ellipse} />
        </div>


      </Container>
    </Section>
  );
};

export default Hero;
