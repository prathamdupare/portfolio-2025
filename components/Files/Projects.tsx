export function Projects() {
  return (
    <div className="space-y-6">
      <div className="text-green-400 mb-2">Featured Projects</div>

      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="border border-gray-700 rounded-md p-4 bg-gray-800/50"
        >
          <div className="text-blue-400 text-lg font-semibold mb-2">
            Project {i}
          </div>
          <div className="text-gray-300 mb-3">
            A brief description of project {i} and what technologies were used
            to build it.
          </div>
          <div className="flex gap-2 mb-3">
            {["React", "TypeScript", "Tailwind"].map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-gray-700 text-xs rounded text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-3 text-sm">
            <a href="#" className="text-purple-400 hover:underline">
              View Demo
            </a>
            <a href="#" className="text-purple-400 hover:underline">
              GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
