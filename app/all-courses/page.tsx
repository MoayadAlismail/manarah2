import { Main, Section, Container } from "@/components/craft";
import Footer from "@/components/footer";
import CourseItem from "@/components/CourseItem";
import { Button } from "@/components/ui/button";

const courses = [
  {
    title: "Qudurat",
    description: "Learn from the man himself, Othman",
    imageUrl: "/images/web-dev.jpg",
    slug: "qudurat",
  },
  {
    title: "Tahseeli",
    description:  "Learn from the man himself, Othman",
    imageUrl: "/images/react.jpg",
    slug: "tahseeli",
  },
];

export default function AllCourses() {
  return (
    <Main className="bg-white text-black font-alexandria">
      <Section>
        <Container>
          <h1 className="text-3xl font-bold mb-6">All Courses</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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