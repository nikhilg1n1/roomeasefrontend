import { LoaderCircle } from "lucide-react";
export default function GlobalLoader(){
    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 bg-opacity-5">
            <LoaderCircle className="h-10 w-10 animate-spin text-blue-700"/>
        </div>
    );
}