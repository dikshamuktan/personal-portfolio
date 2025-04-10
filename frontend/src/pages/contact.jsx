import whiteflowerimg from "../assets/images/whiteflower.jpg";
import flowerimg from "../assets/images/flowerbg.jpg";
export function ContactPage() {
  return (
    <div className="container  h-[700px] flex justify-center ">
      <div className="relative w-full justify-center flex ">
        <img
          className="absolute h-full w-full opacity-50  object-cover right-0 bottom-0 "
          src={whiteflowerimg}
        />
        <h1 className="absolute z-10 stylefont text-sm text-white mt-3">
          Contact Me
        </h1>
      </div>
    </div>
  );
}

export default ContactPage;
