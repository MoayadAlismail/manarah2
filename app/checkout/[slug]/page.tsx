"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { notFound } from "next/navigation";
import coursesData from "../../all-courses/courses.json"; // Import the JSON data
import { useRouter } from "next/navigation";

interface CheckoutPageProps {
  params: {
    slug: string;
  };
}

const getCourseData = (slug: string) => {
  const course = coursesData.courses.find((course) => course.slug === slug); // Find the course by slug
  if (course) {
    return {
      title: course.title,
      price: 999, // Price in cents (update as needed)
      imageUrl: course.imageUrl,
    };
  }
  return null; // Return null if course not found
};

const CheckoutForm = ({
  courseData,
  slug,
}: {
  courseData: { title: string; price: number };
  slug: string;
}) => {
  const router = useRouter();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  /**
   * Handle form submission
   * 1. Send payment request to create a charge
   * 2. If payment is successful, add user to database and get Telegram invite link
   *
   * @param event Form submission event
   * @TODO Display Invite Link
   */
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setProcessing(true);
    setError(null);

    try {
      // const response = await fetch("/api/create-charge", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     amount: courseData.price,
      //     currency: "SAR",
      //     description: `Payment for ${courseData.title}`,
      //   }),
      // });

      // if (!response.ok) {
      //   throw new Error("Payment failed");
      // }

      // const data = await response.json();
      // console.log("Payment successful", data);

      // Add user to database and get Telegram invite link
      const inviteResponse = await fetch(
        "https://sendinvitelink-dytv2ac5zq-ew.a.run.app/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // Send user data
          body: JSON.stringify({
            name: name,
            email: email,
            phone: phone,
          }),
        }
      );

      if (!inviteResponse.ok) {
        throw new Error("Failed to get invite link");
      }

      // Get the invite link
      const inviteData = await inviteResponse.json();

      console.log("Telegram Invite Link generated: ", inviteData);

      // Redirect to the confirmation page with invite link as a query parameter
      router.push(`/checkout/${slug}/confirmation?inviteLink=${inviteData.inviteLink}`);

    } catch (err) {
      setError("فشلت عملية الدفع. يرجى المحاولة مرة أخرى.");
      console.error("Payment error:", err);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        className="text-right p-4 text-black"
        type="text"
        placeholder="الاسم الكامل"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Input
        className="text-right p-4 text-black"
        type="email"
        placeholder="البريد الإلكتروني"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        className="text-right p-4 text-black"
        type="tel"
        placeholder="رقم الهاتف"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      {error && <div className="text-red-500 text-right">{error}</div>}
      <Button type="submit" disabled={processing} className="w-full">
        {processing
          ? "جاري المعالجة..."
          : `ادفع ${courseData.price / 100} ريال`}
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
          src={courseData?.imageUrl || "/path/to/default/1.jpg"}
          alt={courseData?.title || "Default Title"}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="w-1/2 bg-white p-12 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <h1 className="text-3xl font-bold mb-6 text-right">
            الدفع لدورة: {courseData?.title}
          </h1>
          <CheckoutForm courseData={courseData || { title: "", price: 0 }} slug={slug} />
        </div>
      </div>
    </div>
  );
}
