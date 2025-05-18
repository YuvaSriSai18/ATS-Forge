"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // Assuming you're using shadcn/ui or your own Button
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full py-24 px-6 md:px-16 lg:px-32 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
          Level Up Your Career with <br className="hidden sm:block" />
          <span className="text-blue-600">AI-powered Resume Tools</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10">
          From resumes to interview prep — one place to prepare like a pro.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/signup">
            <Button size="lg" className="rounded-full px-8 py-6 text-base">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/build-resume">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-6 text-base"
            >
              Try Resume Builder
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
