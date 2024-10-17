"use client";
import Conversations from "./Conversations.js";
import LogoutButton from "./LogoutButton.js";
import SearchInput from "./SearchInput.js";
import { useAuthContext } from "@/app/contexts/AuthContext"; // Ensure auth context is available

function SideBar() {
  const { authUser } = useAuthContext();

  // Debug: Log authUser values
  console.log("authUser:", authUser);

  return (
    <div className="border-r border-slate-500 p-4 flex flex-col h-full" style={{
      boxShadow:"rgb(38, 57, 77) 0px 20px 30px -10px;",
      background: "black",
      borderRadius:"10px"
    }}>
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <div className="mt-auto">
        <LogoutButton
          // userName={authUser?.name || "Guest"} // Fallback to "Guest"
          profilePic={authUser?.profilePic || "/default-avatar.png"} // Fallback to default avatar
        />
      </div>
    </div>
  );
}

export default SideBar;
