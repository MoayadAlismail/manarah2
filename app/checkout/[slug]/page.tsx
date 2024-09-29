"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { notFound } from 'next/navigation';
import coursesData from '../../all-courses/courses.json'; // Import the JSON data

interface CheckoutPageProps {
  params: {
    slug: string;
  };
}

const getCourseData = (slug: string) => {
  const course = coursesData.courses.find(course => course.slug === slug); // Find the course by slug
  if (course) {
    return {
      title: course.title,
      price: 999, // Price in cents (update as needed)
      imageUrl: course.imageUrl,
    };
  }
  return null; // Return null if course not found
};

const CheckoutForm = ({ courseData }: { courseData: { title: string; price: number } }) => {
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setProcessing(true);
    setError(null);

    try {
      const response = await fetch('/api/create-charge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: courseData.price,
          currency: 'SAR',
          description: `Payment for ${courseData.title}`,
        }),
      });

      if (!response.ok) {
        throw new Error('Payment failed');
      }

      const data = await response.json();
      console.log('Payment successful', data);
      // Redirect to success page or show success message
    } catch (err) {
      setError('فشلت عملية الدفع. يرجى المحاولة مرة أخرى.');
      console.error('Payment error:', err);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input className="text-right p-4 text-black" type="text" placeholder="الاسم الكامل" required />
      <Input className="text-right p-4 text-black" type="email" placeholder="البريد الإلكتروني" required />
      <Input className="text-right p-4 text-black" type="tel" placeholder="رقم الهاتف" required />
      {error && <div className="text-red-500 text-right">{error}</div>}
      <Button type="submit" disabled={processing} className="w-full">
        {processing ? 'جاري المعالجة...' : `ادفع ${courseData.price / 100} ريال`}
      </Button>
    </form>
  );
};

export default function CheckoutPage({ params }: CheckoutPageProps) {
  const { slug } = params;
  
  if (!slug) {
    notFound();
  }

  const courseData = getCourseData(slug);

  return (
    <div className="flex h-screen font-alexandria text-black">
      <div className="w-1/2 relative">
        <Image 
          src={courseData.imageUrl} 
          alt={courseData.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="w-1/2 bg-white p-12 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <h1 className="text-3xl font-bold mb-6 text-right">الدفع لدورة: {courseData.title}</h1>
          <CheckoutForm courseData={courseData} />
        </div>
      </div>
    </div>
  );
}