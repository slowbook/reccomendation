import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupFunction = async () => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/signup`, {
        name,
        email,
        password,
      });
      const recievedToken = res.data.token;
      if (!recievedToken) {
        alert("User already exists");
        return;
      }
      localStorage.setItem("token", `Bearer ${recievedToken}`);
      navigate("/main");
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <div>
      <div className="flex justify-around">
        <input
          type="text"
          className="border-2 border-amber-700"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          className="border-2 border-amber-700"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          className="border-2 border-amber-700"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div className="flex justify-center my-2">
        <button
          className="border-2 border-red-500"
          onClick={signupFunction}
        >
          Signup
        </button>
      </div>
    </div>
  );
}

export default SignUp;
