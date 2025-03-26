import { Github, Instagram, Mail } from "lucide-react";
import Slider from "../components/ui/slider";
export function LandingPage() {
  return (
    <div className="flex flex-col items-center gap-11 justify-center">
      <div className="smallContainer p-3 rounded-lg border border-gray-600">
        <div className="flex justify-end gap-3">
          <a
            className="border border-gray-600 p-1 rounded-md"
            href="https://github.com/dikshamuktan?tab=overview&from=2024-12-01&to=2024-12-31"
          >
            <Github />
          </a>
          <a className="border border-gray-600 p-1 rounded-md" href="">
            <Mail />
          </a>
          <a
            className="border border-gray-600 p-1 rounded-md"
            href="https://www.instagram.com/l.diksha/"
          >
            <Instagram />
          </a>
        </div>
        <div className="flex h-3/5 gap-6 mt-11 px-3 ">
          <img
            className="object-cover rounded-lg "
            src="https://images.pexels.com/photos/31289592/pexels-photo-31289592/free-photo-of-young-woman-in-nature-with-bright-foliage.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
          />
          <div className="flex flex-col p-2">
            <h1 className="text-3xl purple">Diksh@ Muktan</h1>
            <p className="text-2xl">I'm a Full Stack Developer</p>
          </div>
        </div>
      </div>
      <div>
        <Slider />
      </div>
    </div>
  );
}

export default LandingPage;
