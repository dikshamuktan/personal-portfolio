import Slider from "../components/ui/slider";

export function LandingPage() {
  return (
    <div className="flex flex-col items-center gap-5 justify-center ">
      <div className=" rounded-lg w-[1000px] h-[520px] ">
        <div className="flex object-cover h-full mt-5 w-full">
          <div className="w-1/2 ">
            <img
              className="w-[400px] rounded-md h-[500px]"
              src="https://images.pexels.com/photos/31278467/pexels-photo-31278467/free-photo-of-stylish-woman-in-cozy-sweater-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            />
          </div>

          <div className=" w-1/2">
            <div className="flex flex-col mt-10">
              <span className="stylefont text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 via-yellow-50 bg-clip-text text-transparent">
                Diksh@ Muktan
              </span>
              <div className="mt-4">
                <p className="text-2xl">Full Stack Developer from Nepal</p>
                <p className="text-md">
                  {/* I'm a passionate and motivated */}
                  full-stack developer with hands-on experience working on
                  real-world projects. I've built applications using
                  technologies like React.js, Node.js, MongoDB, and Tailwind
                  CSS. While I'm still early in my journey, I'm always eager to
                  learn, grow, and take on new challenges. I'm open to any
                  opportunities where I can contribute, collaborate, and sharpen
                  my skills further.
                </p>
              </div>
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
