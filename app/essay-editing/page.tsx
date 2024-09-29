"use client";

import { useState } from 'react';
import { Main, Section, Container } from "@/components/craft";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Textarea from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { toast }from "@/components/ui/use-toast";

export default function EssayEditing() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [essay, setEssay] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically send the data to your backend
      const response = await fetch('/api/submit-essay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, essay }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit essay');
      }

      toast({
        title: "تم إرسال المقال بنجاح",
        description: "سنقوم بمراجعة مقالك وسنتواصل معك قريبًا.",
      });

      // Clear form after successful submission
      setName('');
      setEmail('');
      setEssay('');
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: "خطأ في الإرسال",
        description: "حدث خطأ أثناء إرسال المقال. يرجى المحاولة مرة أخرى.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Main className="bg-white text-black font-alexandria">
      <Section className="py-12">
        <Container className="text-right">
          <h1 className="text-4xl font-bold mb-4 pt-24">تحرير المقالات</h1>
          <p className="text-xl mb-8">قم بتحميل مقال طلبك الجامعي وسنقوم بمراجعته وتحسينه لزيادة فرص قبولك.</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium mb-2">الاسم</label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-2 text-right"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-2">البريد الإلكتروني</label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 text-right"
              />
            </div>
            
            <div>
              <label htmlFor="essay" className="block text-lg font-medium mb-2">المقال</label>
              <Textarea
                id="essay"
                value={essay}
                onChange={(e) => setEssay(e.target.value)}
                required
                className="w-full p-2 h-64 border border-gray-300 rounded-md text-right"
                placeholder="أدخل مقالك هنا..."
              />
            </div>
            
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? 'جاري الإرسال...' : 'إرسال المقال للمراجعة'}
            </Button>
          </form>
        </Container>
      </Section>
      <Footer />
    </Main>
  );
}
// export EssayEditing;