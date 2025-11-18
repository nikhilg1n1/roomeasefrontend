function ServerErrorPage() {
    return (
        <section className={"flex flex-col items-center mt-40"}>
            <h1 className={"text-4xl text-red-600"}>
                500 Internal server error
            </h1>
            <p className={"mt-4"}>
                Currently the server is under maintenance or update
            </p>
        </section>
    )
}
export default ServerErrorPage;