import { AuthContext } from "@/context/AuthContext";
import { useContext, useEffect, useState } from "react";
import ReviewItem from "./ReviewItem";


export default function ReviewList({roomId}){
    const{api} = useContext(AuthContext)
    const[reviews,setReviews] = useState([])

    

    useEffect(() =>{
        if(!roomId) return;
        const loadReview = async() =>{
        const res = await api.get(`/v1/rooms/${roomId}/allreviews`);
        setReviews(res.data);

        console.log("Review Data ->" , res.data);
        
    };

        loadReview();
    },[roomId]);

    return(
        <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold mb-4">
                Review ({reviews.length})
            </h3>
            <div className="space-y-4">
                {reviews.length === 0 && (
                    <p className="text-gray-500">No review yet</p>
                )}
                {reviews.map((r) =>(
                    <ReviewItem key={r.id} review={r} />
                ))}
            </div>
        </div>
    );

}