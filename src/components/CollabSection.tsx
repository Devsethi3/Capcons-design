"use client";

import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "motion/react";
import CreatorConnect from "./FeatureGrid";
import { BlogSection } from "./BlogSection";
import MagicReachDashboard from "./MagicReachDashboard";

const CollabSection = () => {
  return (
    <main className="min-h-screen bg-lavender-50">
      <div className="py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 container"
        >
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-[#39089D] mb-2">
            Features for Collaboration and Communication in the Community
          </h1>
          <p className="text-sm md:text-base text-[#39089D]">
            All in One Place for Your Community
          </p>
        </motion.div>

        <Tabs defaultValue="magic-reach" className="mb-12">
          <TabsList className="w-full bg-[#d9fefe] container overflow-x-auto p-2 rounded-full h-14 flex justify-between gap-10">
            <TabsTrigger
              value="circles"
              className="font-medium cursor-pointer rounded-full md:text-sm"
            >
              Circles
            </TabsTrigger>
            <TabsTrigger
              value="monetization"
              className="font-medium cursor-pointer rounded-full md:text-sm"
            >
              Monetization
            </TabsTrigger>
            <TabsTrigger
              value="magic-reach"
              className="font-medium cursor-pointer rounded-full md:text-sm"
            >
              Magic Reach
            </TabsTrigger>
            <TabsTrigger
              value="courses"
              className="font-medium cursor-pointer rounded-full md:text-sm"
            >
              Courses
            </TabsTrigger>
            <TabsTrigger
              value="custom-events"
              className="font-medium cursor-pointer rounded-full md:text-sm"
            >
              Custom Events
            </TabsTrigger>
          </TabsList>

          <TabsContent value="magic-reach" className="mt-6">
            <motion.div
              className="h-[70vh] container rounded-2xl md:p-8 relative overflow-hidden flex-shrink-0 bg-[#e2d9ed]"
            >
              <div className="mt-5 mx-10">
                <h1 className="text-2xl md:text-3xl xl:text-4xl font-extrabold text-gray-800 mb-4">
                  Magic Reach
                </h1>
                <p className="text-gray-600 font-bold text-sm md:text-base leading-relaxed">
                  Lorem Ipsum is simply dummy text of <br /> the printing and
                  typesetting industry.
                </p>

                <div className="absolute right-[5%] top-[10%]">
                  <Image
                    src="/reach-group.png"
                    alt="reach-group"
                    width={650}
                    height={650}
                  />
                </div>
              </div>

              <div className="absolute bottom-0 left-[10%]">
                <Image
                  src="/character.png"
                  alt="character"
                  width={400}
                  height={400}
                />
              </div>

              <div className="absolute top-[40%] left-[10%]">
                <Image
                  src="/crown.png"
                  alt="character"
                  width={100}
                  height={100}
                />
              </div>
            </motion.div>
          </TabsContent>

          {/* Other tab contents would go here */}
          <TabsContent value="circles">
            <div className="bg-white p-6 rounded-xl">
              <h2 className="text-xl font-bold text-purple-900 mb-3">
                Circles
              </h2>
              <p className="text-gray-600">
                Create private spaces for your community members to connect and
                collaborate.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="monetization">
            <div className="bg-white p-6 rounded-xl">
              <h2 className="text-xl font-bold text-purple-900 mb-3">
                Monetization
              </h2>
              <p className="text-gray-600">
                Multiple ways to generate revenue from your community
                engagement.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="courses">
            <div className="bg-white p-6 rounded-xl">
              <h2 className="text-xl font-bold text-purple-900 mb-3">
                Courses
              </h2>
              <p className="text-gray-600">
                Create and sell digital courses to share your knowledge with the
                world.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="custom-events">
            <div className="bg-white p-6 rounded-xl">
              <h2 className="text-xl font-bold text-purple-900 mb-3">
                Custom Events
              </h2>
              <p className="text-gray-600">
                Host virtual or in-person events for your community members.
              </p>
            </div>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center my-16"
        >
       
          <CreatorConnect />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="my-16"
        >
          <h2 className="text-2xl font-bold text-purple-900 mb-8 text-center">
            Related Blogs
          </h2>
          <BlogSection />
        </motion.div>

        <div className="my-16">
          <h2 className="text-2xl font-bold text-purple-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion
            type="single"
            collapsible
            className="bg-white rounded-xl p-4"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-purple-800 font-medium">
                How do I get started with Creator Connect?
              </AccordionTrigger>
              <AccordionContent>
                Getting started is easy! Simply sign up for an account, complete
                your profile, and start exploring the features. Our onboarding
                process will guide you through setting up your first community
                space.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-purple-800 font-medium">
                What are XP challenges and how do they work?
              </AccordionTrigger>
              <AccordionContent>
                XP challenges are daily activities designed to help you grow
                your community and engagement. Complete each challenge to earn
                experience points that unlock special features and rewards.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-purple-800 font-medium">
                How can I monetize my community?
              </AccordionTrigger>
              <AccordionContent>
                Creator Connect offers multiple monetization options including
                membership tiers, digital products, courses, and event tickets.
                You can also enable tips and donations from your community
                members.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-purple-800 font-medium">
                What analytics are available for community managers?
              </AccordionTrigger>
              <AccordionContent>
                Our comprehensive analytics dashboard provides insights on
                member engagement, content performance, revenue streams, and
                growth trends. You can export reports and set up custom
                notifications for important metrics.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </main>
  );
};

export default CollabSection;
