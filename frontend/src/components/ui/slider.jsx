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

const images = [
  { src: html, name: "HTML" },
  { src: css, name: "CSS" },
  { src: js, name: "JavaScript" },
  { src: react, name: "React" },
  { src: nodejs, name: "Node.js" },
  { src: mongodb, name: "MongoDB" },
  { src: github, name: "GitHub" },
  { src: slack, name: "Slack" },
  { src: ts, name: "TypeScript" },
  { src: vite, name: "Vite" },
];

function Slider() {
  return (
    <div className="overflow-hidden w-ful py-2">
      <h2 className="text-4xl font-bold text-center text-white ">
        <span className="bg-gradient-to-r from-blue-400 to-purple-300 via-amber-600 bg-clip-text text-transparent">
          What I Work With
        </span>
      </h2>
      <div className="relative container mt-6 flex items-center">
        <div className="flex w-max animate-scroll gap-3">
          {[...images, ...images].map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-1 items-center min-w-[100px]"
            >
              <img
                className="w-10 h-11 object-contain"
                src={item.src}
                alt={item.name}
              />
              <span className=" text-white text-sm">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            display: flex;
            width: max-content;
            animation: scroll 20s linear infinite;
          }
        `}
      </style>
    </div>
  );
}

export default Slider;
// import { useState, useEffect } from "react";
// import { Plus, EllipsisVertical } from "lucide-react";
// import { useMarket } from "../../contexts/market/MarketContext";
// import Searchbar from "./searchbar";
// import MarketWatchTable from "./watchlist.Table";
// import { use } from "react";

// function MarketWatch() {
//   const {
//     fetchStockList,
//     fetchWatchList,
//     showListTitleStocks,
//     handleDeleteWatchList,
//     handleEditWatchList,
//     selectedTitle,
//     addOnWatchList,
//     watchList,
//     setWatchList,
//   } = useMarket();

//   const [isOpen, setIsOpen] = useState(false);
//   const [formData, setFormData] = useState({ title: "" });
//   const [savedData, setSavedData] = useState([]);
//   const [visibleDropdown, setVisibleDropdown] = useState(null);
//   const [editingTitle, setEditingTitle] = useState(null);
//   const [newTitle, setNewTitle] = useState("");
//   const [list, setList] = useState();
//   const [error, setError] = useState();

//   useEffect(() => {
//     fetchWatchList();
//     fetchStockList();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (formData.title.trim()) {
//       try {
//         await addOnWatchList(formData.title.trim());
//         setFormData({ title: "" });
//         setIsOpen(false);
//       } catch (error) {
//         console.error("Error saving watchlist:", error);
//       }
//     }
//   };
//   const handleRename = () => {
//     if (newTitle && newTitle !== selectedTitle) {
//       setSavedData((prev) =>
//         prev.map((title) => (title === selectedTitle ? newTitle : title))
//       );
//       setBanksByTitle((prev) => {
//         const { [selectedTitle]: deleted, ...rest } = prev;
//         return { ...rest, [newTitle]: deleted };
//       });
//       setSelectedTitle(newTitle);
//       setEditingTitle(null); // Stop editing
//     }
//   };

//   console.log(watchList);
//   return (
//     <div className="container ms-12 gap-6 flex flex-col">
//       <div className="justify-center items-center flex mt-11">
//         <h1 className="text-2xl font-semibold">MARKET WATCH</h1>
//       </div>
//       <div className="flex justify-between p-2">
//         <div className="flex gap-2 items-center">
//           {watchList.map(
//             (list) =>
//               list && (
//                 <div
//                   className={`${
//                     selectedTitle === list.title
//                       ? "bg-seeWarnings text-black flex gap-3"
//                       : "border-white border-[1px] text-white flex gap-3"
//                   } rounded-md p-2 relative`}
//                   key={list._id}
//                   onClick={() => showListTitleStocks(list.title)}
//                 >
//                   {list.title}
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       setVisibleDropdown(
//                         visibleDropdown === list.title ? null : list.title
//                       );
//                     }}
//                   >
//                     <EllipsisVertical />
//                   </button>
//                   {visibleDropdown === list.title && (
//                     <div className="absolute border bg-black2 text-center left-36 rounded-md shadow-lg mt-9 w-40">
//                       {/* <button
//                     onClick={() => {
//                       setEditingTitle(list._id);
//                       setNewTitle(list.title);
//                       setVisibleDropdown(null);
//                     }}
//                     className="cursor-pointer text-white p-2 hover:bg-gray-800"
//                   >
//                     Rename
//                   </button> */}
//                       <button
//                         onClick={() => {
//                           setNewTitle(title);
//                           setEditingTitle(title);
//                           setVisibleDropdown(null);
//                         }}
//                         className="cursor-pointer text-white p-2 hover:bg-gray-800"
//                       >
//                         Rename
//                       </button>
//                       <button
//                         onClick={() => handleDeleteWatchList(list._id)}
//                         className="cursor-pointer text-red-600 p-2 hover:bg-gray-700"
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               )
//           )}
//           {editingTitle === list.title ? (
//             <div className="flex gap-2 items-center">
//               <input
//                 type="text"
//                 value={newTitle}
//                 onChange={(e) => setNewTitle(e.target.value)}
//                 className="p-2 text-black rounded-lg"
//               />
//               <button
//                 onClick={handleRename}
//                 className="bg-seeWarnings text-black px-2 py-1 rounded"
//               >
//                 Save
//               </button>
//               <button
//                 onClick={() => setEditingTitle(null)}
//                 className="bg-gray-500 text-white px-2 py-1 rounded"
//               >
//                 Cancel
//               </button>
//             </div>
//           ) : (
//             <div className="flex items-center justify-between">
//               <h2 className="text-base font-light">{title}</h2>
//               <button
//                 onClick={() =>
//                   setDropdownVisible(dropdownVisible === title ? null : title)
//                 }
//               >
//                 <EllipsisVertical size={20} />
//               </button>
//             </div>
//           )}

//           <Plus onClick={() => setIsOpen(!isOpen)} />
//           {isOpen && (
//             <form
//               onSubmit={handleSubmit}
//               className="flex bg-black2 w-72 rounded-md gap-2"
//             >
//               <input
//                 type="text"
//                 name="title"
//                 placeholder="Create New Market Watch"
//                 value={formData.title}
//                 onChange={(e) =>
//                   setFormData({ ...formData, title: e.target.value })
//                 }
//                 className="text-black rounded-lg w-60 p-2"
//               />
//               <button
//                 type="submit"
//                 className="bg-seeWarnings text-black p-2 rounded-lg"
//               >
//                 Save
//               </button>
//             </form>
//           )}
//         </div>
//         <Searchbar />
//       </div>
//       <MarketWatchTable />
//     </div>
//   );
// }

// export default MarketWatch;
