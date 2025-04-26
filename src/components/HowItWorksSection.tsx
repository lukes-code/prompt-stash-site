import React from "react";
import { DownloadIcon, MousePointerClickIcon, TextIcon } from "lucide-react";
export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      icon: <DownloadIcon size={24} className="text-blue-400" />,
      title: "Install the Extension",
      description:
        "Add Prompt Stash to Chrome with a single click from the Chrome Web Store.",
    },
    {
      icon: <MousePointerClickIcon size={24} className="text-purple-400" />,
      title: "Save Your Prompts",
      description:
        "Click the Prompt Stash icon whenever you create a prompt worth saving.",
    },
    {
      icon: <TextIcon size={24} className="text-green-400" />,
      title: "Use Anywhere",
      description:
        "Access and use your saved prompts across when using ChatGPT.",
    },
  ];
  return (
    <section id="how-it-works" className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              How It Works
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Get started with Prompt Stash in just a few simple steps
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <div className="mb-4 p-3 bg-gray-900 rounded-lg w-fit">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-1/2 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transform translate-x-1/2"></div>
              )}
              <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
        {/* <div className="mt-16 text-center">
          <a href="https://chrome.google.com/webstore" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-md bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:opacity-90 transition-opacity inline-flex items-center">
            <DownloadIcon size={20} className="mr-2" />
            Add to Chrome - It's Free
          </a>
        </div> */}
      </div>
    </section>
  );
};
