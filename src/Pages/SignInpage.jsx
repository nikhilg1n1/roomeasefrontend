import SignInForm  from "@/components/SignInForm.jsx"
function SignInPage(){
    return(
        <div className="flex min-h-svh bg-black w-full items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-sm">
            <SignInForm />
          </div>
        </div>
        )
}
export default  SignInPage;