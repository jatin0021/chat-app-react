import { useState } from "react";
import { auth } from "../Firebase"; // Import Firebase authentication
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      // ✅ Authenticate user with Firebase
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="flex h-screen justify-center items-center bg-[#a7bcff]">
      <div className="bg-white px-8 py-[56px] w-[360px] rounded-xl flex flex-col gap-2.5 items-center">
        <span className="text-[#5d5b8d] font-bold text-2xl">Friends Chat</span>
        <span className="text-[#5d5b8d] text-xs">Sign in</span>
        <form onSubmit={handleSubmit} className="flex flex-col gap-[15px]">
          <input type="email" placeholder="Enter email" required className="p-3.5 border-0 w-64 border-b-[1px] border-b-[#a7bcff]" />
          <input type="password" placeholder="Enter password" required className="p-3.5 border-0 w-64 border-b-[1px] border-b-[#a7bcff]" />
          <button type="submit" className="bg-[#7b96ec] p-2.5 border-0 cursor-pointer font-bold">Log in</button>
        </form>
        {error && <p className="text-red-500 text-xs mt-2.5">{error}</p>}
        <p className="text-[#5d5b8d] text-xs mt-2.5">
          Do not have an account? <span className="cursor-pointer underline" onClick={() => navigate("/register")}>Register</span>
        </p>
      </div>
    </div>
  );
};

export default Login;