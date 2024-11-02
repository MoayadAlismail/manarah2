// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// UI component imports
import { Button } from "@/app/components/ui/button";

// Icon imports
import { Instagram, Twitter, Phone } from "lucide-react";

// Local component imports
import { Section, Container } from "@/app/components/craft";

// Asset imports
import Logo from "@/public/logo.png";

export default function Footer() {
  return (
    <footer>
      <Section>
        <Container className="grid gap-6">
          <div className="not-prose flex flex-col gap-6">
            {/* <Link href="/">
              <h3 className="sr-only">brijr/components</h3>
              <Image
                src={Logo}
                alt="Logo"
                width={120}
                height={27.27}
                className="transition-all hover:opacity-75 dark:invert float-right"
              ></Image>
            </Link> */}
            {/* <p className="text-right">
              <Balancer>
              .منارة هذي مصدرك الأول للتقديم على الجامعات
              </Balancer>
            </p> */}
          </div>
          {/* <div className="mb-4 flex flex-col gap-4 md:mb-0 md:flex-row">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
          </div> */}
        </Container>
        <Container className="not-prose flex flex-col justify-between gap-6 border-t md:flex-row md:items-center md:gap-2">
          <p className="text-muted-foreground">
            جميع الحقوق محفوظة.
            ©{" "}
            منصة منارة ٢٠٢٤
          </p>
          <div className="flex gap-2">
            <Link href="https://instagram.com/ManarahKSA" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Instagram />
              </Button>
            </Link>
            <Link href="https://twitter.com/ManarahKSA" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Twitter />
              </Button>
            </Link>
            <Link href="https://wa.me/966594031391" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Phone />
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </footer>
  );
}
