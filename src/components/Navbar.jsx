
const Navbar = () => {
  return (
    <div className=" flex items-center bg-[#2f2d52] h-12 p-2.5 justify-between text-[#ddddf7]">
        <span className="font-bold">
            friends Chat
        </span>
        <div className="flex gap-2 items-center">
            <img src="https://img.lovepik.com/element/45016/4170.png_860.png" alt="" className="bg-[#ddddf7] h-6 w-6 rounded-full object-cover"/>
            <span>Jatin</span>
            <button className="bg-white text-black rounded-md p-1">Log out</button>
        </div>
    </div>
  )
}

export default Navbar