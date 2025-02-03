"use client";

import Navigation from "./components/nav";
import Image from "next/image";
import avatar from "../../public/bkAvatar.svg";
import Contact from "./components/contact";

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
    <div>
      <Navigation />
      <div id="home" className="flex flex-row justify-center space-x-72">
        <div>
          <h2 className="mt-48 text-purple-500 text-5xl">
            &lt;Brendan
            <br /> Kersey/&gt;
          </h2>
          <p className="text-center">Full Stack Developer.</p>
        </div>
        <Image src={avatar} alt="Brendan's Avatar" height={400} width={400} />
      </div>
      <div className="mt-36 ml-24 flex justify-around">
        <div className="flex flex-col w-1/2" id="about">
          <h2 className="text-4xl text-purple-500">About:</h2>
          <p className="">
            Hello! My name is Brendan and I am a full stack developer. I have 3
            years expierience building scalable web applications. Recently
            developed a company portal for a national organization, enabling
            users to generate sales reports, request administrative services,
            and manage vendor orders and credits. Adept at designing and
            implementing end-to-end solutions using the MERN stack (MongoDB,
            Express.js, Next.js, Node.js), with a strong focus on performance,
            usability, and maintainability. Experienced in GraphQL, database
            optimization, and API development. Recognized for problem-solving
            skills, attention to detail, and a collaborative approach to
            software development. Known for improving code efficiency, mentoring
            team members, and troubleshooting complex issues. Passionate about
            building user-friendly applications that drive business success.
            Want to know more? Download my resume!
          </p>
          <a
            className="border p-2 rounded-md ml-44 mt-4 w-fit bg-purple-500 hover:bg-purple-700"
            download={"BrendanKerseyResume.pdf"}
            href="/portfoliov2/BrendanKerseyResume.pdf"
          >
            Download Resume
          </a>
        </div>
        <div className="flex w-1/2 flex-col" id="skills">
          <h2 className="text-4xl text-purple-500">Skills:</h2>
          <ul className="list-disc">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
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
      <div className="flex justify-center ml-24 flex-col" id="projects">
        <h2 className="text-purple-500 mt-20 text-4xl">Projects:</h2>
        <div className="flex space-x-4">
          {projects.map((project, i) => (
            <div key={project.name}>
              <img
                src={`/portfoliov2/${i}.png`}
                alt={project.name}
                className="img-thumbnail mx-1"
                key={i}
                width={256}
                height={256}
              />
              <h2>
                <a href={project.link}>{project.name}</a>
              </h2>
            </div>
          ))}
        </div>
      </div>
      <div id="contact">
        <h2 className="text-purple-500 mt-20 text-4xl ml-24">Contact Me:</h2>
        <Contact />
      </div>
    </div>
  );
}
