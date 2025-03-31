import css from "../../assets/images/css.png";
import html from "../../assets/images/html.png";
import js from "../../assets/images/js.png";
import react from "../../assets/images/reactjs.png";
import nodejs from "../../assets/images/nodejs.png";
import ts from "../../assets/images/ts.png";
import mongodb from "../../assets/images/mongodb.png";
import github from "../../assets/images/github.png";
import slack from "../../assets/images/slack.png";
import vite from "../../assets/images/vite.png";

function Slider() {
  return (
    <div>
      <div className="flex gap-9 ">
        <label className="flex items-center text-md gap-1">
          <img className="w-10 h-10" src={html} />
          <span className="mt-3">HTML</span>
        </label>

        <label className="flex items-center text-md gap-1">
          <img className="w-10 h-10" src={css} />
          <span className="mt-3">CSS</span>
        </label>

        <label className="flex items-center text-md gap-1">
          <img className="w-10 h-9 object-cover" src={js} />
          <span className="mt-3">Java Script</span>
        </label>
        <label className="flex items-center text-md gap-1">
          <img className="w-10 h-10" src={react} />
          <span className="mt-3">React Js</span>
        </label>
        <label className="flex items-center text-md gap-1">
          <img className="w-10 h-10" src={nodejs} />
          <span className="mt-3">Node Js</span>
        </label>
        <label className="flex items-center text-md gap-1">
          <img className="w-10 h-10" src={mongodb} />
          <span className="mt-3">Mongodb </span>
        </label>
        <label className="flex items-center text-md gap-1">
          <img className="w-10 h-10 bg-white rounded-full p-1" src={github} />
          <span className="mt-3">Git </span>
        </label>
        <label className="flex items-center text-md gap-1">
          <img className="w-10 h-10" src={slack} />
          <span className="mt-3">Slack </span>
        </label>
        <label className="flex items-center text-md gap-1">
          <img className="w-10 h-10 bg-white rounded-md p-1" src={ts} />
          <span className="mt-3">Type Script</span>
        </label>
        <label className="flex items-center text-md gap-1">
          <img className="w-11 h-11 rounded-md p-1" src={vite} />
          <span className="mt-3">Vite</span>
        </label>
      </div>
    </div>
  );
}

export default Slider;
