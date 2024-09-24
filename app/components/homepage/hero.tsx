// React and Next.js imports
import Link from "next/link";
import Image from "next/image";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { BookOpen } from "lucide-react";

// Local component imports
import { Section, Container } from "@/app/components/craft";
import { Button } from "@/app/components/ui/button";

// Asset imports
import Logo from "@/public/logo.svg";

const Hero = () => {
  return (
    <Section>
      <Container className="flex flex-col items-end text-right" dir="rtl">
        {/* <Image
          src={Logo}
          width={172}
          height={72}
          alt="شعار منصة التوجيه للقبول الجامعي"
          className="not-prose mb-6 dark:invert md:mb-8"
        /> */}
        <h1 className="text-5xl font-bold !mb-0 leading-relaxed">
          <Balancer>
            حقق حلمك في القبول بأفضل الجامعات العالمية
          </Balancer>
        </h1>
        <h3 className="text-xl text-muted-foreground mt-4">
          <Balancer>
            نساعدك في التفوق في اختبارات القدرات والتحصيلي وإعداد ملف قبول متميز
          </Balancer>
        </h3>
        <div className="not-prose mt-8 flex gap-4 md:mt-12">
          <Button asChild>
            <Link href="/all-courses">
              استكشف دوراتنا
              <BookOpen className="mr-2" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/about">اعرف أكثر</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
