import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/app/components/ui/button";

interface CourseItemProps {
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
}

export default function CourseItem({ title, description, imageUrl, slug }: CourseItemProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md flex flex-col">
      <Image src={imageUrl} alt={title} width={300} height={200} className="w-full object-cover h-48" />
      <div className="p-4 flex-grow">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
      <div className="p-4 flex justify-between">
        <Button variant="outline" asChild>
          <Link href={`/courses/${slug}`}>Learn More</Link>
        </Button>
        <Button asChild>
          <Link href={`/checkout/${slug}`}>Enroll Now</Link>
        </Button>
      </div>
    </div>
  );
}