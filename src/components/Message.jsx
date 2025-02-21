const Message = () => {
  return (
    <div className="flex gap-5 mb-5 items-center flex-row-reverse">
      <div className="flex flex-col text-gray-400 font-medium">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src="https://img.lovepik.com/element/45016/4170.png_860.png"
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="max-w-[80%] flex flex-col gap-2.5">
        <p className="bg-white px-4 py-2 rounded-[0px_10px_10px_10px]">hello</p>
        <img className="w-10 h-10 rounded-full object-cover" src="https://img.lovepik.com/element/45016/4170.png_860.png" alt="" />
      </div>
    </div>
  );
};

export default Message;
