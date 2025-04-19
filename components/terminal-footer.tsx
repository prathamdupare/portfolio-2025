"use client";

import { Clock } from "lucide-react";
import { useEffect, useState } from "react";

export function TerminalFooter() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-800 border-t border-gray-700 px-2 text-xs text-gray-400 flex items-center justify-between font-mono">
      <div className="flex items-center gap-2">
        <span className="bg-green-500 h-2 w-2 rounded-full"></span>
        <span>portfolio-2025</span>
      </div>

      <div className="flex items-center gap-1">
        <Clock className="h-3 w-3" />
        <span>{time.toLocaleTimeString()}</span>
      </div>

      <div>~/git/portfolio-2025</div>
    </div>
  );
}
