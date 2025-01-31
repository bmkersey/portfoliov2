import Navigation from "./components/nav";
import Image from "next/image";
import avatar from "../../public/bkAvatar.svg";

export default function Home() {
  return (
    <div className="">
      <Navigation />
      <div className="flex flex-row justify-center space-x-72">
        <div>
          <h2 className="mt-48 text-purple-500 text-5xl">
            &lt;Brendan
            <br /> Kersey/&gt;
          </h2>
          <p className="text-center">Full Stack Developer.</p>
        </div>
        <Image src={avatar} alt="Brendan's Avatar" height={400} width={400} />
      </div>
    </div>
  );
}
