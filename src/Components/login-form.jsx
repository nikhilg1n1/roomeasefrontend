import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import axios from "axios"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react";
import googlelogo from "../assets/search.png"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom";
import {useGoogleLogin} from "@react-oauth/google";


export function LoginForm({
  className,
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false)
  // const loginWithGoogle = useGoogleLogin({
  //   scope: 'openid profile email',  //ensures Google sends email & profile
  //   onSuccess: async(tokenResponse)=>{
  //     const userInfo = await axios.get(
  //         "https://www.googleapis.com/oauth2/v3/userinfo",
  //         {
  //           headers: {Authorization: `Bearer ${tokenResponse.access_token}`}
  //         }
  //     );
  //     console.log(userInfo.data);
  //     },
  //     onError: err => {console.log("Google Login Failed",err)}
  // });

  const handleLogin = () =>{
    window.location.href="http://localhost:8080/oauth2/authorization/google"


  };
  return (
    (<div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            {/*Enter your email below to login to your account*/}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </div>
              <div className="grid gap-2 relative">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type={showPassword ? "text" : "password"} required />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2/4 mt-4 -translate-y-1/2"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>

              </div>
              <Button type="button" className="w-full">
                Login
              </Button>
              <Button variant="submit"
                      className="w-full bg-black gap-4 text-white"
                      onClick={handleLogin}>
                <img src={googlelogo} width={18} height={18}/>Sign in with Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="/signup" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>)
  );
}
