"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="rounded-2xl overflow-hidden border border-gray-200 shadow-md"
        >
          <button
            className="w-full flex justify-between items-center bg-primaryBlue text-white px-4 py-5 rounded-xl"
            onClick={() => toggleFAQ(index)}
          >
            <span className="text-lg font-medium">{item.question}</span>
            <span className="text-2xl">{openIndex === index ? "−" : "+"}</span>
          </button>

          {openIndex === index && (
            <div className="p-10 min-h-[150px] bg-white text-gray-700">
              <p className="text-sm">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
