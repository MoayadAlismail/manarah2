import { cn } from "@/lib/utils";
import Marquee from "@/app/components/ui/marquee";

const reviews = [
  {
    name: "محمد", // Jack
    username: "@jack",
    body: "طريقة الشرح والاشياء المضحكة في منتصف المحاضرة", 
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "نورة", // Jill
    username: "@jill",
    body: "تسلم ايدك على هذي الدورة الحلوة كانت خفيفة لطيفة ما قصرت فيها ابدا", 
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "علي", // John
    username: "@john",
    body: "شرح الاستاذ عثمان وتوضيحه لجميع استفساراتنا وإجابته على جميع الأسئلة المتعلقة بالدرس وأيضًا طريقة إيصال المعلومات",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "جوري", // Jane
    username: "@jane",
    body: "افضل شي ان الاستاذ عثمان ❤️‍🩹يعطينا شرح مبسط وجميل ويعطينا اسئله على الشرح حنا نجاوب عليها وهذا يخلينا نفهم القاعده اكثر", 
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "عبدالله", // Jenny
    username: "@jenny",
    body: "الشرح جميل جدا والمعلم الله يجزاه خير ماقصر وتضحك الرياكشنات الي يحطها بين كل صفحه",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "جاسم", // James
    username: "@james",
    body: "وضوح العرض / شرح مفصل و سهل", 
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "ديما", // James
    username: "@jenny",
    body: "التاسيس مره كان جميل وقدرت اخذ فكره عن كل موضوع والحمدلله ما قصر معنا الدكتور عثمان الله يعطيه العافيه", 
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "رند", 
    username: "@jill",
    body: "التنظيم والترتيب قبل الحصة ،، وتذكير الطلاب بموعد الحصة يومياً وشرح الاستاذ عثمان الله يعطيه الصحة والعافية.", 
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "خالد",
    username: "@jack",
    body: "استاذ رهيب شرحه ممتاز مايقصر والله الله يعطيه العافيه", 
    img: "https://avatar.vercel.sh/jack",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  // username,
  body,
}: {
  img: string;
  name: string;
  // username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          {/* <p className="text-xs font-medium dark:text-white/40">{username}</p> */}
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    // <main className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
    <main className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
        <h1 className="text-4xl font-bold pt-24 mb-12">آراء طلابنا</h1>
      <Marquee pauseOnHover className="[--duration:50s]">
        {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:50s]">
        {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </main>
  );
}
export default MarqueeDemo;