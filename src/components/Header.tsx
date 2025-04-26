import React from "react";
import { MenuIcon } from "lucide-react";
interface HeaderProps {
  showPrivacyPolicy: boolean;
  setShowPrivacyPolicy: (show: boolean) => void;
}
export const Header: React.FC<HeaderProps> = ({
  showPrivacyPolicy,
  setShowPrivacyPolicy,
}) => {
  return (
    <header className="w-full bg-gray-900 border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div
          className="flex items-center space-x-2"
          onClick={() => setShowPrivacyPolicy(false)}
          role="button"
          tabIndex={0}
        >
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
            <span className="font-bold text-lg">PS</span>
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Prompt Stash
          </span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#features"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-gray-300 hover:text-white transition-colors"
          >
            How It Works
          </a>
          <button
            onClick={() => setShowPrivacyPolicy(!showPrivacyPolicy)}
            className="text-gray-300 hover:text-white transition-colors"
          >
            {showPrivacyPolicy ? "Back to Home" : "Privacy Policy"}
          </button>
          {/* <a href="https://chrome.google.com/webstore" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-md bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:opacity-90 transition-opacity">
            Add to Chrome
          </a> */}
        </nav>
        <button className="md:hidden text-gray-300 hover:text-white">
          <MenuIcon size={24} />
        </button>
      </div>
    </header>
  );
};
