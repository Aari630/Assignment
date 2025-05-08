import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-950 min-h-[90vh] flex items-center transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              Unlock the Value of Your Unused Software Licenses
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              Convert your idle software investments into immediate revenue. SoftSell makes it simple, secure, and profitable to resell your unused licenses.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-md transition-all duration-300 transform hover:scale-105 flex items-center justify-center w-full sm:w-auto"
              >
                Sell Your Licenses
                <ArrowRight className="ml-2" size={18} />
              </a>
              <a 
                href="#how-it-works" 
                className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 font-medium px-8 py-3 rounded-md transition-all duration-300 hover:bg-blue-50 dark:hover:bg-gray-700 flex items-center justify-center w-full sm:w-auto"
              >
                Learn How It Works
              </a>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-10 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-blue-500 rounded-lg transform rotate-3 scale-105 opacity-20 dark:opacity-30"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
                <div className="px-6 py-8">
                  <div className="flex mb-6">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded p-4 mb-4">
                    <div className="h-6 bg-blue-200 dark:bg-blue-900/40 rounded mb-3 w-3/4"></div>
                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-2 w-full"></div>
                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-2 w-5/6"></div>
                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-4/6"></div>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="h-8 bg-blue-500 rounded w-24 flex items-center justify-center text-white text-xs font-medium">
                      $4,500
                    </div>
                    <div className="h-8 bg-green-100 dark:bg-green-900/40 rounded w-24 flex items-center justify-center text-green-700 dark:text-green-400 text-xs font-medium">
                      Verified
                    </div>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded p-3 flex items-center">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      $
                    </div>
                    <div>
                      <div className="text-blue-700 dark:text-blue-400 font-medium">Payment Processing</div>
                      <div className="text-blue-600/70 dark:text-blue-300/70 text-sm">Secure • Instant • Reliable</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;