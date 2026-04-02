import ForgotPassword from "@/components/ForgotPassword";

function ForgotPasswordPage(){
    return(
        <div className="flex min-h-svh bg-black w-full items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-sm">
            <ForgotPassword />
          </div>
        </div>
        )
}
export default ForgotPasswordPage;