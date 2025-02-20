

const Chats = () => {
  return (
    <div className="flex flex-2 hover:bg-[#2f2d52] cursor-pointer">
        <div className="p-3 flex items-center gap-3 hover:bg-[#2f2d52] cursor-pointer">
            <img className="w-12 h-12 rounded-full object-cover" src="https://img.lovepik.com/element/45016/4170.png_860.png" alt="" />
            <div className="userchat info">
                <span className="font-bolder text-4 ">
                    Raghav
                </span>
                <p className="text-3 text-gray-200">hello</p>

            </div>
        </div>
    </div>
  )
}

export default Chats