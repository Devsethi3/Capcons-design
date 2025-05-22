"use client";

import { MotionAccordion } from "@/components/ui/motion-accordion";

const BrandAccordion = () => {
  const faqItems = [
    {
      id: "1",
      title: "Your Brands",
      content: (
        <div className="space-y-2">
          <p>Getting started is easy! Simply follow these steps:</p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Explore the dashboard to discover all features</li>
            <li>Check out our documentation for more details</li>
          </ol>
        </div>
      ),
    },
    {
      id: "2",
      title: "Your Colors",
      content: (
        <div className="space-y-2">
          <p>We accept a variety of payment methods:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Credit cards (Visa, Mastercard, AMEX)</li>
            <li>PayPal, Apple Pay, Google Pay</li>
          </ul>
        </div>
      ),
    },
    {
      id: "3",
      title: "Your Community",
      content: (
        <div className="space-y-2">
          <p>Reach us through:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Live chat on our website (24/7)</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full flex flex-col gap-20">
      <div className="mb-6">
        <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
          Capcons Pro
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[#39089D]">
          Monetization: Earn on Your Terms
        </h2>
        <p className="mt-2 text-muted-foreground text-base sm:text-lg">
          Monetize seamlessly with paid Circles, subscriptions, and exclusive
          content—driving higher sales and faster revenue growth. With Capcons,
          creators and brands set their own pricing for sustainable income and
          deeper engagement.
        </p>
      </div>
      <div>
        <MotionAccordion items={faqItems} className="mb-12" />
      </div>
    </div>
  );
};

export default BrandAccordion;
