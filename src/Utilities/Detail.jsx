export function Detail({label,value}) {
    return (
        <div>
            <p className={"text-sm text-gray-500"}>{label}</p>
            <p className={"text-sm text-gray-800"}>{value}</p>
        </div>
    )
}