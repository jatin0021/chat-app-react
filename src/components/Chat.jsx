import cam from "../img/cam.png"
import add from "../img/add.png"
import more from "../img/more.png"

const Chat = () => {
  return (
    <div className="flex-2 ">
       <div className="chatinfo">
        <span></span>
        <div className="chaticon">
            <img src={cam} alt="" />
            <img src={add} alt="" />
            <img src={more} alt="" />
        </div>
       </div>
    </div>
  )
}

export default Chat