import { Main, Section, Container } from "@/components/craft";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const getCourseDetails = (slug: string) => {
  const courses = {
    "qudurat": {
      title: "Qudurat",
      description: "Learn from the best.",
      imageUrl: "/images/qudurat.jpg",
      fullDescription: "This comprehensive course covers the fundamentals of web development, including HTML structure, CSS styling, and JavaScript interactivity. Perfect for beginners looking to start their web development journey.",
      duration: "8 weeks",
      level: "Beginner",
    },
    "tahseeli": {
      title: "Tahseeli",
      description: "Master tahseeli.",
      imageUrl: "/images/tahseeli.jpg",
      fullDescription: "Take your React skills to the next level with this advanced course. Learn about hooks, context, performance optimization, and more. Ideal for developers with React experience looking to deepen their knowledge.",
      duration: "10 weeks",
      level: "Advanced",
    },
  };
  return courses[slug as keyof typeof courses];
};

export default function CourseDetails({ params }: { params: { slug: string } }) {
  const course = getCourseDetails(params.slug);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <Main className="bg-white text-black font-alexandria">
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto">
            <Image src={course.imageUrl} alt={course.title} width={800} height={400} className="w-full object-cover h-64 rounded-lg mb-6" />
            <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
            <p className="text-gray-600 mb-6">{course.fullDescription}</p>
            <div className="mb-6">
              <p><strong>Duration:</strong> {course.duration}</p>
              <p><strong>Level:</strong> {course.level}</p>
            </div>
            <Button asChild>
              <Link href={`/checkout/${params.slug}`}>Enroll Now</Link>
            </Button>
          </div>
        </Container>
      </Section>
      <Footer />
    </Main>
  );
}