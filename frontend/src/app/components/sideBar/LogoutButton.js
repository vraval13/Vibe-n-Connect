"use client";
import useLogout from "@/app/hooks/useLogout"; // Ensure this path is correct
import { BiLogOut } from "react-icons/bi";
import { FaBirthdayCake } from "react-icons/fa"; // Emoji for birthday
import Image from "next/image"; // Use Image for profile pic

function LogoutButton({ userName, profilePic }) {
  const { loading, logout } = useLogout(); // Assuming this hook works

  // Debug: Log values received in props
  console.log("LogoutButton -> userName:", userName);
  console.log("LogoutButton -> profilePic:", profilePic);

  return (
    <div className="flex gap-2 items-center hover:bg-gray-700 rounded p-2 py-1 cursor-pointer">
      {/* Display user profile picture */}
      <div className="avatar online">
        <div className="w-12 rounded-full mt-2 mb-2"> {/* Add top and bottom margin */}
          <Image
            src={profilePic || "/default-avatar.png"} // Fallback to default avatar
            alt="User Avatar"
            width={50}
            height={50}
          />
        </div>
      </div>

      {/* Display user name or fallback */}
      <p className="font-bold text-gray-200">
        {/* {userName || "User"} */}
      </p>

      {/* Birthday cake emoji */}
      <span className="text-xl">
        {/* <FaBirthdayCake /> */}
      </span>

      {/* Logout button or loading spinner */}
      {!loading ? (
        <BiLogOut
          className="w-6 h-6 text-white cursor-pointer"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
}

export default LogoutButton;
