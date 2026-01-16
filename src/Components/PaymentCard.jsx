import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle

} from "./ui/dialog";
import { AuthContext } from "@/Context/AuthContext";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { AlignRight } from "lucide-react";
import api from "@/Constants/api";
import { useContext } from "react";
function PaymentCard({open,onClose,room,onConfirm}){
    const tokenAmount = Math.round(room.rent * 0.2);
    return(
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent classname="max-w-md">
            <DialogHeader>
                <DialogTitle>Confirm Booking</DialogTitle>
            </DialogHeader>
            <div className="space-y-2">
                <p className="font-semibold">{room.title}</p>
                <p className="text-sm text-gray-600">{room.city}</p>
                <p className="text-sm text-gray-600">{room.address}</p>
            </div>
            <hr/>
            {/* Payment Break down */}
            <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                    <span>Monthly Rent</span>
                    <span>{room.rent}</span>

                </div>
                <div className="flex justify-between">
                    <span>Booking Token (20%)</span>
                    <span className="font-semibold">₹{tokenAmount}</span>
                </div>
            </div>
            {/* INstructions */}
            <div className="bg-gray-50 p-3 rounded text-xs text-gray-600">
                <ul className="list-disc ml-4 space-y-1">
                    <li>This amount reserved the room for you.</li>
                    <li>Remaining amount paid after owner confirmation.</li>
                    <li>Token is refundable if owner is rejects.</li>
                </ul>
            </div>
            {/* Actions */}
            <div className="flex gap-3 mt-4">
                <Button variant={"outline"} className="w-full" onClick={onClose}>Cancel</Button>
                <Button variant={"default"} className="w-full" onClick={onConfirm}>Proceed to Pay</Button>

            </div>
            </DialogContent>
            
        </Dialog>
    )

}
export default PaymentCard;