
function NotFoundPage(){
    return (
        <section className={"flex flex-col items-center mt-40"}>
            <h1 className={"text-4xl text-red-600"}>
                404 Page Not Found
            </h1>

            <p className={"mt-4"}>
                The resource you are trying to access doesn't exist
            </p>
        </section>
    )
}
export default NotFoundPage;