import { Main, Section, Container } from "@/components/craft";
import Hero from "@/components/homepage/hero";
import Feature from "@/components/features";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";

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
