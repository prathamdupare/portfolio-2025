import { About } from "./Files/About";
import { Contact } from "./Files/Contact";
import { Experience } from "./Files/Experience";
import { Projects } from "./Files/Projects";
import { Skills } from "./Files/Skills";

interface TerminalContentProps {
  activeTab: string;
}

export function TerminalContent({ activeTab }: TerminalContentProps) {
  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "skills":
        return <Skills />;
      case "experience":
        return <Experience />;
      case "contact":
        return <Contact />;
      default:
        return <div>Select a tab to view content</div>;
    }
  };

  return (
    <div className="bg-gray-900 text-gray-300 p-4 font-mono text-sm h-full overflow-y-auto">
      {renderContent()}
    </div>
  );
}
