"use client";
import { FaReact } from "react-icons/fa";
import { AiOutlineFile, AiOutlineFolder } from "react-icons/ai";
import { Folder, FileText, ChevronRight, ChevronDown } from "lucide-react";

interface FileItem {
  name: string;
  id: string;
  type: "file" | "folder" | "react";
  children?: FileItem[];
  expanded?: boolean;
}

interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function FileExplorer({ activeTab, setActiveTab }: TabsProps) {
  const files: FileItem[] = [
    {
      name: "~/git/portfolio-2025",
      id: "portfolio-2025",
      type: "folder",
      expanded: true,
      children: [
        { name: ".git", id: "git", type: "folder" },
        { name: ".next", id: "next", type: "folder" },
        { name: "node_modules", id: "node-modules", type: "folder" },
        {
          name: "app",
          id: "app",
          type: "folder",
          expanded: true,
          children: [
            { name: "page.tsx", id: "about", type: "file" },
            { name: "layout.tsx", id: "layout", type: "file" },
          ],
        },
        {
          name: "components",
          id: "components",
          type: "folder",
          expanded: true,
          children: [
            { name: "experience.tsx", id: "experience", type: "react" },
            { name: "contact.tsx", id: "contact", type: "react" },
            { name: "skills.tsx", id: "skills", type: "react" },
            { name: "projects.tsx", id: "projects", type: "react" },
          ],
        },
        { name: "lib", id: "lib", type: "folder" },
        {
          name: "public",
          id: "public",
          type: "folder",
          children: [{ name: "avatar.png", id: "avatar", type: "file" }],
        },
        { name: ".gitignore", id: "gitignore", type: "file" },
        { name: "README.md", id: "readme", type: "file" },
        { name: "package.json", id: "package-json", type: "file" },
        { name: "tsconfig.json", id: "tsconfig", type: "file" },
      ],
    },
  ];

  const toggleFolder = (item: FileItem) => {
    item.expanded = !item.expanded;
  };

  const renderFileItem = (item: FileItem, depth = 0) => {
    const paddingLeft = `${depth * 1.5}rem`;

    return (
      <div key={item.name}>
        <div
          className={`flex items-center py-1 text-sm cursor-pointer ${
            activeTab === item.id ? "bg-gray-800" : ""
          }`}
          style={{ paddingLeft }}
          onClick={() => {
            if (item.type === "folder") {
              toggleFolder(item);
            } else {
              setActiveTab(item.id); // Set the active tab to the file name
            }
          }}
        >
          {item.type === "folder" ? (
            <>
              {item.expanded ? (
                <ChevronDown className="h-4 w-4 text-gray-400 mr-1" />
              ) : (
                <ChevronRight className="h-4 w-4 text-gray-400 mr-1" />
              )}
              <AiOutlineFolder className="h-4 w-4 text-blue-400 mr-2" />
              <span className="text-gray-300">{item.name}</span>
            </>
          ) : (
            <div className="flex items-center w-full">
              {item.type === "react" ? (
                <FaReact
                  className={`h-4 w-4 mr-2 ${
                    activeTab === item.id ? "text-blue-400" : "text-gray-400"
                  }`}
                />
              ) : (
                <AiOutlineFile
                  className={`h-4 w-4 mr-2 ${
                    activeTab === item.id ? "text-gray-300" : "text-gray-400"
                  }`}
                />
              )}
              <span
                className={`${
                  activeTab === item.id ? "text-white font-bold" : "text-gray-400"
                }`}
              >
                {item.name}
              </span>
            </div>
          )}
        </div>

        {item.expanded && item.children && (
          <div>
            {item.children.map((child) => renderFileItem(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-gray-900 text-white p-2 h-full overflow-y-auto font-mono text-xs">
      {files.map((file) => renderFileItem(file))}
    </div>
  );
}
