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
} from "@/components/ui/accordion";

// Custom components
import { Section, Container } from "@/components/craft";

type FAQItem = {
  question: string;
  answer: string;
  link?: string;
};

const content: FAQItem[] = [
  {
    question: "ما هي الاختبارات التي تغطيها دوراتكم؟ 🎓",
    answer:
      "دوراتنا تغطي اختباري القدرات والتحصيلي، وهما الاختباران الرئيسيان للقبول في الجامعات السعودية. نقدم تدريبًا شاملاً ومكثفًا لكلا الاختبارين.",
    link: "https://example.com/courses",
  },
  {
    question: "كيف يمكنني التسجيل في إحدى الدورات؟ 📝",
    answer:
      "يمكنك التسجيل بسهولة من خلال موقعنا الإلكتروني. ما عليك سوى اختيار الدورة المناسبة لك والنقر على زر 'التسجيل الآن'. ستجد تعليمات مفصلة لإكمال عملية التسجيل.",
  },
  {
    question: "هل تقدمون جلسات توجيه فردية؟ 👥",
    answer:
      "نعم، نحن نخطط لتقديم جلسات توجيه فردية في المستقبل القريب. هذه الجلسات ستتيح لك فرصة العمل مباشرة مع خبراء القبول لتلبية احتياجاتك الخاصة.",
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
