import { useState } from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Label } from "@/components/ui/label"
  import{isValidEmail} from "../utilities/EmailValid"
  import { Input } from "@/components/ui/input"
  import { Button } from "@/components/ui/button"
  import { Eye, EyeOff } from "lucide-react"
  import { cn } from "@/lib/utils"
  import googlelogo from "../assets/search.png"
import { useContext } from "react"
import { AuthContext } from "@/context/AuthContext"
import OtpModel from "./OTPModel"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function ForgotPassword({className, ...props}) {
    const { api , login} = useContext(AuthContext)
    const navigate = useNavigate()
    const [showOtp,setShowOtp] = useState(false)
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const[error,setError] = useState("")
    const[email,setEmail] = useState("");
    const[success, setSucces] = useState("")
    const[password,setPassword] = useState("");
    const[confirmPassword,setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const handleSignIn = async(e)=>{
        console.log("here in the handleSignin Function");
        if(!isValidEmail(email)){
            setEmailError("Enter Valid email...!")
            return;

        }
        if(password.length<6 || confirmPassword.length<6){
            setPasswordError("Password must have 6 charecters")
            return;
        }
        if(password !== confirmPassword){
            setPasswordError("Password is not macthing")
            return;
        }

        
        e.preventDefault();

        try{
            const res = await api.post("/v1/users/forgotpass",{
                email,password
            });

            setSucces("Password Changed successfully")
            
            
              

            // if(res.data === "")
            // const {access_token , user} = res.data;

            // localStorage.setItem("access_token",access_token);
            // login(user);
            // console.log("Login Success",user);

        }catch(error){
            console.error("Otp sent Failed",error);
            
        }
    
    }

    return (
        // <div className={cn("flex flex-col gap-6", className)} {...props}>
        <div className=" w-400 h-400 min-h-screen flex items-center justify-center bg-black">

            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Forgot Password</CardTitle>
                    <CardDescription>
                        {/*Enter your email below to login to your account*/}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSignIn}>                          
                        <div className="w-80 flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" 
                                    value={email} 
                                    type="email" 
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={`${emailError ? "border-red-700 border-2 text-red-700  focus:ring-red-700": ""}`}
                                    placeholder="m@example.com"
                                     required />
                            </div>
                            {emailError && <p className="text-red-700 text-md">{emailError}</p>}
                            <div className="grid gap-2 relative">
                                <div className="flex items-center">
                                    <Label htmlFor="newPassword">New Password</Label>
                                    {/* <a
                                        href="#"
                                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                                        Forgot your password?
                                    </a> */}
                                </div>
                                <Input id="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={`${passwordError ? "border-red-700 border-2 text-red-700 focus:ring-red-700": ""}`}

                                type={showPassword ? "text" : "password"} 
                                required />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-2/4 mt-4 -translate-y-1/2"
                                >
                                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>

                                {/* {passwordError && <p className="text-red-700 text-sm">{passwordError}</p>} */}

                            </div>

                            <div className="grid gap-2 relative">
                                <div className="flex items-center">
                                    <Label htmlFor="confirmNewPassword">Confirm New Password</Label>
                                    {/* <a
                                        href="#"
                                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                                        Forgot your password?
                                    </a> */}
                                </div>
                                <Input id="confirmPassword" 
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className={`${passwordError ? "border-red-700 border-2 focus:ring-red-700": ""}`}
                                type={showConfirmPassword ? "text" : "password"} 
                                required />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-2/4 mt-4 -translate-y-1/2"
                                >
                                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>

                            </div>
                            
                            {passwordError && <p className="text-red-700 text-md">{passwordError}</p>}
                                {error && <p className="text-red-700 text-md">{error}</p>}
                                {success && <p className="text-green-700 text-md">{success}</p>}

                            <Button type="button" onClick={handleSignIn} className="w-full">
                                Continue
                            </Button>
                            {/* <Button variant="submit"
                                className="w-full bg-black gap-4 text-white"
                                onClick={""}>
                                <img src={googlelogo} width={18} height={18} />Sign in with Google
                            </Button> */}
                        </div>
                        {/* <div className="mt-4 text-center text-sm">
                            Don&apos;t have an account?{" "}
                            <a href="#" className="underline underline-offset-4">
                                Sign up
                            </a>
                        </div> */}
                    </form>
                    

                </CardContent>
            </Card>
            {/* {showOtp && (
                <OtpModel
                  email={email}
                  password={password}
                  onSuccess={(data) => {
                    localStorage.setItem("access_token", data.access_token);
                    console.log(data.access_token);
                    console.log(data.user);
                    
                    login(data.user);
                    navigate("/");
                  }}
                  onClose={() =>setShowOtp(false)}
                />
              )} */}
        </div>
    )
}
export default ForgotPassword