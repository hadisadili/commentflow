"use client";

import { useState } from "react";
import Link from "next/link";

const browsers = [
  {
    id: "chrome",
    name: "Google Chrome",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
      </svg>
    ),
    steps: [
      "Download the extension ZIP using the button above and unzip it to a folder on your computer.",
      'Open Chrome and go to chrome://extensions in the address bar.',
      'Toggle "Developer mode" ON using the switch in the top-right corner.',
      'Click "Load unpacked" in the top-left.',
      "Select the unzipped commentflow-extension folder and click Open.",
      "The CommentFlow extension will appear in your toolbar — you're all set!",
    ],
  },
  {
    id: "edge",
    name: "Microsoft Edge",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-7a7 7 0 100 14 7 7 0 000-14z" />
      </svg>
    ),
    steps: [
      "Download the extension ZIP using the button above and unzip it to a folder on your computer.",
      'Open Edge and go to edge://extensions in the address bar.',
      'Toggle "Developer mode" ON using the switch in the bottom-left.',
      'Click "Load unpacked" in the top area of the page.',
      "Select the unzipped commentflow-extension folder and click Open.",
      "The CommentFlow extension icon will appear in your toolbar!",
    ],
  },
  {
    id: "brave",
    name: "Brave",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.18l7 3.89v8.86l-7 3.89-7-3.89V8.07l7-3.89z" />
      </svg>
    ),
    steps: [
      "Download the extension ZIP using the button above and unzip it to a folder on your computer.",
      'Open Brave and go to brave://extensions in the address bar.',
      'Toggle "Developer mode" ON using the switch in the top-right corner.',
      'Click "Load unpacked" in the top-left.',
      "Select the unzipped commentflow-extension folder and click Open.",
      "The extension is now active in Brave!",
    ],
  },
  {
    id: "firefox",
    name: "Firefox",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
    steps: [
      "Download the extension ZIP using the button above — keep it as a ZIP (do not unzip).",
      "Open Firefox and go to about:debugging#/runtime/this-firefox in the address bar.",
      'Click "Load Temporary Add-on..."',
      "Select the downloaded commentflow-extension.zip file (or navigate into an unzipped folder and select manifest.json).",
      "The extension will load temporarily. Note: In Firefox, temporary add-ons are removed when the browser restarts.",
    ],
  },
  {
    id: "opera",
    name: "Opera",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      </svg>
    ),
    steps: [
      "Download the extension ZIP using the button above and unzip it to a folder on your computer.",
      'Open Opera and go to opera://extensions in the address bar.',
      'Toggle "Developer mode" ON using the switch in the top-right corner.',
      'Click "Load unpacked" in the top area.',
      "Select the unzipped commentflow-extension folder and click Open.",
      "CommentFlow is now installed in Opera!",
    ],
  },
];

export default function ExtensionGuidePage() {
  const [activeBrowser, setActiveBrowser] = useState("chrome");
  const active = browsers.find((b) => b.id === activeBrowser)!;

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/dashboard"
          className="text-sm text-th-text-secondary hover:text-th-text transition-colors mb-4 inline-flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Dashboard
        </Link>
        <h1 className="text-2xl font-bold text-th-text mt-2">Install the CommentFlow Extension</h1>
        <p className="text-th-text-secondary mt-1">
          Download the extension and follow the guide for your browser to get started.
        </p>
      </div>

      {/* Download Card */}
      <div className="bg-th-card border border-th-border rounded-xl p-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center shrink-0">
            <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-th-text">Step 1: Download</h2>
            <p className="text-sm text-th-text-secondary mt-1 mb-4">
              Get the CommentFlow extension as a ZIP file. After downloading, unzip it to a folder on your computer, then follow the browser-specific instructions below.
            </p>
            <a
              href="/api/extension/download"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Extension (.zip)
            </a>
          </div>
        </div>
      </div>

      {/* Browser Installation Guide */}
      <div className="bg-th-card border border-th-border rounded-xl overflow-hidden mb-8">
        <div className="px-6 pt-5 pb-4 border-b border-th-border">
          <h2 className="text-lg font-semibold text-th-text">Step 2: Install in Your Browser</h2>
          <p className="text-sm text-th-text-secondary mt-1">
            Select your browser and follow the steps.
          </p>
        </div>

        {/* Browser Tabs */}
        <div className="flex border-b border-th-border overflow-x-auto">
          {browsers.map((browser) => (
            <button
              key={browser.id}
              onClick={() => setActiveBrowser(browser.id)}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeBrowser === browser.id
                  ? "border-blue-500 text-blue-400"
                  : "border-transparent text-th-text-secondary hover:text-th-text hover:border-th-border"
              }`}
            >
              {browser.name}
            </button>
          ))}
        </div>

        {/* Steps */}
        <div className="p-6">
          <ol className="space-y-4">
            {active.steps.map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-600/10 text-blue-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="text-sm text-th-text leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* After Installing */}
      <div className="bg-th-card border border-th-border rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-green-600/10 flex items-center justify-center shrink-0">
            <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-th-text">Step 3: Connect Your Account</h2>
            <p className="text-sm text-th-text-secondary mt-1 mb-3">
              After installing the extension, you need to connect it to your CommentFlow account:
            </p>
            <ol className="space-y-2 text-sm text-th-text">
              <li className="flex gap-2">
                <span className="text-th-text-muted font-medium">1.</span>
                <span>
                  Go to{" "}
                  <Link href="/dashboard/settings" className="text-blue-400 hover:underline">
                    Settings
                  </Link>{" "}
                  and generate an extension token.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-th-text-muted font-medium">2.</span>
                <span>Click the CommentFlow icon in your browser toolbar to open the extension popup.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-th-text-muted font-medium">3.</span>
                <span>Paste the token into the extension and click Connect.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-th-text-muted font-medium">4.</span>
                <span>The extension will start automatically picking up queued comments!</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
