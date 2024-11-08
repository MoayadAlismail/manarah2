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

const Hero = () => {
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
            حلمك لتحقيق الـ ١٠٠ في القدرات يبدأ هنا
          </Balancer>
        </motion.h3>
        <div className="mt-8 flex justify-center gap-4 md:mt-12">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Link href={`/courses/${encodeURIComponent("qudurat")}`} passHref>
              <motion.button
                className="mt-8 flex text-muted-foreground items-center gap-2"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  animate={{ translateY: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <ArrowDown />
                </motion.div>
                اعرف أكثر 
              </motion.button>
            </Link>
          </motion.div>
        </div>

        <Coolshape
          className="absolute top-20 left-10 z-10"
          type="star"
          index={7}
          size={220}
        />
        <Coolshape
          className="absolute top-10 right-20 z-20"
          type="moon"
          index={13}
          size={180}
        />
        <Coolshape
          className="absolute center-50 z-30"
          type="misc"
          index={7}
          size={200}
        />
        <Coolshape
          className="absolute center-10 right-40 z-40"
          type="ellipse"
          index={1}
          size={150}
        />
      </Container>
    </Section>
  );
};

export default Hero;
