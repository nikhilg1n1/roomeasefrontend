import Button from "@/components/Button.jsx";

function successPage(){
    return(
        <div className={"flex flex-col text-center justify-center items-center h-screen gap-6"}>
            <img/>
            <h1 className={"text-3xl font-bold text-green-600"}>
                    Room Listed Successfully!
            </h1>
            <p>
                Your property is live now . you can view or edit it anytime.
            </p>
                <Button variant="contained" to={"/"} color="primary"> Go Home</Button>
        </div>
    )
}
export  default successPage;