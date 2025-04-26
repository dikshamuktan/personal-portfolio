import whiteflowerimg from "../assets/images/whiteflower.jpg";
import flowerimg from "../assets/images/flowerbg.jpg";
import { ToastContainer, toast } from "react-toastify";
export function ContactPage() {
  const notify = () => toast("Message send successfuly!", {});
  return (
    <div className="w-full h-[700px] flex justify-center ">
      <div className="relative w-full justify-center flex ">
        <img
          className="absolute h-full w-full rounded-xl opacity-40  object-cover right-0 bottom-0 "
          src={whiteflowerimg}
        />
        <h1 className="absolute z-10 stylefont text-sm text-white mt-3">
          Contact Me
        </h1>
        <ToastContainer />
        <form className="mt-26  flex flex-col gap-3 w-2/4">
          <label className="rounded-md  p-2">
            Your Name
            <br />
            <input type="text" placeholder="Name...." />
          </label>
          <label className="rounded-md  p-2">
            Your Email
            <br />
            <input type="text" placeholder="Email...." />
          </label>
          <label className="rounded-md  p-2">
            Contact Number
            <br />
            <input type="text" placeholder="Number...." />
          </label>
          <label className="rounded-md  p-2">
            Message
            <br />
            <textarea type="text" placeholder="Enter your message...." />
          </label>
          <label className="flex text-center">
            <button className="" onClick={notify}>
              Notify!
            </button>
          </label>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
