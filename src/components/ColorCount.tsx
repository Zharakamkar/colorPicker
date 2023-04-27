import { useState } from "react";

const ColorCount = ({ id, title, color, count, setRGB, rgb }: any) => {
  const [tempCount, setTempCount] = useState(count);

  const handelIncrease = () => {
    const newRgb = rgb.map((item: any): any => {
      if (item.id === id) {
        const newCount = count < 255 ? count + 10 : 255;
        setTempCount(newCount);
        return { ...item, count: newCount };
      } else {
        return item;
      }
    });
    setRGB(newRgb);
  };

  const handelDecrease = () => {
    const newRgb = rgb.map((item: any): any => {
      if (item.id === id) {
        const newCount = count > 0 ? count - 10 : 0;
        setTempCount(newCount);
        return { ...item, count: newCount };
      } else {
        return item;
      }
    });
    setRGB(newRgb);
  };

  return (
    <div className="grid grid-cols-1 mb-3" id={id}>
      <h1
        className={`${color} border-t border-b font-bold text-xl border-blue-400 w-fit  mb-2`}
      >
        {title}
      </h1>
      <div className="grid grid-cols-2 md:gap-2 md:grid-cols-1">
        <button
          className="w-full md:px-7 md:w-3/5  rounded-md border-gray-900 text-lg py-3 border-2 font-bold"
          onClick={handelIncrease}
        >
          +
        </button>
        <button
          className="w-full md:px-7 md:w-3/5  rounded-md border-gray-900 text-lg py-3 border-2 font-bold"
          onClick={handelDecrease}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default ColorCount;
