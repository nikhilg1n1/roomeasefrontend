import Button from "./Button";

export default function RoomDashBoardCard({room}){
    return(
        <div className="bg-white rounded-2xl hover:shadow-lg transition overflow-hidden">

            {/* adding Room image */}
            <div className="h-48 bg-gray-200">
                <img 
                    src={room.image} 
                    alt={room.title} 
                    className=" h-full w-full object-cover" />
            </div>
            
            {/* Content */}
            <div className="space-y-3 p-4">

                {/* Title */}
                <div>
                    <h1 className="font-semibold text-lg">{room.title}</h1>
                    <p className="text-sm text-gray-500">{room.city}</p>
                    <p className="text-sm text-gray-500">{room.address}</p>
                </div>

                {/* Tenant */}
                <div className="text-sm">
                    <span className="font-medium">Tenant:</span>{" "}
                    {room.name || "Not Rented"}
                </div>

                {/* Payments */}
                <div className="grid grid-cols-2 text-sm gap-2">
                    <div>
                        Rent: ₹{room.rent}
                        <span className={room.rentPaid ? "text-green-600":"text-red-600"}>
                            {" "}({room.rentPaid ? "Paid":"Unpaid"})
                        </span>
                    </div>
                    <div>
                        Deposit: ₹{room.securityDeposit}
                        <span className={room.depositPaid ? "text-green-600": "text-red-600"}>
                            {" "}({room.depositPaid ? "Paid":"Unpaid"})
                        </span>
                    </div>

                    {/*Status*/}
                    <StatusBagde status ={room.status}/>

                    {/* Actions */}
                    <div className="flex gap-2 pt-2">
                        {room.rentPaid && (
                            <Button size="sm" variant="outline">
                                Send Remainder
                            </Button>
                        )}
                    </div>
                    {room.status === "RENTED" && (
                        <Button size="sm" variant="secondary">
                            Mark Vacant
                        </Button>
                    )}
                    <Button size="sm" variant="default">
                        Edit
                    </Button>
                </div>


            </div>


        </div>
    );

}