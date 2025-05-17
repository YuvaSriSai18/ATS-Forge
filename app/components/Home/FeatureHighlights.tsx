import { Sparkles, FileText, LayoutDashboard, HelpCircle } from "lucide-react";

const features = [
  {
    title: "AI Resume Enhancer",
    description: "Optimize your resume bullet points with AI.",
    icon: Sparkles,
  },
  {
    title: "Cover Letter Generator",
    description: "Craft personalized letters instantly.",
    icon: FileText,
  },
  {
    title: "Visual Resume Enhancer",
    description: "Modern layouts tailored to your content.",
    icon: LayoutDashboard,
  },
  {
    title: "Interview Q&A Assistant",
    description: "Practice with role-specific AI questions.",
    icon: HelpCircle,
  },
];

const FeatureHighlights = () => {
  return (
    <section className="py-16 px-6 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Supercharge Your Job Hunt
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Powerful tools to help you stand out from the crowd.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="bg-slate-50 dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 mb-4 mx-auto">
                <Icon className="h-6 w-6 text-blue-600 dark:text-blue-300" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
