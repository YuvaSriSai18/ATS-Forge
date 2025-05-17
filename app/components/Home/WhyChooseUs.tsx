import {
  Brain,
  MousePointerClick,
  ShieldCheck,
  BadgeCheck,
  Rocket,
} from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "Built with AI",
    description:
      "Tailored specifically for job seekers to craft winning applications.",
  },
  {
    icon: MousePointerClick,
    title: "Easy-to-Use Interface",
    description:
      "Designed for simplicity so you can focus on content, not complexity.",
  },
  {
    icon: BadgeCheck,
    title: "ATS-Optimized",
    description:
      "Ensure your resume passes automated tracking systems used by recruiters.",
  },
  {
    icon: Rocket,
    title: "Free to Get Started",
    description:
      "Start using core features at no cost — upgrade only if you need more.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Private",
    description:
      "Your data stays yours. Fully encrypted and privacy-first by design.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 px-6 md:px-16 lg:px-32">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Why Choose Us
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Everything you need to boost your career — powered by smart AI.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition-all"
            >
              <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
                <Icon className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
