import { cn } from "@/lib/utils"
import { Button } from "@/Components/ui/button"
// import {zodResolver} from "@hookform/resolvers/zod"
import axios from "axios"
import { Eye, EyeOff } from "lucide-react"
import { useContext, useState } from "react";
import googlelogo from "../assets/search.png"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "@/Context/AuthContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card"
import { Input } from "@/cardomponents/ui/input"
import { Label } from "@/Components/ui/label"
import { Link } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { set } from "react-hook-form";



export function LoginForm({
  className,
  ...props
}) {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const { api, login, setAuthenticated } = useContext(AuthContext);
  const [serverError, setServerError] = useState("")
  const navigate = useNavigate()




  const handleLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google"


  };

  const handleNormalLogin = async () => {
    try {
      setError("")
      const res = await api.post("/v1/users/login", { email, password })
      // localStorage.setItem("access_token", res.data.access_token)
      // // api.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
      // api.defaults.headers.common["Authorization"] = `Bearer ${res.data.access_token}`;
      // api.defaults.headers.common.Authorization = `Bearer ${res.data.access_token}`;

      // console.log(api.defaults.headers.common["Authorization"]);
      // setAuthenticated(true)
      // setUser(res.data)
      if(res.data?.email){
        login(res.data)
        navigate("/")
      }else{
        setError("Email or password is incorrect !!")
      }
      
    
      console.log("response", res.data);
    }
    catch (err) {
      console.log("Login failed ->", err);
      if (err.response?.data?.message) {
        setError("Something went Wrong. Please try again later")
      } else {
        setError("Email or password is incorrect...!")
      }

    }


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
                <Input id="email"
                  value={email}
                  type="email"
                  placeholder="m@example.com"
                  onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="grid gap-2 relative">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="/forgotPassword"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" value={password} type={showPassword ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} required />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2/4 mt-4 -translate-y-1/2"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>

              </div>
              {error && (
                <p className="text-red-700 text-sm text-center">
                  {error}
                </p>
              )}
              <Button type="button" onClick={handleNormalLogin} className="w-full">
                Login
              </Button>
              <Button variant="submit"
                className="w-full bg-black gap-4 text-white"
                onClick={handleLogin}>
                <img src={googlelogo} width={18} height={18} />Sign in with Google
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
