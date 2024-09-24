import { Main, Section, Container } from "@/app/components/craft";
import Footer from "@/app/components/footer";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";


const getCourseDetails = (slug: string) => {
  const courses = {
    "qudurat": {
      title: "Qudurat",
      price: 99.99,
    },
    "tahseeli": {
      title: "Tahseeli",
      price: 149.99,
    },
  };
  return courses[slug as keyof typeof courses];
};

export default function Checkout({ params }: { params: { slug: string } }) {
  const course = getCourseDetails(params.slug);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <Main className="bg-white text-black font-alexandria">
      <Section>
        <Container>
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Checkout</h1>
            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
              <p className="text-2xl font-bold">${course.price.toFixed(2)}</p>
            </div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">Full Name</label>
                <input type="text" id="name" className="w-full p-2 border rounded" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">Email</label>
                <input type="email" id="email" className="w-full p-2 border rounded" required />
              </div>
              <div>
                <label htmlFor="card" className="block mb-1">Card Number</label>
                <input type="text" id="card" className="w-full p-2 border rounded" required />
              </div>
              <Button type="submit" className="w-full">Complete Purchase</Button>
            </form>
            <div className="mt-4 text-center">
              <Link href={`/courses/${params.slug}`} className="text-blue-500 hover:underline">
                Back to course details
              </Link>
            </div>
          </div>
        </Container>
      </Section>
      <Footer />
    </Main>
  );
}