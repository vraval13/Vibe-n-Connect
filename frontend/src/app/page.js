"use client";
import Home from "./home/page.js";
import Login from "./login/page.js";
import Signup from "./signup/page.js";
import { useAuthContext } from "@/app/contexts/AuthContext.js";
export default function App() 
{
  const { isAuthenticated } = useAuthContext();
  return (
    <>
      <div className='p-4 h-screen flex items-center justify-center'>
        {/* <Login/> */}
        {/* <Signup/> */}
        {/* <Home/> */}
        {isAuthenticated ? <Home /> : <Login />}
      </div>
    </>
  );
}
