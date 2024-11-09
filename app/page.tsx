import { Main, Section, Container } from "@/app/components/craft";
import Hero from "@/app/components/hero";
import Feature from "@/app/components/features";
import Footer from "@/app/components/footer";
import GridPattern from "@/app/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import Testimonials from "@/app/components/testimonials";
import Countdown from "@/app/components/countdown";
import FAQ from "@/app/components/faq";
import FinalCTA from "@/app/components/final-cta";
import HeroImg from "@/app/components/hero-img";
// import {ManyFeatures} from "@/app/components/many-features";


export default function Home() {
  return (
    <Main className="bg-white text-black font-alexandria relative overflow-hidden">
      <Section id="home">
        <Container>
          <GridPattern
              numSquares={30}
              maxOpacity={0.1}
              duration={3}
              repeatDelay={1}
              className={cn(
                "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
                "inset-x-0 inset-y-[-30%] h-[100%] w-[100%] skew-y-12",
              )}
              />
          {/* <Countdown/> */}
          <Hero/>
        </Container>
      </Section>

      <Section id="features">
        <Container>
          <Feature/>
        </Container>
      </Section>
      
      <Section>
        <Container>
          <HeroImg/>
        </Container>
      </Section>

      <Section id="testimonials">
        <Container>
          <Testimonials />
        </Container>
      </Section>
      
      <Section id="faq">
        <Container>
          <FAQ/>
        </Container>
      </Section>
      
      <Section id="final">
        <Container>
      <FinalCTA/>
      </Container>
      </Section>
      {/* <ManyFeatures/> */}
      <Footer />
    </Main>
  );
}
