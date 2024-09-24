import { Main, Section, Container } from "@/app/components/craft";
import Footer from "@/app/components/footer";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const getCourseDetails = (slug: string) => {
  const courses = {
    "qudurat": {
      title: "القدرات",
      description: "تعلم من الأفضل.",
      imageUrl: "/images/3.jpg",
      fullDescription: "تغطي هذه الدورة الشاملة أساسيات اختبار القدرات، بما في ذلك الجزء اللفظي والكمي. مثالية للطلاب الذين يستعدون لاختبار القدرات للقبول في الجامعات السعودية.",
      duration: "8 أسابيع",
      level: "مبتدئ",
    },
    "tahseeli": {
      title: "التحصيلي",
      description: "أتقن التحصيلي.",
      imageUrl: "/images/2.jpg",
      fullDescription: "ارفع مستوى مهاراتك في اختبار التحصيلي مع هذه الدورة المتقدمة. تعلم عن المفاهيم الأساسية، وحل المشكلات، وتقنيات الاختبار. مثالية للطلاب الذين يسعون للحصول على درجات عالية في التحصيلي.",
      duration: "10 أسابيع",
      level: "متقدم",
    },
  };
  return courses[slug as keyof typeof courses];
};

export default function CourseDetails({ params }: { params: { slug: string } }) {
  const course = getCourseDetails(params.slug);

  if (!course) {
    return <div>لم يتم العثور على الدورة</div>;
  }

  return (
    <Main className="bg-white text-black font-alexandria" dir="rtl">
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto">
            <Image src={course.imageUrl} alt={course.title} width={800} height={400} className="w-full object-cover h-64 rounded-lg mb-6" />
            <h1 className="text-3xl font-bold mb-4 text-right">{course.title}</h1>
            <p className="text-gray-600 mb-6 text-right">{course.fullDescription}</p>
            <div className="mb-6 text-right">
              <p><strong>المدة:</strong> {course.duration}</p>
              <p><strong>المستوى:</strong> {course.level}</p>
            </div>
            <div className="text-right">
              <Button asChild>
                <Link href={`/checkout/${params.slug}`}>سجل الآن</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
      <Footer />
    </Main>
  );
}