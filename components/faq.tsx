import { Section, Container } from "@/app/components/craft";
import { ArrowUpLeft } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

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
      <Container className="text-right" dir="rtl">
        <h3 className="!mt-0">الأسئلة الشائعة</h3>
        <h4 className="text-muted-foreground">
          لم تجد الإجابة التي تبحث عنها؟ تواصل مع فريق دعم العملاء لدينا.
        </h4>
        <div className="not-prose mt-4 flex flex-col gap-4 md:mt-8">
          {content.map((item, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value={item.question}>
                <AccordionTrigger className="text-right">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base md:w-3/4 mr-auto">
                  {item.answer}
                  {item.link && (
                    <a
                      href={item.link}
                      className="mt-2 flex w-full items-center justify-end opacity-60 transition-all hover:opacity-100"
                    >
                      <ArrowUpLeft className="ml-1" size="16" />
                      اعرف المزيد
                    </a>
                  )}
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
