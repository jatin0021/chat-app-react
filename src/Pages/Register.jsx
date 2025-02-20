import Add from "../img/addAvatar.png"

const Register = () => {
  return (
    <div className="flex h-screen justify-center items-center bg-[#a7bcff]">
        <div className="bg-white px-8 py-[56px] w- rounded-xl flex flex-col gap-2.5 items-center">
            <span className="text-[#5d5b8d] font-bold text-2xl">Friends Chat</span>
            <span className="text-[#5d5b8d] text-xs">Register</span>
            <form className="flex flex-col gap-[15px]">
                <input type="text" placeholder='enter name' className="p-3.5 border-0 w-64 border-b-[1px] border-b-[#a7bcff]" />
                <input type="email" placeholder='enter email' className="p-3.5 border-0 w-64 border-b-[1px] border-b-[#a7bcff]" />
                <input type="password" placeholder='set password' className="p-3.5 border-0 w-64 border-b-[1px] border-b-[#a7bcff]" />
                <input style={{display:"none"}} type="file" id="file"/>
                <label htmlFor="file" className="flex items-center gap-2.5 text-[#8da4f1] text-[12px] cursor-pointer">
                <img src={Add} alt="" />
                <span>Add an avatar</span>
                </label>
                <button className="bg-[#7b96ec] p-2.5 border-0 cursor-pointer font-bold">Sign up</button>
            </form>
            <p className="text-[#5d5b8d] text-xs mt-2.5">you do have an account? <span className="cursor-pointer underline">Login</span> </p>
        </div>
    </div>
  )
}

export default Register