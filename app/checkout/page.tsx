"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { notFound } from "next/navigation";
import coursesData from "../all-courses/courses.json"; // Import the JSON data
import { useRouter } from "next/navigation";
import { GridPattern } from "@/app/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Coolshape } from "coolshapes-react";

interface CheckoutPageProps {
  // Remove the params interface since we no longer need it
}

const getCourseData = () => {  // Remove slug parameter
  return {
    title: "إتقان القدرات",
    price: 249,
    imageUrl: "/path/to/your/course/image.jpg",
  };
};

const CheckoutForm = ({
  courseData,
}: {
  courseData: { title: string; price: number };
  // Remove slug parameter
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
      router.push(`/checkout/confirmation?inviteLink=${inviteData.inviteLink}`);

    } catch (err) {
      setError("فشلت عملية الدفع. يرجى المحاولة مرة أخرى.");
      console.error("Payment error:", err);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        className="text-right h-12 text-lg bg-gray-50/50 border-gray-200 rounded-lg transition-colors focus:bg-white"
        type="text"
        placeholder="الاسم الكامل"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Input
        className="text-right h-12 text-lg bg-gray-50/50 border-gray-200 rounded-lg transition-colors focus:bg-white"
        type="email"
        placeholder="البريد الإلكتروني"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        className="text-right h-12 text-lg bg-gray-50/50 border-gray-200 rounded-lg transition-colors focus:bg-white"
        type="tel"
        placeholder="رقم الهاتف"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      {error && (
        <div className="text-red-500 text-right bg-red-50 p-3 rounded-lg border border-red-100">
          {error}
        </div>
      )}
      <div className="space-y-4">
        <Button 
          type="submit" 
          disabled={processing} 
          className="w-full h-12 text-lg font-semibold transition-transform hover:scale-[0.98] active:scale-[0.97]"
        >
          {processing ? "جاري المعالجة..." : `ادفع ${courseData.price} ريال`}
        </Button>
        {/* <Link href={`/courses/${slug}`} className="block">
          <Button 
            type="button" 
            variant="outline" 
            className="w-full h-12 text-lg font-semibold"
          >
            <ArrowLeft className="ml-2 h-5 w-5" />
            العودة
          </Button>
        </Link> */}
      </div>
    </form>
  );
};

export default function CheckoutPage() {  // Remove props parameter
  const courseData = getCourseData();  // Remove slug argument

  return (
    <div className="flex min-h-screen font-alexandria text-black relative overflow-hidden bg-white">
      <GridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
          "absolute inset-0 z-0"
        )}
      />
      
      {/* Cool Shapes - Left Side */}
      <div className="absolute top-[10%] left-[15%] w-16 h-16 md:w-32 md:h-32">
        <Coolshape size={75} color="rgba(255, 0, 0, 0.15)" />
      </div>
      <div className="absolute top-[40%] left-[25%] w-20 h-20 md:w-40 md:h-40">
        <Coolshape size={100} color="rgba(0, 255, 0, 0.15)" />
      </div>
      <div className="absolute bottom-[20%] left-[10%] w-24 h-24 md:w-48 md:h-48">
        <Coolshape size={120} color="rgba(0, 0, 255, 0.15)" />
      </div>
      
      {/* Cool Shapes - Right Side */}
      <div className="absolute top-[15%] right-[10%] w-12 h-12 md:w-24 md:h-24">
        <Coolshape size={50} color="rgba(255, 255, 0, 0.15)" />
      </div>
      <div className="absolute bottom-[30%] right-[20%] w-16 h-16 md:w-32 md:h-32">
        <Coolshape size={75} color="rgba(255, 0, 255, 0.15)" />
      </div>

      <div className="w-full max-w-md mx-auto p-8 md:p-12 flex flex-col justify-center relative z-10">
        <div className="w-full bg-white/80 backdrop-blur-sm rounded-xl border shadow-lg p-8">
          <div className="mb-8 space-y-2">
            <h1 className="text-3xl font-bold text-center leading-relaxed">
              التسجيل في دورة تأسيس القدرات
            </h1>
          </div>
          <CheckoutForm 
            courseData={courseData || { title: "", price: 0 }} 
          />
        </div>
      </div>
    </div>
  );
}