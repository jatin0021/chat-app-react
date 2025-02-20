
import Chat from "../components/Chat"
import Sidebar from "../components/Sidebar"

const Home = () => {
  return (
    <div>
        <div className="bg-[#a7bcff] flex h-screen items-center justify-center">
            <div className="border-white border-[1px] rounded-xl w-[65%] h-[80%] flex justify-between overflow-hidden">
                <Sidebar />
                <Chat/>

            </div>
        </div>
    </div>
  )
}

export default Home