"use client";
import { useSearchParams, useRouter } from 'next/navigation';
import { GridPattern } from "@/app/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { Button } from "@/app/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Confetti from "@/app/components/ui/confetti";
import { useEffect, useRef } from "react";
import type { ConfettiRef } from "@/app/components/ui/confetti";
import { Coolshape } from "coolshapes-react";

const ConfirmationPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const confettiRef = useRef<ConfettiRef>(null);

  const slug = searchParams ? searchParams.get('slug') : null;
  const inviteLink = searchParams ? searchParams.get('inviteLink') : null;

  // Fire confetti when the component mounts
  useEffect(() => {
    setTimeout(() => {
      confettiRef.current?.fire({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 500);
  }, []);

  return (
    <div className="flex min-h-screen justify-center items-center bg-white relative font-alexandria overflow-hidden">
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
      
      <div className="absolute top-[10%] left-[15%] w-12 h-12 md:w-24 md:h-24">
        <Coolshape size={50} color="rgba(255, 0, 0, 0.15)" />
      </div>
      <div className="absolute top-[20%] right-[20%] w-16 h-16 md:w-32 md:h-32">
        <Coolshape size={75} color="rgba(0, 255, 0, 0.15)" />
      </div>
      <div className="absolute bottom-[15%] left-[25%] w-14 h-14 md:w-28 md:h-28">
        <Coolshape size={60} color="rgba(0, 0, 255, 0.15)" />
      </div>
      <div className="absolute bottom-[25%] right-[15%] w-10 h-10 md:w-20 md:h-20">
        <Coolshape size={40} color="rgba(255, 255, 0, 0.15)" />
      </div>
      
      <div className="flex flex-col items-center space-y-6 relative z-20">
        <div className="max-w-md p-8 bg-white/80 backdrop-blur-sm rounded-xl border shadow-lg">
          <div className="space-y-6 text-black">
            <h1 className="text-3xl font-bold mb-4 text-center underline">!مبروك</h1>
            
            {inviteLink && (
              <div className="mt-6 space-y-4">
                <p className="text-lg text-center">بإمكانك الآن الانضمام إلى مجموعة التلقرام الخاصة بطلاب الدورة </p>
                <Button 
                  className="w-full h-12 text-lg"
                  asChild
                  onClick={() => {
                    confettiRef.current?.fire({
                      particleCount: 50,
                      spread: 45,
                      origin: { y: 0.7 }
                    });
                  }}
                >
                  <a
                    href={inviteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    انضم للمجموعة
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>

        <Link href="/" className="relative z-20">
          <Button 
            variant="link" 
            className="text-gray-600 hover:text-gray-900 text-lg font-normal flex items-center gap-2"
          >
            <ArrowRight className="h-5 w-5 rotate-180" />
            العودة للرئيسية
          </Button>
        </Link>
      </div>

      <Confetti
        ref={confettiRef}
        className="absolute left-0 top-0 z-10 w-full h-full"
        manualstart={true}
      />
    </div>
  );
};

export default ConfirmationPage;
