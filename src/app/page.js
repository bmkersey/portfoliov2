"use client";

import Navigation from "./components/nav";
import Image from "next/image";
import avatar from "../../public/bkAvatar.svg";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  const projects = [
    {
      name: "Company Portal",
      link: "https://github.com/bmkersey/company-portal",
    },
    {
      name: "reCOMmend",
      link: "https://github.com/fpierreRun/reCOMmend",
    },
    {
      name: "Cloud Encounter",
      link: "https://benhuf.github.io/encounter-gen/",
    },
    {
      name: "Tech Blog",
      link: "https://github.com/bmkersey/tech-blog",
    },
    {
      name: "Oh Snap",
      link: "https://bmkersey.github.io/photo-port/",
    },
    {
      name: "MyRorschach",
      link: "https://github.com/BenHuf/my-rorschach",
    },
  ];

  return (
    <div className="text-white">
      <Navigation />

      {/* Hero Section */}
      <div
        id="home"
        className="flex flex-col lg:flex-row items-center justify-center lg:space-x-32 p-8"
      >
        <div className="text-center lg:text-left">
          <h2 className="mt-16 text-purple-500 text-4xl md:text-5xl">
            &lt;Brendan
            <br />
            Kersey/&gt;
          </h2>
          <p className="mt-2 text-lg">Full Stack Developer.</p>
        </div>
        <Image
          src={avatar}
          alt="Brendan's Avatar"
          height={300}
          width={300}
          className="mt-6 lg:mt-0"
        />
      </div>

      {/* About & Skills Section */}
      <div className="mt-24 px-6 lg:px-24 flex flex-col lg:flex-row gap-y-8 lg:gap-x-12">
        {/* About Section */}
        <div className="lg:w-1/2" id="about">
          <h2 className="text-3xl md:text-4xl text-purple-500">About:</h2>
          <p className="mt-4 text-base md:text-lg">
            Hello! My name is Brendan and I am a full stack developer with 3
            years of experience building scalable web applications. Recently, I
            developed a company portal for a national organization, enabling
            users to generate sales reports, request administrative services,
            and manage vendor orders and credits. Skilled in MongoDB,
            Express.js, Next.js, and Node.js, with a focus on performance and
            usability.
          </p>
          <a
            className="border p-2 rounded-md mt-4 inline-block bg-purple-500 hover:bg-purple-700 transition"
            download="BrendanKerseyResume.pdf"
            href="/portfoliov2/BrendanKerseyResume.pdf"
          >
            Download Resume
          </a>
        </div>

        {/* Skills Section */}
        <div className="lg:w-1/2" id="skills">
          <h2 className="text-3xl md:text-4xl text-purple-500">Skills:</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4 text-lg list-disc">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>MongoDB</li>
            <li>SQL</li>
            <li>TailwindCSS</li>
            <li>Node.js</li>
            <li>GitHub</li>
            <li>Code Review</li>
            <li>GraphQL</li>
            <li>REST API</li>
          </ul>
        </div>
      </div>

      {/* Projects Section */}
      <div className="mt-24 px-6 lg:px-24" id="projects">
        <h2 className="text-purple-500 text-3xl md:text-4xl">Projects:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {projects.map((project, i) => (
            <div
              key={project.name}
              className="bg-gray-800 p-4 rounded-md shadow-md text-center"
            >
              <img
                src={`/portfoliov2/${i}.png`}
                alt={project.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <h2 className="mt-2 text-lg">
                <a
                  href={project.link}
                  className="text-blue-400 hover:underline"
                >
                  {project.name}
                </a>
              </h2>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-24 px-6 lg:px-24" id="contact">
        <h2 className="text-purple-500 text-3xl md:text-4xl">Contact Me:</h2>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
