import { AuthContext } from "@/Context/AuthContext";
import { clsx } from "clsx";
import { useContext } from "react";
import { twMerge } from "tailwind-merge"

// const {api} = useContext(AuthContext)

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

