"use client"
// Layout
import { Section, Container } from "@/app/components/craft";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import { BookOpen, Laptop, MessagesSquare, Wallet, PencilLine, Clock8, Users, PenTool, GraduationCap, ArrowLeft } from "lucide-react";
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
    icon: <Laptop className="h-6 w-6" />,
    title: "دروس مباشرة",
    href: "/",
    description: "تقام الحصص بشكل مباشر عبر منصة زووم وبامكان التفاعل مع المدرب",
    cta: "اعرف أكثر"
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "مصادر تعلّم حصرية",
    href: "/",
    description:
      "تزوّدك الدورة بملفات وواجبات وتمارين تتماشى مع كل درس لضمان تعلّم فعال وسريع",
    cta: "اعرف أكثر",
  },
];

const featureText2: FeatureText[] = [
  {
    icon: <Wallet className="h-6 w-6" />,
    title: "سعر رهيب",
    href: "/",
    description: "تشمل 15 حصة للقسم اللفظي و15 حصة للقسم الكمي، جميعها باجمالي فقط 299 ريال",
    cta: "اعرف أكثر"
  },
  {
    icon: <Clock8 className="h-6 w-6" />,
    title: "تدريب مكثّف",
    href: "/",
    description:
      "تُقام الدورة على مدى 3 أسابيع ابتداءً من يوم الأحد 22 ديسمبر مع جلسة يوميًا خلال أيام الأسبوع من 7:30م حتى 10م تغطي قسمي الكمي واللفظي ",
    cta: "اعرف أكثر",
  },
];

const singleFeatureText: FeatureText[] = [
  {
    icon: <MessagesSquare className="h-6 w-6" />,
    title: "مجموعة خاصة",
    href: "/",
    description:
      "يستضاف جميع المشاركين في الدورة الى مجموعة تليجرام خاصة حيث يمكنهم تبادل الأفكار، طرح الأسئلة، ومناقشة الدروس",
    cta: "اعرف أكثر"
  },
];
const singleFeatureText2: FeatureText[] = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "مدربين محترفين",
    href: "/",
    description:
      'مدربي هذه الدورة هم نفسهم مؤلفي كتاب "المعاصر" للقدرات، مما يضمن لك الحصول على تعليم من مصادر موثوقة وخبرة لا مثيل لها.',
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
          <div className="my-4 w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24">
              <Coolshape type="wheel" index={1} noise={true} />
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
            {featureText2.map(
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
            {singleFeatureText2.map(
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

        </div>
      </Container>
    </Section>
  );
};

export default Feature;