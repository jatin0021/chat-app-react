import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // ✅ Import Auth Context
import { auth } from "../Firebase";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth(); // ✅ Get the current user

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/register");
  };

  return (
    <div className="flex items-center bg-[#2f2d52] h-12 p-2.5 justify-between text-[#ddddf7]">
      <span className="font-bold">Friends Chat</span>
      <div className="flex gap-2 items-center">
        <img
          src="https://img.lovepik.com/element/45016/4170.png_860.png"
          alt=""
          className="bg-[#ddddf7] h-6 w-6 rounded-full object-cover"
        />
        <span>{currentUser ? currentUser.displayName : "Guest"}</span> {/* ✅ Show User Name */}
        <button className="bg-white cursor-pointer text-black rounded-md p-1" onClick={handleLogout}>
          Log out
        </button>
      </div>
    </div>
  );
};

export default Navbar;