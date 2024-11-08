// React and Next.js imports
import React from "react";

// Third-party library imports
import { ArrowUpRight } from "lucide-react";

// UI component imports
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

// Custom components
import { Section, Container } from "@/app/components/craft";

type FAQItem = {
  question: string;
  answer: string;
  link?: string;
};

const content: FAQItem[] = [
  {
    question: "ما الذي تتضمنه دورة الإعداد لاختبار القدرات؟ 🎓",
    answer:
      "تقدم دورتنا محتوى شاملاً يغطي جميع المواضيع الأساسية في القسمين اللفظي والكمي، بالإضافة إلى اختبارات تجريبية واستراتيجيات لحل الأسئلة.",
  },
  {
    question: "ما مدة الدورة وكم يجب أن أخصص من الوقت؟ ⏰",
    answer:
      "يمكنك التسجيل بسهولة من خلال موقعنا الإلكتروني. ما عليك سوى اختيار الدورة المناسبة لك والنقر على زر 'التسجيل الآن'. ستجد تعليمات مفصلة لإكمال عملية التسجيل.",
  },
  {
    question: "هل سأحصل على مواد دراسية؟ 📖",
    answer:
      "نعم، نوفر كتيبات دراسة شاملة، أسئلة تدريبية، واختبارات تجريبية لتعزيز التعلم.",
  },
  {
    question: "هل هذه الدورة مناسبة للمبتدئين؟ ✅",
    answer:
      "بالتأكيد! الدورة مصممة لجميع المستويات، مع التركيز على بناء أساس قوي والتقدم بشكل تدريجي.",
  },
  {
    question: "هل توفرون اختبار تجريبي مشابه لاختبار القدرات الفعلي؟🎯",
    answer:
      "نعم، نقدم اختبارات تجريبية كاملة تحاكي تجربة الاختبار الفعلي مع شرح الإجابات.",
  },
  {
    question: "هل الدورة متاحة عبر الإنترنت؟ 💻",
    answer:
      "نعم، جميع الدروس والمواد متاحة عبر الإنترنت لتتمكن من الدراسة في أي وقت ومن أي مكان.",
  },
  {
    question: "ماذا لو كان لدي أسئلة خلال الدورة؟ 💬",
    answer:
      "يمكنك التواصل مع مدربينا عبر البريد الإلكتروني أو الدردشة، ونقدم أيضًا جلسات أسئلة وأجوبة منتظمة للطلاب.",
  },
  {
    question: "ما الدرجة التي يمكنني توقعها بعد إكمال الدورة؟ ⭐",
    answer:
      "على الرغم من أن النتائج تختلف، إلا أن دورتنا مصممة لتعزيز إمكاناتك لأقصى حد، والعديد من طلابنا يحققون درجات ٩٨ فما فوق.",
  },
  {
    question: "ما هي سياسة استرداد الأموال الخاصة بكم؟ 💰",
    answer:
      "نحن نقدم استردادًا كاملاً للأموال إذا قمت بإلغاء التسجيل قبل أسبوع من بدء الدورة. إذا كنت غير راضٍ عن الدورة بعد حضور أول جلستين، فيمكنك طلب استرداد جزئي. يرجى مراجعة شروط الخدمة للحصول على تفاصيل كاملة.",
  },
];

const FAQ = () => {
  return (
    <Section>
      <Container>
        <h1 className="text-4xl font-bold mb-4 text-center">الأسئلة الشائعة</h1>
        <h4 className="text-muted-foreground text-center" dir="rtl">
          لم تجد الإجابة التي تبحث عنها؟ تواصل مع فريق دعم العملاء لدينا.
        </h4>
        <div className="not-prose flex flex-col gap-4 mt-12 mb-24" dir="rtl">
          {content.map((item, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem
                value={item.question}
                className="rounded-md border bg-muted/20 px-4 transition-all hover:bg-muted/50"
              >
                <AccordionTrigger className="flex items-center justify-between text-right hover:no-underline">
                  <span>{item.question}</span>
                  <div className="ml-2"> {/* Added margin to the left of the arrow */} </div>
                </AccordionTrigger>
                <AccordionContent className="text-base md:w-3/4 text-right">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default FAQ;
