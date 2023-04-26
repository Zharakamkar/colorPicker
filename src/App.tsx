import { useState } from "react";
import ButtonColor from "./components/ButtonColor";

function App() {
  const [color, setColor]: any = useState([]);
  const randomFun = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor([...color, randomColor]);
  };
  return (
    <>
      <div className="flex justify-center flex-col p-10">
        <button
          className="px-[6rem] py-4 mb-20 border-2 border-gray-400 text-lg font-semibold w-fit hover:border-gray-800 transition duration-200 text-gray-400 hover:text-gray-800 rounded-md
          mx-auto"
          onClick={() => {
            randomFun();
          }}
        >
          add color
        </button>
        <div className="flex flex-col space-y-5 justify-center ">
          {color.map((item: any) => (
            <ButtonColor item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
