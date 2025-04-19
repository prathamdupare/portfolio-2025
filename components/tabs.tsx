"use client";

import { div } from "motion/react-client";

interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Tabs({ activeTab, setActiveTab }: TabsProps) {
  return (
    <div className="border-white">
      <div className="w-full bg-grey-900 text-sm border-gray-800">
        <p>"components/{activeTab}.tsx" written</p>
      </div>

      <div className="flex items-center justify-between bg-gray-900 text-gray-400 px-4 py-2 text-sm border-b border-gray-800">
        <div className="flex items-center space-x-4">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <div className="flex items-center ">
            <div className="flex items-center bg-gray-800 px-2 py-1  text-gray-300">
              <span className="text-xs">1 nvim</span>
            </div>
            <div className="flex items-center  px-2 py-1  text-gray-300">
              <span className="text-xs">2 bun</span>
            </div>
            <div className="flex items-center  px-2 py-1  text-gray-300">
              <span className="text-xs">3 nvim</span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-blue-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"
            />
          </svg>
          <span className="text-gray-300 text-xs">~/git/portfolio-2025</span>
        </div>
      </div>
    </div>
  );
}
