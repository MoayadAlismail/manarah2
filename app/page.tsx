import { Main, Section, Container } from "@/components/craft";
import Hero from "@/components/hero";
import Feature from "@/components/features";
import Footer from "@/components/footer";
import GridPattern from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <Main className="bg-white text-black font-alexandria">
      <Section>
        <Container>
      <GridPattern
              numSquares={30}
              maxOpacity={0.1}
              duration={3}
              repeatDelay={1}
              className={cn(
                "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
                "inset-x-0 inset-y-[-30%] h-[100%] w-[100%] skew-y-12",
              )}
            />
          <Hero />
          <Feature/>
          <Testimonials />
        </Container>
      </Section>
      <Footer />
    </Main>
  );
}
