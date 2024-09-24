import { Main, Section, Container } from "@/app/components/craft";
import Footer from "@/app/components/footer";
import CourseItem from "@/app/components/CourseItem";
import { Button } from "@/app/components/ui/button";

const courses = [
  {
    title: "إتقان القدرات",
    description: "أطلق العنان لإمكاناتك وتفوق في اختبار القدرات مع دورتنا الشاملة.",
    imageUrl: "/images/1.png",
    slug: "qudurat-mastery",
  },
  {
    title: "التميز في التحصيلي",
    description: "ارفع درجاتك في التحصيلي وافتح أبواب أفضل الجامعات السعودية.",
    imageUrl: "/images/2.png",
    slug: "tahsili-excellence",
  },
  {
    title: "ورشة كتابة المقالات",
    description: "صمم مقالات مقنعة تجعل طلبك يتميز عن بقية المتقدمين.",
    imageUrl: "/images/3.png",
    slug: "essay-writing-workshop",
  },
  {
    title: "معسكر التقديم للجامعات",
    description: "تنقل بثقة وتوجيه خبير خلال عملية التقديم المعقدة.",
    imageUrl: "/images/4.png",
    slug: "application-bootcamp",
  },
];

export default function AllCourses() {
  return (
    <Main className="bg-white text-black font-alexandria">
      <Section className="py-12">
        <Container className="text-right">
          <h1 className="text-4xl font-bold mb-4 pt-24">عزز مستقبلك</h1>
          <p className="text-xl mb-8">انضم إلى دوراتنا التي يقودها خبراء للتفوق في الاختبارات الموحدة والقبول بالجامعات في المملكة العربية السعودية.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseItem key={course.slug} {...course} />
            ))}
          </div>
        </Container>
      </Section>
      <Footer />
    </Main>
  );
}