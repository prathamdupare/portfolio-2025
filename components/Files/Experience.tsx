export function Experience() {
  return (
    <div className="space-y-6">
      <div className="text-green-400 mb-2">Work Experience</div>

      {[
        {
          role: "Senior Developer",
          company: "Tech Company",
          period: "2022 - Present",
          description:
            "Led development of key features and mentored junior developers.",
        },
        {
          role: "Full Stack Developer",
          company: "Startup Inc",
          period: "2020 - 2022",
          description:
            "Built and maintained multiple web applications using React and Node.js.",
        },
        {
          role: "Junior Developer",
          company: "First Job Ltd",
          period: "2018 - 2020",
          description:
            "Contributed to frontend development and learned industry best practices.",
        },
      ].map((job, i) => (
        <div key={i} className="border-l-2 border-gray-700 pl-4">
          <div className="text-blue-400 font-semibold">{job.role}</div>
          <div className="flex justify-between text-sm">
            <span className="text-purple-400">{job.company}</span>
            <span className="text-gray-500">{job.period}</span>
          </div>
          <div className="mt-2 text-gray-300">{job.description}</div>
        </div>
      ))}

      <div className="text-green-400 mt-6 mb-2">Education</div>
      <div className="border-l-2 border-gray-700 pl-4">
        <div className="text-blue-400 font-semibold">
          BS in Computer Science
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-purple-400">University Name</span>
          <span className="text-gray-500">2014 - 2018</span>
        </div>
      </div>
    </div>
  );
}
