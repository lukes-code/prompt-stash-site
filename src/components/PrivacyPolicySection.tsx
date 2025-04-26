import React from "react";
import { ShieldIcon } from "lucide-react";
export const PrivacyPolicySection: React.FC = () => {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gray-800 rounded-full">
              <ShieldIcon size={32} className="text-purple-400" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              Privacy Policy
            </span>
          </h2>
          <p className="text-gray-300">Last updated: April 2025</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
          <div className="prose prose-invert max-w-none">
            <h3 className="text-2xl font-semibold mb-4">Introduction</h3>
            <p>
              At Prompt Stash, we value your privacy. This Privacy Policy
              describes how we collect, use, and safeguard your information when
              you use our Chrome extension.
            </p>
            <h3 className="text-2xl font-semibold mb-4 mt-8">
              Information We Collect
            </h3>
            <p>
              <strong>Prompt Data:</strong> We store the prompts you manually
              save using our extension. This data is stored locally in your
              browser using Chrome's storage system and is not transmitted to
              any external servers.
            </p>
            <p>
              <strong>Usage Data:</strong> We do not collect analytics,
              telemetry, or any personal information. Your prompt data stays
              private and under your control.
            </p>
            <h3 className="text-2xl font-semibold mb-4 mt-8">
              How We Use Your Information
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                To save and retrieve your AI prompts directly within your
                browser
              </li>
              <li>To maintain the core functionality of the extension</li>
            </ul>
            <h3 className="text-2xl font-semibold mb-4 mt-8">
              Data Storage and Retention
            </h3>
            <p>
              Your data is stored locally using Chrome's storage API. It remains
              until you delete it manually or uninstall the extension. We do not
              have access to or retain any of your stored prompts.
            </p>
            <h3 className="text-2xl font-semibold mb-4 mt-8">Data Security</h3>
            <p>
              We use Chrome's secure local storage mechanisms to help protect
              your prompt data. However, as with any local storage, we cannot
              guarantee absolute security. We recommend you manage your
              browser’s security settings appropriately.
            </p>
            <h3 className="text-2xl font-semibold mb-4 mt-8">
              Third-Party Services
            </h3>
            <p>
              Our extension does not integrate with or rely on any third-party
              services. It operates fully within your browser environment.
            </p>
            <h3 className="text-2xl font-semibold mb-4 mt-8">
              Changes to This Privacy Policy
            </h3>
            <p>
              We may update this Privacy Policy occasionally. Any updates will
              be reflected by revising the "Effective Date" at the top.
              Continued use of the extension after updates constitutes
              acceptance of the changes.
            </p>
            <p>
              We encourage you to review this Privacy Policy periodically for
              any changes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
