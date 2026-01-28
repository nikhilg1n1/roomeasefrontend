import StarRating from "./StarRating"

export default function ReviewItem({review}){
    return(
        <div className="border-b pb-4">
            <div className="flex justify-between">
                <p className="font-medium">{review.username || "Anonymous"}</p>
                <StarRating value={review.rating} readOnly/>
            </div>
            <p className="text-gray-600 mt-1">{review.comment}</p>
            {console.log(review.comment)
            }
            <p className="text-xs text-gray-400 mt-1">
                {new Date(review.createdAt).toLocaleDateString()}
            </p>
        </div>
    );
}