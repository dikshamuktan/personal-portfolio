import { Github, Instagram, Mail } from "lucide-react";
import Slider from "../components/ui/slider";
import bgimage from "../assets/images/bgimg.jpg";

export function LandingPage() {
  return (
    <div className="flex flex-col items-center gap-5 justify-center ">
      <div className=" rounded-lg w-[1100px] h-[550px] border border-gray-600">
        <div className="flex object-cover h-full  w-full">
          <div className="relative w-1/2 h-full">
            <img
              src={bgimage}
              className=" object-cover rounded-lg h-full w-[500px]"
            />
            <img
              className="absolute bottom-0 object-cover right-1 w-2/3 h-3/4"
              src="https://images.pexels.com/photos/31289592/pexels-photo-31289592/free-photo-of-young-woman-in-nature-with-bright-foliage.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            />
          </div>
          <div className=" w-1/2">
            <div className="flex justify-end  p-2 gap-3">
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
            <div className="flex flex-col text-center items-center mt-16">
              <h1 className="stylefont text-4xl font-bold">Diksh@ Muktan</h1>
              <p className="text-2xl">I'm a Full Stack Developer from Nepal</p>
            </div>
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
