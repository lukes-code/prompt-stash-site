import React from "react";
import { SaveIcon } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="w-full py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                Save & Organize
              </span>
              <br />
              Your AI Prompts
            </h1>
            <p className="text-gray-300 text-xl mb-8 max-w-lg">
              Never lose your perfect prompt again. Prompt Stash helps you save,
              organize, and reuse your AI prompts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* <a href="https://chrome.google.com/webstore" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-md bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:opacity-90 transition-opacity text-center">
                Add to Chrome - Free
              </a> */}
              <a
                href="#how-it-works"
                className="px-6 py-3 rounded-md border border-gray-700 text-white font-medium hover:bg-gray-800 transition-colors text-center"
              >
                Learn More
              </a>
            </div>
            <div className="mt-8 flex items-center text-gray-400">
              <div className="flex -space-x-2">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-gray-900"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-gray-900"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-gray-900"
                />
              </div>
              <span className="ml-3">Loved by prompt engineers</span>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 bg-gray-800 p-4 rounded-xl shadow-2xl border border-gray-700">
              <div className="absolute -top-3 left-4 flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="mt-4 p-4 bg-gray-900 rounded-lg border border-gray-700">
                <div className="flex items-center mb-4">
                  <SaveIcon size={20} className="text-blue-400 mr-2" />
                  <h3 className="font-medium">My Saved Prompts</h3>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-800 rounded border border-gray-700 hover:border-blue-500 transition-colors cursor-pointer">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">
                        Product Description Generator
                      </span>
                      <span className="text-xs text-gray-400">2d ago</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                      Write a compelling product description for [product] that
                      highlights...
                    </p>
                  </div>
                  <div className="p-3 bg-gray-800 rounded border border-purple-500 transition-colors cursor-pointer">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">
                        Code Refactoring Helper
                      </span>
                      <span className="text-xs text-gray-400">5d ago</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                      Analyze this code and suggest refactoring to improve
                      performance and...
                    </p>
                  </div>
                  <div className="p-3 bg-gray-800 rounded border border-gray-700 hover:border-blue-500 transition-colors cursor-pointer">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">
                        Email Marketing Template
                      </span>
                      <span className="text-xs text-gray-400">1w ago</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                      Create an engaging email marketing template for [product
                      launch]...
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-20 z-0"></div>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl opacity-20 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
