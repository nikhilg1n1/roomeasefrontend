import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle

} from "./ui/dialog";
import { AuthContext } from "@/Context/AuthContext";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { AlignRight } from "lucide-react";
import api from "@/Constants/api";
import { useContext } from "react";

export default function OtpModel({email,password,onSuccess,onClose }) {
    const [otp, setOtp] = useState("");
    const { api , login} = useContext(AuthContext)

    const handleSubmit = () => {
        if (otp.length !== 6) return alert("Enter Valid Otp");
    };

    const verifyOtp = async() =>{
        try{
        console.log("Inside the try block");
            
        if (otp.length !== 6) return alert("Enter Valid Otp");
        const res = await api.post("/v1/users/auth/verifyOtp",{email,password,otp})
        console.log(res.data);
        
        console.log(res.data.access_token);
    
        localStorage.setItem("access_token",res.data.access_token)
        // api.defaults.headers.common["Authorization"] = `Bearer ${res.data.access_token}`;

        onSuccess(res.data);
        }catch(e){
            console.log("error is :" , e);
            
            alert("Invalid OTP")
        }
        
    }

    return (
        <Dialog open={open} onOpenChange={onClose} className="bg-gray-800 opacity-15">
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Verify Otp</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                    <p className="text-sm text-gray-500">
                        Enter the 6 digit Otp sent on your email
                    </p>
                    <Input
                    placeholder="Enter the Otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    maxLength = {6}
                    />

                    <Button className="w-full" onClick = {verifyOtp}>
                        Verify Otp
                    </Button>

                </div>

            </DialogContent>

        </Dialog>

    );

}