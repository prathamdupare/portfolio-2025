"use client";

import { useState } from "react";
import { Tabs } from "@/components/tabs";
import { FileExplorer } from "@/components/file-explorer";
import { TerminalContent } from "@/components/terminal-content";
import { TerminalFooter } from "@/components/terminal-footer";

export default function Home() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        <div className="w-full md:w-64 border-r border-gray-800 hidden md:block">
          <FileExplorer activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        <div className="flex-1 flex flex-col overflow-hidden">
          <main className="flex-1 overflow-auto">
            <TerminalContent activeTab={activeTab} />
          </main>

          <TerminalFooter />
        </div>
      </div>

      <div className="p-0 bg-gray-900 border-t border-gray-800">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}
