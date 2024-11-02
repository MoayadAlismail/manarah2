"use client"
// Layout
import { Section, Container } from "@/app/components/craft";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import { BookOpen, Users, PenTool, GraduationCap, ArrowLeft } from "lucide-react";
import { Coolshape } from "coolshapes-react";

// Icons
import { Coins, ArrowRight } from "lucide-react";

type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
  href?: string;
  cta?: string;
};

const featureText: FeatureText[] = [
  {
    icon: <PenTool className="h-6 w-6" />,
    title: "دورات شاملة",
    href: "/holistic-courses",
    description: "دورات تدريبية شاملة تغطي جميع جوانب التعلم العملي.",
    cta: "اعرف أكثر"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "استشارة شخصية",
    href: "/book-session",
    description:
      "احصل على استشارة شخصية مع أفضل المعلمين لمساعدتك في تحقيق أهدافك.",
    cta: "اعرف أكثر",
  },
];

const singleFeatureText: FeatureText[] = [
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "تدريب عملي",
    href: "/all-courses",
    description:
      "تقدم هذه الدورة التعليمية تجربة عملية شاملة مع أفضل المعلمين.",
    cta: "اعرف أكثر"
  },
];

const Feature = () => {
  return (
    <Section>
      <Container className="not-prose">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl text-center font-bold z-30">
            <Balancer>
              مميزات الدورة
            </Balancer>
          </h3>
          <div className="absolute z-[0] ">
            <Coolshape className="my-4" type="wheel" index={1} noise={true} />
          </div>
          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-2 z-30">
            {featureText.map(
              ({ icon, title, description, href, cta }, index) => (
                <Link
                  href={`${href}`}
                  className="flex flex-col justify-between gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2 text-right"
                  key={index}
                >
                  <div className="grid gap-4">
                    <div className="flex justify-end">{icon}</div>
                    <h4 className="text-xl text-primary font-bold">{title}</h4>
                    <p className="text-base opacity-75">{description}</p>
                  </div>
                  {cta && (
                    <div className="flex h-fit items-center text-sm font-semibold justify-end">
                      {/* <ArrowLeft className="ml-2 h-4 w-4" /> */}
                      {/* <p>{cta}</p> */}
                    </div>
                  )}
                </Link>
              ),
            )}
          </div>

          <div>
            {singleFeatureText.map(
              ({ icon, title, description, href, cta }, index) => (
                <Link
                  href={`${href}`}
                  className="flex flex-col justify-between gap-6 rounded-lg border bg-muted/25 p-6 transition-all hover:-mt-2 hover:mb-2 text-right bg-white"
                  key={index}
                >
                  <div className="grid gap-4">
                    <div className="flex justify-end">{icon}</div>
                    <h4 className="text-xl text-primary font-bold">{title}</h4>
                    <p className="text-base opacity-75">{description}</p>
                  </div>
                  {cta && (
                    <div className="flex h-fit items-center text-sm font-semibold justify-end">
                      {/* <ArrowLeft className="ml-2 h-4 w-4" /> */}
                      {/* <p>{cta}</p> */}
                    </div>
                  )}
                </Link>
              ),
            )}
          </div>

          <div className="grid gap-6 md:grid-cols-2 z-30">
            {featureText.map(
              ({ icon, title, description, href, cta }, index) => (
                <Link
                  href={`${href}`}
                  className="flex flex-col justify-between gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2 text-right"
                  key={index}
                >
                  <div className="grid gap-4">
                    <div className="flex justify-end">{icon}</div>
                    <h4 className="text-xl text-primary font-bold">{title}</h4>
                    <p className="text-base opacity-75">{description}</p>
                  </div>
                  {cta && (
                    <div className="flex h-fit items-center text-sm font-semibold justify-end">
                      {/* <ArrowLeft className="ml-2 h-4 w-4" /> */}
                      {/* <p>{cta}</p> */}
                    </div>
                  )}
                </Link>
              ),
            )}
          </div>

        </div>
      </Container>
    </Section>
  );
};

export default Feature;