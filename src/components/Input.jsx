import img from "../img/img.png"
import attach from "../img/attach.png"
const Input = () => {
  return (
    <div className="h-[50px] bg-white p-2 flex justify-between ">
        <input className="w-[88%] border-none outline-none flex " type="text" placeholder="type something..." />
        <div className="flex  gap-2.5 items-center">
            <img className="cursor-pointer" src={attach} alt="" />
            <input type="file" style={{display:"none"}} />
            <label htmlFor="file">
                <img className="h-6 w-6 cursor-pointer" src={img} alt="" />
            </label>
            <button className=" cursor-pointer border-none px-1 py-1 rounded-md text-white bg-[#8da4f1]">Send</button>
        </div>
    </div>
  )
}

export default Input