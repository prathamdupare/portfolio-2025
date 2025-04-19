export function Skills() {
  return (
    <div>
      <div className="text-green-400 mb-4"> Technical Skills</div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="text-yellow-300 mb-2">Languages</div>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>JavaScript / TypeScript</li>
            <li>HTML / CSS</li>
            <li>Python</li>
            <li>SQL</li>
          </ul>
        </div>

        <div>
          <div className="text-yellow-300 mb-2">Frameworks & Libraries</div>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>React / Next.js</li>
            <li>Node.js / Express</li>
            <li>Tailwind CSS</li>
            <li>Redux / Zustand</li>
          </ul>
        </div>

        <div className="mt-4">
          <div className="text-yellow-300 mb-2">Tools & Platforms</div>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Git / GitHub</li>
            <li>Docker</li>
            <li>AWS / Vercel</li>
            <li>VS Code</li>
          </ul>
        </div>

        <div className="mt-4">
          <div className="text-yellow-300 mb-2">Other Skills</div>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>RESTful API Design</li>
            <li>Database Design</li>
            <li>CI/CD Pipelines</li>
            <li>Agile Methodologies</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
