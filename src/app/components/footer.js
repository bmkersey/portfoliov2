import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-16">
      <div className="flex justify-center items-center space-x-6">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/brendankersey"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          <Image src="/portfoliov2/linkedinicon.svg" width={24} height={24} alt="LinkedIn Icon"/>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/bmkersey"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition"
        >
          <Image src="/portfoliov2/githubicon.svg" width={24} height={24} alt="Github Icon"/>
        </a>
      </div>
      <p className="text-center text-sm text-gray-400 mt-2">
        © {new Date().getFullYear()} Brendan Kersey. All rights reserved.
      </p>
    </footer>
  );
}
