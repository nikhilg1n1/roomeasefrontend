export function Amenities ({label,available}) {
    return(
    <div className={"flex items-center gap-2"}>
        <span className={available ? "text-green-600" : "text-red-500"}>
            {available ? "✔" : "✖"}
        </span>
        <span className={"capitalize text-gray-700 "}>{label.replace(/([A-Z])/g,"$1")}</span>
    </div>
    )
}
