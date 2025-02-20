
const Login = () => {
  return (
    <div className="flex h-screen justify-center items-center bg-[#a7bcff]">
        <div className="bg-white px-8 py-[56px] w- rounded-xl flex flex-col gap-2.5 items-center">
            <span className="text-[#5d5b8d] font-bold text-2xl">Friends Chat</span>
            <span className="text-[#5d5b8d] text-xs">Sign in</span>
            <form className="flex flex-col gap-[15px]">
               <input type="email" placeholder='enter email' className="p-3.5 border-0 w-64 border-b-[1px] border-b-[#a7bcff]" />
                <input type="password" placeholder='enter password' className="p-3.5 border-0 w-64 border-b-[1px] border-b-[#a7bcff]" />
                <input style={{display:"none"}} type="file" id="file"/>
                <button className="bg-[#7b96ec] p-2.5 border-0 cursor-pointer font-bold">Log in</button>
            </form>
            <p className="text-[#5d5b8d] text-xs mt-2.5">you do not have an account? Register <span className="cursor-pointer underline">Login</span> </p>
        </div>
    </div>
  )
}

export default Login