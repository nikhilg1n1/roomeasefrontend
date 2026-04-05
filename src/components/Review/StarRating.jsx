import { Star } from "lucide-react";

export default function StarRating({ value, onChange, readOnly = false }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={22}
          className={`cursor-pointer transition
            ${star <= value 
              ? "fill-yellow-400 stroke-yellow-400" 
              : "stroke-gray-400"
            }`}
          onClick={() => !readOnly && onChange(star)}
        />
      ))}
    </div>
  );
}
