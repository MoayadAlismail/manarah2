"use client";

import { useState, useEffect } from 'react';
import { Main, Section, Container } from "@/components/craft";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Textarea from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "@/components/ui/use-toast";
import mentorsData from '../data/mentors.json';

interface Mentor {
  id: string;
  name: string;
  availableSlots: TimeSlot[];
}

interface TimeSlot {
  id: string;
  date: string;
  time: string;
}

export default function BookSession() {
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [selectedMentor, setSelectedMentor] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');

  useEffect(() => {
    setMentors(mentorsData.mentors);
  }, []);

  useEffect(() => {
    if (selectedMentor && selectedDate) {
      const mentor = mentors.find(m => m.id === selectedMentor);
      if (mentor) {
        const slots = mentor.availableSlots.filter(slot => 
          new Date(slot.date).toDateString() === selectedDate.toDateString()
        );
        setAvailableSlots(slots);
      }
    }
  }, [selectedMentor, selectedDate, mentors]);

  const handleBooking = async () => {
    if (!selectedMentor || !selectedSlot || !name || !email || !reason) {
      toast({
        title: "خطأ",
        description: "الرجاء إكمال جميع الحقول المطلوبة",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the booking data to your backend
    // For now, we'll just show a success message
    toast({
      title: "تم الحجز بنجاح",
      description: "تم حجز جلستك بنجاح. سنرسل لك تأكيدًا بالبريد الإلكتروني.",
    });

    // Reset form
    setSelectedMentor(null);
    setSelectedDate(null);
    setSelectedSlot(null);
    setName('');
    setEmail('');
    setReason('');
  };

  return (
    <Main className="bg-white text-black font-alexandria">
      <Section className="py-12">
        <Container className="text-right">
          <h1 className="text-4xl font-bold mb-4 pt-24">احجز جلسة استشارية</h1>
          <p className="text-xl mb-8">اختر المرشد والوقت المناسب لك لحجز جلستك الاستشارية.</p>
          
          <div className="space-y-6">
            <div>
              <label className="block text-lg font-medium mb-2">الاسم</label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 text-right"
                placeholder="أدخل اسمك الكامل"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium mb-2">البريد الإلكتروني</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 text-right"
                placeholder="أدخل بريدك الإلكتروني"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium mb-2 ">سبب الاستشارة</label>
              <Textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full p-2 text-right border border-gray-300 rounded-md"
                placeholder="اشرح باختصار سبب طلبك للاستشارة"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium mb-2">اختر المرشد</label>
              <Select onValueChange={(value) => setSelectedMentor(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="اختر المرشد" />
                </SelectTrigger>
                <SelectContent>
                  {mentors.map((mentor) => (
                    <SelectItem key={mentor.id} value={mentor.id}>{mentor.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {selectedMentor && (
              <div>
                <label className="block text-lg font-medium mb-2">اختر التاريخ</label>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => {
                    setSelectedDate(date);
                    setSelectedSlot(null);
                  }}
                  className="rounded-md border"
                />
              </div>
            )}

            {selectedDate && availableSlots.length > 0 && (
              <div>
                <label className="block text-lg font-medium mb-2">اختر الوقت</label>
                <Select onValueChange={(value) => setSelectedSlot(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر الوقت" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableSlots.map((slot) => (
                      <SelectItem key={slot.id} value={slot.id}>{slot.time}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            <Button onClick={handleBooking} className="w-full" disabled={!selectedSlot || !name || !email || !reason}>
              احجز الجلسة
            </Button>
          </div>
        </Container>
      </Section>
      <Footer />
    </Main>
  );
}