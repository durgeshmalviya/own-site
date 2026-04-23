import React from "react";

const plans = [
  {
    name: "Basic",
    price: "₹5,200",
    desc: "Perfect for small websites",
    features: [
      "Frontend Website (React/Vite)",
      "Responsive Design",
      "Basic SEO Setup",
      "Free Hosting (Vercel)",
      "Contact Form",
      "Basic Security",
    ],
  },
  {
    name: "Standard",
    price: "₹10,000",
    popular: true,
    desc: "Best for startups",
    features: [
      "Full Stack (React + Spring Boot)",
      "REST API Development",
      "MySQL / MongoDB",
      "JWT Authentication",
      "CI/CD Setup",
      "SEO + GEO + AEO",
      "Analytics Integration",
      "Free Hosting",
      "Lead Capture System",
    ],
  },
  {
    name: "Enterprise",
    price: "₹20,000",
    desc: "Complete scalable solution",
    features: [
      "Advanced Full Stack",
      "Secure Auth (JWT + OAuth)",
      "OWASP Security",
      "Docker + DevOps",
      "CI/CD + Testing",
      "Performance Optimization",
      "SEO + Marketing",
      "Ads Optimization",
      "CRM + Lead Funnel",
      "Priority Support",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="py-20 px-6 bg-white dark:bg-[#020617] transition-colors duration-500">
      
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold text-gray-900 dark:text-white">
          Pricing <span className="text-pink-500">Plans</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-4">
          Flexible pricing for every stage 🚀
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`relative rounded-3xl p-8 backdrop-blur-xl border 
            transition-all duration-500 hover:scale-105
            
            ${
              plan.popular
                ? "bg-gradient-to-br from-pink-500/10 to-purple-500/10 border-pink-500 shadow-2xl shadow-pink-500/20"
                : "bg-white/60 dark:bg-white/5 border-gray-200 dark:border-gray-800 shadow-lg"
            }`}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-pink-500 text-white text-xs px-4 py-1 rounded-full shadow-lg">
                  Most Popular
                </span>
              </div>
            )}

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {plan.name}
            </h3>

            {/* Description */}
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
              {plan.desc}
            </p>

            {/* Price */}
            <div className="mb-6">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                {plan.price}
              </h2>
              <span className="text-gray-500 text-sm">one-time</span>
            </div>

            {/* Button */}
            <button
              className={`w-full py-3 rounded-xl font-medium transition-all duration-300
              ${
                plan.popular
                  ? "bg-pink-500 text-white hover:bg-pink-600 shadow-lg shadow-pink-500/30"
                  : "bg-gray-900 text-white dark:bg-white dark:text-black hover:opacity-90"
              }`}
            >
              Get Started
            </button>

            {/* Features */}
            <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-6">
              <h4 className="text-xs text-gray-400 mb-4 tracking-widest">
                FEATURES
              </h4>

              <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                {plan.features.map((f, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <span className="text-pink-500">✔</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <p className="text-center text-gray-500 dark:text-gray-400 mt-20 text-sm">
        Trusted by startups & businesses worldwide 🌍
      </p>
    </section>
  );
};

export default Pricing;