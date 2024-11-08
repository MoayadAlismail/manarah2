"use client";
import { useSearchParams, useRouter } from 'next/navigation';

const ConfirmationPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const slug = searchParams ? searchParams.get('slug') : null;
  const inviteLink = searchParams ? searchParams.get('inviteLink') : null;

  return (
    <div className="flex h-screen justify-center items-center bg-white">
      <div className="max-w-md p-8 border shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">شكراً لشرائك الدورة</h1>
        <p>تم إتمام عملية الدفع بنجاح لدورة: <strong>{slug}</strong></p>
        {inviteLink && (
          <div className="mt-6">
            <p>يمكنك الانضمام إلى المجموعة عبر الرابط:</p>
            <a
              href={inviteLink as string}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              اضغط هنا للانضمام
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfirmationPage;
