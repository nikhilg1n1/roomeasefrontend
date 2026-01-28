import { useContext, useState } from "react";
import { AuthContext } from "@/Context/AuthContext";
import StarRating from "./StarRating";
import { Button } from "../ui/button";
export default function ReviewForm({roomId, onReviewAdded}){
    const{api} = useContext(AuthContext)
    const[rating ,setRating] = useState(0)
    const[comment,setComment] = useState("")
    const[error,setError] = useState("")

    const submitReview = async()=>{
        if (rating === 0){
            setError("Please select a rating")
            return;
        }

        try{
            await api.post(`/v1/rooms/${roomId}/reviews`,{
                rating,
                comment
            });
            setRating(0);
            setComment("")
            onReviewAdded();
        }catch(error){
            setError(error.response?.data || "Unable to submit review");

        }
    };

    return(
        <div className="bg-white p-4 roundec_xl shadow">
            <h3 className="font-semibold mb-2 ">Write a review</h3>
            <StarRating value={rating} onChange={setRating}/>

            <textarea className="w-full mt-3 border rounded-lg p-2"
                      rows={3}
                      placeholder="Share your experence..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}/>

            {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
            <Button className="mt-3" onClick={submitReview}>
                Submit Review
            </Button>
        </div>
    );
}