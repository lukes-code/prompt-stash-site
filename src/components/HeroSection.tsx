import React from "react";
import { SaveIcon } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-purple-600 via-blue-600 to-transparent opacity-20 blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight max-w-3xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              Save & Organize
            </span>
            <br />
            Your AI Prompts
          </h1>

          <p className="text-gray-300 text-xl mb-8 max-w-2xl">
            Never lose your perfect prompt again. Prompt Stash helps you save,
            organize, and reuse your AI prompts — faster and smarter.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* Uncomment if you want a primary action */}
            {/* <a
              href="https://chrome.google.com/webstore"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-md bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:opacity-90 transition-opacity text-center"
            >
              Add to Chrome - Free
            </a> */}
            <a
              href="#how-it-works"
              className="px-6 py-3 rounded-md border border-gray-700 text-white font-medium hover:bg-gray-800 transition-colors text-center"
            >
              Learn More
            </a>
          </div>

          <div className="mt-10 flex items-center text-gray-400">
            <div className="flex -space-x-2">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-gray-900"
              />
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-gray-900"
              />
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-gray-900"
              />
            </div>
            <span className="ml-3 text-sm md:text-base">
              Loved by prompt engineers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
