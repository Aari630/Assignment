import React from 'react';
import { Upload, DollarSign, CreditCard } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      icon: <Upload className="w-12 h-12 text-blue-500 dark:text-blue-400 mb-4" />,
      title: "Upload License Details",
      description: "Provide basic information about your software licenses, including type, quantity, and expiration date."
    },
    {
      icon: <DollarSign className="w-12 h-12 text-blue-500 dark:text-blue-400 mb-4" />,
      title: "Get Instant Valuation",
      description: "Our proprietary algorithm calculates the best possible price based on current market demand and license attributes."
    },
    {
      icon: <CreditCard className="w-12 h-12 text-blue-500 dark:text-blue-400 mb-4" />,
      title: "Get Paid Quickly",
      description: "Accept our offer and receive payment via your preferred method within 24-48 hours, guaranteed."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Converting your unused software licenses into cash is simple and straightforward with our three-step process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 text-center transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105"
            >
              <div className="flex justify-center">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full w-8 h-8 text-center leading-8 mr-2">
                  {index + 1}
                </span>
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-md transition-all duration-300 transform hover:scale-105"
          >
            Start the Process Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;