import React from "react";
const CTASection = () => {
  return (
    <section className="py-16 px-6 md:px-20 lg:px-32">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to land your dream job?
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Start optimizing your resume now — it&apos;s fast, smart, and free.
        </p>
        <button className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-xl shadow-md transition">
          Try It Free
        </button>
      </div>
    </section>
  );
};

export default CTASection;
