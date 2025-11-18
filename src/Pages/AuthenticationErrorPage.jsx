function AuthenticationErrorPage(){
    return (
        <section className={"flex flex-col items-center mt-40"}>
            <h1 className={"text-4xl text-red-600"}>
                Authentication Error
            </h1>

            <p className={"mt-4"}>
                Something went wrong while logging in.
            </p>
        </section>
    )
}
export default AuthenticationErrorPage;