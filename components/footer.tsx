// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// UI component imports
import { Button } from "@/components/ui/button";

// Icon imports
import { Instagram, Twitter, Phone } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";

// Asset imports
import Logo from "@/public/logo.png";

export default function Footer() {
  return (
    <footer className="text-right">
      <Section>
        <Container className="grid gap-12 md:grid-cols-[1.5fr_0.5fr_0.5fr]">
          <div className="not-prose flex flex-col gap-6">
            <Link href="/">
              <h3 className="sr-only">منصة منارة للإرشاد الطلابي</h3>
              <Image
                src={Logo}
                alt="الشعار"
                width={120}
                height={27.27}
                className="transition-all hover:opacity-75 dark:invert"
              ></Image>
            </Link>
            <p>
              <Balancer>
                منصة التوجيه للقبول الجامعي هي مجموعة من الدورات والخدمات المصممة لمساعدة الطلاب في التحضير للاختبارات الموحدة وعملية القبول في الجامعات السعودية.
              </Balancer>
            </p>
          </div>
          <div className="flex flex-col gap-2 text-right">
            <h5>الموقع</h5>
            <Link href="/">المدونة</Link>
            <Link href="/">المدربون</Link>
            <Link href="/">الفئات</Link>
          </div>
          <div className="flex flex-col gap-2 text-right">
            <h5>قانوني</h5>
            <Link href="/privacy-policy">سياسة الخصوصية</Link>
            <Link href="/terms-of-service">شروط الخدمة</Link>
          </div>
        </Container>
        <Container className="not-prose flex flex-col justify-between gap-6 border-t md:flex-row md:items-center md:gap-2">
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Instagram />
            </Button>
            <Button variant="outline" size="icon">
              <Twitter />
            </Button>
            <Button variant="outline" size="icon">
              <Phone />
            </Button>
          </div>
          <p className="text-muted-foreground text-right">
            © منصة منارة للإرشاد الطلابي. جميع الحقوق محفوظة. 2024.
          </p>
        </Container>
      </Section>
    </footer>
  );
}
