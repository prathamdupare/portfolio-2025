export function About() {
  return (
    <div className="space-y-4">
      <div className="border-b border-gray-700 pb-2">
        <div className="text-green-400">
          const <span className="text-blue-400">developer</span> = {"{"}
        </div>
        <div className="pl-4">
          <div className="text-purple-400">name:</div>{" "}
          <span className="text-yellow-300">{`"Pratham Dupare"`}</span>,
        </div>
        <div className="pl-4">
          <div className="text-purple-400">title:</div>{" "}
          <span className="text-yellow-300"> {`"Software Engineer"`}</span>,
        </div>
        <div className="pl-4">
          <div className="text-purple-400">location:</div>{" "}
          <span className="text-yellow-300"> {`"India"`}</span>,
        </div>
        <div className="pl-4">
          <div className="text-purple-400">bio:</div>{" "}
          <span className="text-yellow-300">
            {`"I'm a software engineer based in India. I specialize in building web applications using React and Node.js."`}
          </span>
        </div>
        <div className="text-green-400">{"}"}</div>
      </div>
    </div>
  );
}
