import { Main, Section, Container } from "@/app/components/craft";
import Hero from "@/app/components/homepage/hero";
import Feature from "@/app/components/features";
import FAQ from "@/app/components/faq";
import Footer from "@/app/components/footer";

export default function Home() {
  return (
    <Main className="bg-white text-black font-alexandria">
      <Section>
        <Container>
          <Hero />
          <Feature />
          <FAQ />
        </Container>
      </Section>
      <Footer />
    </Main>
  );
}
