"use client";

import Link from "next/link";

export function Contact() {
  return (
    <div>
      {/* Section Title */}
      <div className="text-green-400 mb-4 text-lg font-semibold">
        {`// Get In Touch`}
      </div>

      <div className="space-y-6">
        {/* Intro Text */}
        <p className="text-gray-300">
          Feel free to reach out if you'd like to collaborate on a project or
          just want to connect!
        </p>

        {/* Contact Info */}
        <div className="bg-gray-800 p-4 rounded-md border border-gray-700">
          <div className="text-yellow-300 mb-2">
            const <span className="text-blue-400">contactInfo</span> = {"{"}
          </div>
          <div className="pl-4">
            <div>
              <span className="text-purple-400">email:</span>{" "}
              <span className="text-green-400">
                "prathmeshdupare@gmail.com"
              </span>
              ,
            </div>
            <div>
              <span className="text-purple-400">github:</span>{" "}
              <Link
                href="https://github.com/prathamdupare"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 underline hover:text-green-300"
              >
                "github.com/prathamdupare"
              </Link>
              ,
            </div>
            <div>
              <span className="text-purple-400">linkedin:</span>{" "}
              <Link
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 underline hover:text-green-300"
              >
                {`"https://www.linkedin.com/in/pratham-dupare-a99b97247"`}
              </Link>
              ,
            </div>
            <div>
              <span className="text-purple-400">twitter:</span>{" "}
              <Link
                href="https://twitter.com/prathammdupare"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 underline hover:text-green-300"
              >
                {`"twitter.com/prathammdupare"`}
              </Link>
            </div>
          </div>
          <div className="text-yellow-300">{"}"}</div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-800 p-4 rounded-md border border-gray-700">
          <div className="text-green-400 mb-2">{`// Send me a message`}</div>
          <form className="space-y-4">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-gray-400 text-sm mb-1"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 text-gray-300 focus:outline-none focus:border-purple-500"
                placeholder="Your Name"
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-400 text-sm mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 text-gray-300 focus:outline-none focus:border-purple-500"
                placeholder="Your Email"
              />
            </div>

            {/* Message Input */}
            <div>
              <label
                htmlFor="message"
                className="block text-gray-400 text-sm mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 text-gray-300 focus:outline-none focus:border-purple-500"
                placeholder="Your Message"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-label="Send Message"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
