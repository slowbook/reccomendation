import { useEffect } from "react";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(()=>{
    if (!token) {
      alert("Not auth");
      navigate("/login");
      return;
    }
  } , [navigate])
  
  return (
    <div
      className="relative h-screen  bg-[url(https://images.pexels.com/photos/1643409/pexels-photo-1643409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)]
    bg-cover bg- bg-amber-200"
    >
      <div className=" absolute flex justify-center w-screen h-30 items-center">
        <div className="flex justify-center bg-yellow-500">
          <SearchBar />
          <a className="z-20" href="/main/test">
            abcd
          </a>
        </div>
      </div>


    </div>
  );
}

export default MainPage;
