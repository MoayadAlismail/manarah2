import { Main, Section, Container } from "@/app/components/craft";
import Footer from "@/app/components/footer";
import Link from "next/link";
import Image from "next/image";
import { notFound } from 'next/navigation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion";
import { RainbowButton } from "@/app/components/ui/rainbow-button";
import coursesData from "@/app/all-courses/courses.json";
import FAQ from "@/app/components/faq";

interface CoursePageProps {
  params: {
    slug: string;
  };
}

const getCourseData = (slug: string) => {
  return coursesData.courses.find(course => course.slug === slug);
};

export default function CoursePage({ params }: CoursePageProps) {
  const { slug } = params;
  
  if (!slug) {
    notFound();
  }

  const courseData = getCourseData(slug);

  if (!courseData) {
    notFound();
  }

  return (
    <Main className="bg-white text-black text-right font-alexandria text-right">
      <Section className="relative h-[400px]">
        <Image 
          src={courseData.imageUrl} 
          alt={courseData.title} 
          layout="fill" 
          objectFit="cover" 
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">{courseData.title}</h1>
        </div>
      </Section>

      <Section>
        <Container className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">تفاصيل الدورة</h3>
                <p className="mb-2"><strong>المدرس:</strong> {courseData.instructor || "غير محدد"}</p>
                <p className="mb-6"><strong>المدة:</strong> {courseData.duration || "غير محددة"}</p>
                <Link href={`/checkout/${encodeURIComponent(slug)}`}>
                <RainbowButton>
                  سجل الآن
                </RainbowButton>
                </Link>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">وصف الدورة</h2>
              <p className="mb-8 text-black-700">{courseData.description}</p>

              {courseData.features && courseData.features.length > 0 && (
                <>
                  <h2 className="text-2xl font-bold mb-4">مميزات الدورة</h2>
                  <ul className="list-disc list-inside mb-8 text-700">
                    {courseData.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </>
              )}

              {/* {courseData.faq && courseData.faq.length > 0 && (
                <>
                  <h2 className="text-2xl font-bold mb-4">الأسئلة الشائعة</h2>
                  <Accordion type="single" collapsible className="mb-8">
                    {courseData.faq.map((item, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-right font-semibold">{item.question}</AccordionTrigger>
                        <AccordionContent className="text-black-700">{item.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </>
              )} */}
            </div>
          </div>
        </Container>
      </Section>
      <FAQ />
      <Footer />
    </Main>
  );
}