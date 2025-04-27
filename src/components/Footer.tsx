import React from "react";
import { TwitterIcon, GithubIcon, MailIcon } from "lucide-react";
interface FooterProps {
  setShowPrivacyPolicy: (show: boolean) => void;
}
export const Footer: React.FC<FooterProps> = ({ setShowPrivacyPolicy }) => {
  return (
    <footer className="w-full bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                Prompt Stash
              </span>
            </div>
            <p className="text-gray-400 mt-2 max-w-md">
              The ultimate AI prompt management tool for power users. Save,
              organize, and reuse your best prompts.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="text-gray-400 text-sm">
              <button
                onClick={() => setShowPrivacyPolicy(true)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
