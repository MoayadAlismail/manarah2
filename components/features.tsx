// Layout
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import { BookOpen, Users, PenTool, GraduationCap, ArrowLeft } from "lucide-react";

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
    title: "تحرير المقالات",
    href: "/essay-editing",
    description: "ورش عمل تفاعلية لتحسين مهارات كتابة المقالات الجامعية.",
    cta: "اعرف أكثر"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "استشارة شخصية",
    href: "/book-session",
    description:
      "احصل على استشارة شخصية مع أحد خبرائنا لمساعدتك في تحقيق أهدافك.",
    cta: "اعرف أكثر",
  },
];

const singleFeatureText: FeatureText[] = [
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "دورات تدريبية",
    href: "/all-courses",
    description:
      "تقدم هذه الدورة التعليمية معلومات شاملة حول الموضوعات الأساسية في مجالنا.",
    cta: "اعرف أكثر"
  },
];

const Feature = () => {
  return (
    <Section>
      <Container className="not-prose">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl text-right font-bold">
            <Balancer>
              مميزاتنا
            </Balancer>
          </h3>
          <h4 className="text-xl text-muted-foreground text-right">
            <Balancer>
              انضم إلى دوراتنا المتخصصة وورش العمل لتعزيز فرصك في القبول بأفضل الجامعات
            </Balancer>
          </h4>

          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-2">
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
                      <ArrowLeft className="ml-2 h-4 w-4" />
                      <p>{cta}</p>
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
                      <ArrowLeft className="ml-2 h-4 w-4" />
                      <p>{cta}</p>
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