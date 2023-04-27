//Q_2

import { useState } from "react";
import ColorCount from "./components/ColorCount";
import RGB from "./components/RGB";

const App = () => {
  const [rgb, setRGB] = useState([
    { id: 1, title: "RED", color: "text-red-500", count: 255 },
    { id: 2, title: "BLUE", color: "text-blue-700", count: 255 },
    { id: 3, title: "GREEN", color: "text-green-500", count: 255 },
  ]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 p-5">
        <div className="grid grid-cols-3 md:grid-cols-1 gap-5">
          {rgb.map((item) => (
            <ColorCount
              key={item.id}
              id={item.id}
              title={item.title}
              color={item.color}
              count={item.count}
              setRGB={setRGB}
              rgb={rgb}
            />
          ))}
        </div>
        <div className="flex flex-col items-center justify-center">
          <RGB colorRgb={[rgb[0].count, rgb[1].count, rgb[2].count]} />
        </div>
      </div>
    </>
  );
};

export default App;

// Q_1;

// import { useState } from "react";
// import ButtonColor from "./components/ButtonColor";

// function App() {
//   const [color, setColor]: any = useState([]);
//   const randomFun = () => {
//     const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
//     setColor([randomColor, ...color]);
//   };
//   return (
//     <>
//       <div className="flex justify-start flex-col p-10 overflow-hidden  h-[100vh]">
//         <button
//           className="px-[6rem] py-4 mb-10 border-2 border-gray-400 text-lg font-semibold w-fit hover:border-gray-800 transition duration-200 text-gray-400 hover:text-gray-800 rounded-md
//           mx-auto"
//           onClick={() => {
//             randomFun();
//           }}
//         >
//           add color
//         </button>

//         <div className="overflow-y-scroll p-4 w-[55% ]  mx-auto">
//           <div className="flex flex-col space-y-5 justify-center mx-auto  ">
//             {color.map((item: any) => (
//               <ButtonColor item={item} key={item} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
