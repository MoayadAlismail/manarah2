import { Main, Section, Container } from "@/components/craft";
import Footer from "@/components/footer";
import CourseItem from "@/components/CourseItem";
import coursesData from "./courses.json";

export default function AllCourses() {
  return (
    <Main className="bg-white text-black font-alexandria">
      <Section className="py-12">
        <Container className="text-right">
          <h1 className="text-4xl font-bold mb-4 pt-24">عزز مستقبلك</h1>
          <p className="text-xl mb-8">انضم إلى دوراتنا التي يقودها خبراء للتفوق في الاختبارات الموحدة والقبول بالجامعات في المملكة العربية السعودية.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coursesData.courses.map((course) => (
              <CourseItem 
                key={course.slug}
                title={course.title}
                description={course.description}
                imageUrl={course.imageUrl}
                slug={course.slug}
              />
            ))}
          </div>
        </Container>
      </Section>
      <Footer />
    </Main>
  );
}