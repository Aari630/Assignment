import React from 'react';
import { Shield, Clock, DollarSign, Award } from 'lucide-react';

const WhyChooseUsSection: React.FC = () => {
  const reasons = [
    {
      icon: <DollarSign className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
      title: "Best Market Value",
      description: "Our vast network of buyers ensures you get the highest possible value for your unused licenses."
    },
    {
      icon: <Shield className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
      title: "Secure Transactions",
      description: "End-to-end encryption and secure payment processing keeps your information safe at every step."
    },
    {
      icon: <Clock className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
      title: "Fast Processing",
      description: "From valuation to payment, our streamlined process typically completes within 48 hours."
    },
    {
      icon: <Award className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
      title: "Expert Guidance",
      description: "Our team of software licensing experts guides you through the entire resale process."
    }
  ];

  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose SoftSell</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We've helped thousands of businesses recover value from their unused software investments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex justify-center items-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6 mx-auto">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 dark:bg-blue-700 rounded-lg shadow-xl overflow-hidden">
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to unlock the value in your unused software?
              </h3>
              <p className="text-blue-100 text-lg mb-0">
                Join thousands of satisfied companies who've recovered millions in software investments.
              </p>
            </div>
            <div className="md:w-1/3 md:text-right">
              <a 
                href="#contact" 
                className="inline-block bg-white text-blue-600 font-medium px-8 py-3 rounded-md transition-all duration-300 hover:bg-blue-50"
              >
                Get Started Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;