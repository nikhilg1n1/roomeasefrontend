export function Detail({label,value}) {
    return (
        <div>
            <p className={"text-md text-gray-500"}>{label}</p>
            <p className={"text-md text-gray-800"}>{value}</p>
        </div>
    )
}