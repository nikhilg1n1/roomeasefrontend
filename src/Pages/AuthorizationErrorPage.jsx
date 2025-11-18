function  AuthorizationErrorPage() {
    return (
        <section className={"flex flex-col items-center mt-40"}>
            <h1 className={"text-4xl text-red-600"}>
                Access denied
            </h1>

            <p className={"mt-4"}>
                you don't have access to this page.'
            </p>
        </section>
    )
}
export default AuthorizationErrorPage;