const RGB = ({ colorRgb }: any) => {
  const color = `RGB(${colorRgb[0]}, ${colorRgb[1]} , ${colorRgb[2]}) `;

  return (
    <>
      <div
        className="w-2/5 h-[5rem] mt-8 md:mt-0 md:w-3/5  md:h-1/5 rounded-md  font-bold border-2 border-gray-700 flex flex-col items-center justify-center "
        style={{ backgroundColor: color }}
      >
        {color}
      </div>
    </>
  );
};

export default RGB;
