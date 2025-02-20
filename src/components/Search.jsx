
const Search = () => {
  return (
    <div className="border-t-[1px] border-gray-400 ">
        <div className="p-3">
        <input type="text" placeholder="find anyone" className="bg-transparent border-none text-white" />
        </div>
        <div className="p-3 flex items-center gap-3  hover:bg-[#2f2d52] cursor-pointer">
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

export default Search