// import { Calculator } from "lucide-react";
// import pronexaimg from "../assets/images/pronexa.png";
// import tmsimg from "../assets/images/tms.png";

// export function MyWorkPage() {
//   return (
//     <div className="flex justify-center">
//       <div className="flex flex-col text-center p-2 gap-3 justify-center mt-1">
//         <h1 className="stylefont font-bold text-4xl">MY Work</h1>
//         <p className="text-2xl ">some website i have work on</p>
//         <div className="flex gap-10 mt-6">
//           <div className="flex flex-col gap-2">
//             <div className="bg-blue-50 w-[650px] h-[500px] rounded-xl flex flex-col gap-3 justify-center items-center">
//               <img
//                 className="w-4/5 h-2/3 object-fill rounded-xl"
//                 src={pronexaimg}
//               />
//               <label className="text-2xl p-1 font-bold  text-green-800 ">
//                 ProNexa Consultancy
//               </label>
//             </div>
//             <label className="text-2xl p-1 font-bold text-white">
//               ProNexa Consultancy
//             </label>
//           </div>

//           <div className="flex flex-col gap-2">
//             <card className="bg-blue-50 w-[650px] h-[500px] rounded-xl flex flex-col gap-3 justify-center items-center">
//               <img
//                 className="w-4/5 h-2/3 object-fill rounded-xl"
//                 src={tmsimg}
//               />
//               <label className="text-2xl p-1 font-bold  text-red-700">
//                 Trade Management System
//               </label>
//             </card>
//             <a href="" className="text-2xl p-1 font-bold  text-white">
//               TMS
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MyWorkPage;

import { Calculator } from "lucide-react";
import pronexaimg from "../assets/images/pronexa.png";
import tmsimg from "../assets/images/tms.png";

export function MyWorkPage() {
  return (
    <div className="flex justify-center px-4">
      <div className="flex flex-col text-center p-2 gap-6 justify-center mt-4 max-w-7xl w-full">
        <h1 className="stylefont font-bold text-4xl">MY Work</h1>
        <p className="text-xl sm:text-2xl">Some websites I have worked on</p>

        <div className="flex flex-col lg:flex-row gap-8 mt-6 items-center lg:items-start">
          {/* Pronexa Card */}
          <div className="flex flex-col gap-2 items-center">
            <div className="bg-blue-50 w-full sm:w-[90%] md:w-[600px] h-[400px] sm:h-[450px] rounded-xl flex flex-col gap-3 justify-center items-center p-4 shadow-lg">
              <img
                className="w-full h-2/3 object-fill rounded-xl"
                src={pronexaimg}
                alt="Pronexa"
              />
              <label className="text-xl sm:text-2xl p-1 font-bold text-green-800">
                ProNexa Consultancy
              </label>
            </div>
            <a
              href="#"
              className="text-lg sm:text-2xl p-1 font-bold text-white no-underline"
            >
              ProNexa Consultancy
            </a>
          </div>

          {/* TMS Card */}
          <div className="flex flex-col gap-2 items-center">
            <div className="bg-blue-50 w-full sm:w-[90%] md:w-[600px] h-[400px] sm:h-[450px] rounded-xl flex flex-col gap-3 justify-center items-center p-4 shadow-lg">
              <img className="w-full h-full" src={tmsimg} />
              {/* <img
                className="w-full h-2/3 object-fill rounded-xl"
                src={tmsimg}
                alt="TMS"c
              /> */}
              <label className="text-xl sm:text-2xl p-1 font-bold text-red-700">
                Trade Management System
              </label>
            </div>
            <a
              href="#"
              className="text-lg sm:text-2xl p-1 font-bold text-white no-underline"
            >
              TMS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyWorkPage;
