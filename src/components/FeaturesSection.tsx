import React from "react";
import {
  SaveIcon,
  TagIcon,
  SearchIcon,
  RepeatIcon,
  CloudIcon,
  LockIcon,
} from "lucide-react";
export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <SaveIcon size={24} className="text-purple-400" />,
      title: "One-Click Save",
      description:
        "Save any prompt with a single click while browsing ChatGPT.",
    },
    {
      icon: <TagIcon size={24} className="text-blue-400" />,
      title: "Handy Browser Widget",
      description:
        "Your prompt assistant knows where the input box is and offers support for added efficiency.",
    },
    {
      icon: <SearchIcon size={24} className="text-green-400" />,
      title: "Store For Future Use",
      description:
        "Safely store your best prompts and access them via the Chrome extension pop out.",
    },
    {
      icon: <RepeatIcon size={24} className="text-yellow-400" />,
      title: "Reuse Anywhere",
      description:
        "Copy and paste your saved prompts with ease, by using the extension, widget or shortcuts.",
    },
    {
      icon: <CloudIcon size={24} className="text-indigo-400" />,
      title: "Increase Efficiency",
      description: "Speed up your use of AI and receive results faster.",
    },
    {
      icon: <LockIcon size={24} className="text-red-400" />,
      title: "Private & Secure",
      description:
        "Your prompts are your prompts and never shared with third parties.",
    },
  ];
  return (
    <section id="features" className="w-full py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              Powerful Features
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Prompt Stash comes packed with everything you need to manage your AI
            prompts effectively
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="mb-4 p-3 bg-gray-900 rounded-lg w-fit">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
