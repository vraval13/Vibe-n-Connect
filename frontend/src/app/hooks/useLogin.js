"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "@/app/contexts/AuthContext"; // Import useAuthContext
import { useRouter } from "next/navigation"; // Import useRouter

const useLogin = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();
	const router = useRouter(); // Initialize useRouter

	const login = async (userName, password) => {
		const success = handleInputErrors(userName, password);
		if (!success) return;
		setLoading(true);
		try {
			const res = await fetch("http://localhost:3001/api/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				credentials: "include",
				body: JSON.stringify({ userName, password }),
			});

			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}

			toast.success("Login Successfully!");
			localStorage.setItem("chat-user", JSON.stringify(data));
			setAuthUser(data);

			// Redirect to the home page
			router.push("/"); // Redirect to the home page after login

		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, login };
};

export default useLogin;

function handleInputErrors(userName, password) {
	if (!userName || !password) {
		toast.error("Please fill in all fields");
		return false;
	}

	return true;
}
