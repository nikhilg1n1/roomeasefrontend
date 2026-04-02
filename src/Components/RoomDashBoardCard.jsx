import { Button } from "@/components/ui/button.jsx";

export default function RoomDashBoardCard({room}){
    return(
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl border-[2px] border-neutral-400 transition overflow-hidden">

            {/* adding Room image */}
            <div className="h-48 bg-gray-200">
                {room?.roomImages?.length > 0 && (
            <img
              src={`data:${room.roomImages[0].contentType};base64,${room.roomImages[0].roomImage}`}
              alt="room"
              className={"w-full h-full object-cover"}
            />
          )}
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
                    {/* <StatusBagde status ={room.status}/> */}

                    {/* Actions */}
                    <div className="flex gap-2 justify-between pt-2">
                        {room.rentPaid && (
                            <Button className={"h-8 w-40"} variant="outline">
                                Send Remainder
                            </Button>
                        )}

                        {room.status === "RENTED" && (
                        <Button variant="secondary">
                            Mark Vacant
                        </Button>
                    )}
                    <Button  variant="default" className="w-20">
                        Edit
                    </Button>
                    </div>
                    
                </div>


            </div>


        </div>
    );

}