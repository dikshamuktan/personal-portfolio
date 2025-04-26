import pronexaimg from "../assets/images/pronexa.png";
import tmsimg from "../assets/images/tms.png";
import easypicsimg from "../assets/images/easypics.png";
export function AboutPage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="stylefont text-5xl font-bold ">About Me</h1>
      <h1>I am a Full Stack Developer</h1>
      <p>
        I have a strong command over both front-end and back-end technologies,
        allowing me to build complete and scalable applications.
      </p>
      {/* <div className="card">
        <img src={pronexaimg} />
      </div>
      <div className="card">
        {" "}
        <img src={tmsimg} />
      </div>
      <div className="card">
        <img src={easypicsimg} />
      </div> */}
    </div>
  );
}

export default AboutPage;
