import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ananya Sharma",
    title: "Marketing Analyst",
    quote:
      "I landed 3 interviews in a week after updating my resume with this tool!",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    title: "Software Developer",
    quote:
      "Super intuitive and really powerful. The AI suggestions were spot-on!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4,
  },
  {
    name: "Priya Menon",
    title: "HR Associate",
    quote: "Loved how quickly I could generate a professional cover letter.",
    image: "https://randomuser.me/api/portraits/women/43.jpg",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-6 md:px-20 lg:px-32">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10">
          Hear from Our Users
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(({ name, title, quote, image, rating }, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow-md p-6 text-left hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={image}
                  alt={name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gray-300"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {title}
                  </p>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 italic">
                “{quote}”
              </p>

              <div className="flex mt-4 text-yellow-400">
                {Array.from({ length: rating }, (_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
