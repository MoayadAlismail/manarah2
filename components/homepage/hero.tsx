// React and Next.js imports
import Link from "next/link";
import Image from "next/image";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { BookOpen } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";

// Asset imports
import Logo from "@/public/logo.svg";

const Hero = () => {
  return (
    <Section>
      <Container className="flex flex-col items-center text-center">
        <Image
          src={Logo}
          width={172}
          height={72}
          alt="Company Logo"
          className="not-prose mb-6 dark:invert md:mb-8"
        />
        <h1 className="!mb-0">
          <Balancer>
            Explore Our Comprehensive Course Catalog
          </Balancer>
        </h1>
        <h3 className="text-muted-foreground">
          <Balancer>
            Discover a wide range of courses to enhance your skills and knowledge.
          </Balancer>
        </h3>
        <div className="not-prose mt-6 flex gap-2 md:mt-12">
          <Button asChild>
            <Link href="/all-courses">
              <BookOpen className="mr-2" />
              View All Courses
            </Link>
          </Button>
          <Button variant={"ghost"} asChild>
            <Link href="/posts">Learn More -{">"}</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
