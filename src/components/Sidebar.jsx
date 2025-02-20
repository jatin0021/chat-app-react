import Navbar from "../components/Navbar"
import Chats from "./Chats"
import Search from "./Search"
const Sidebar = () => {
  return (
    <div className="flex-1 bg-[#3e3c61]  text-white">
     <Navbar />
     <Search />
     <Chats />
     <Chats />
     <Chats />
     <Chats />
      </div>
  )
}

export default Sidebar