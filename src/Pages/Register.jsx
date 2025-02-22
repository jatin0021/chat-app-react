import { useState } from "react";
import { auth } from "../Firebase"; // ✅ Import auth
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Add from "../img/addAvatar.png";

const Register = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      // ✅ Register user in Firebase
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User registered:", res.user);

      // ✅ Redirect to login page
      navigate("/login");
    } catch (err) {
      console.error("Registration Error:", err);
      setError("Registration failed. Try again.");
    }
  };

  return (
    <div className="flex h-screen justify-center items-center bg-[#a7bcff]">
      <div className="bg-white px-5 py-[30px] w-[360px] rounded-xl flex flex-col gap-2.5 items-center">
        <span className="text-[#5d5b8d] font-bold text-2xl">Friends Chat</span>
        <span className="text-[#5d5b8d] text-xs">Register</span>
        <form onSubmit={handleSubmit} className="flex flex-col gap-[15px]">
          <input type="text" placeholder="Enter name" className="p-3.5 border-0 w-64 border-b-[1px] border-b-[#a7bcff]" required />
          <input type="email" placeholder="Enter email" className="p-3.5 border-0 w-64 border-b-[1px] border-b-[#a7bcff]" required />
          <input type="password" placeholder="Set password" className="p-3.5 border-0 w-64 border-b-[1px] border-b-[#a7bcff]" required />
          <input id="file" type="file" style={{ display: "none" }} />
          <label htmlFor="file" className="flex items-center gap-2.5 text-[#8da4f1] text-[12px] cursor-pointer">
            <img src={Add} alt="Add Avatar" className="w-6 h-6" />
            <span>Add an avatar</span>
          </label>
          <button type="submit" className="bg-[#7b96ec] p-2.5 border-0 cursor-pointer font-bold">Sign up</button>
        </form>
        {error && <p className="text-red-500 text-xs mt-2.5">{error}</p>}
        <p className="text-[#5d5b8d] text-xs mt-2.5">Already have an account? <span className="cursor-pointer underline">Login</span></p>
      </div>
    </div>
  );
};

export default Register;