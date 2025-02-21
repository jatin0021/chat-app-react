import cam from "../img/cam.png";
import add from "../img/add.png";
import more from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="flex-2">
    <div className="flex-2 h-12 p-2 text-gray-300 bg-[#5d5b8d] flex items-center justify-between">
      <span>Raghav</span>
      <div className="flex gap-2.5">
        <img src={cam} alt="" />
        <img src={add} alt="" />
        <img src={more} alt="" />
    
      </div>
     </div>
    <Messages />
    <Input />
  </div>
  );
};

export default Chat;
