import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import api from "@/Constants/api.js";
import { Detail } from "../Utilities/Detail.jsx";
import { Amenities } from "../Utilities/Amenity.jsx";
import { Button } from "@/Components/ui/button.jsx";
import { AuthContext } from "@/Context/AuthContext.jsx";
import { loadRazorpay } from "@/Utilities/paymentUtility.js";
import { Currency } from "lucide-react";
import PaymentCard from "@/Components/PaymentCard.jsx";
import ReviewList from "@/Components/Review/ReviewList.jsx";
import ReviewForm from "@/Components/Review/ReviewForm.jsx";

function RoomDescription() {
  const { roomId } = useParams();
  const { api, loading, authenticated } = useContext(AuthContext);
  const [room, setRooms] = useState(null);
  const [showPaymentCard, setShowPaymentCard] = useState(false);

  useEffect(() => {
    if (loading || !authenticated) return;

    api
      .get(`/v1/description/${roomId}`)
      .then((res) => {
        console.log("Data of Room Details Page : ", res.data);
        console.log("Room id : ", roomId);
        setRooms(res.data);
      })
      .catch((err) => console.error(err));
  }, [roomId, authenticated, loading]);

  const handleBooking = async () => {
    // const res = api.post("/v1/bookings",{roomId})
    // console.log("In Payment Gateway");
    try {
      setShowPaymentCard(false);
      const loaded = await loadRazorpay();
      if (!loaded) {
        alert("Razorpay SDK failed to load");
        return;
      }
      const res = await api.post("/v1/razorpay-booking", {
        roomId: roomId,
      });
      console.log("Payment data -> ", res.data);

      const { orderId, amount, razorpayKey, bookingId } = res.data;

      const options = {
        key: razorpayKey,
        amount: amount * 100,
        currency: "INR",
        name: "RoomEase",
        description: "Room Booking token",
        order_id: orderId,
        method: {
          upi: true,
          card: true,
          netbanking: true,
          wallet: true,
        },

        handler: async function (response) {
          await api.post("/v1/payments/verify", {
            razorpayOrderId: response.razorpay_order_id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpaySignature: response.razorpay_signature,
            bookingId: bookingId,
          });
          alert("Payment successfull");
        },
        // prefill:{
        //         name:"RoomEase user",
        //         email:"user@gmail.com"
        // },
        // theme:{
        //         color:"#2563eb",
        // }
      };
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.log("Booking faild", error);
      alert("something went wrong");
    }
  };

  if (!room) return <div className={"text-center p-10"}>Loading...</div>;
  return (
    <div className={"min-h-screen bg-gray-100 pt-20 px-6"}>
      <div className={"max-w-6xl mx-auto"}>
        <div className={"w-full h-[450px] rounded-xl overflow-hidden mb-4"}>
          {room?.roomImages?.length > 0 && (
            <img
              src={`data:${room.roomImages[0].contentType};base64,${room.roomImages[0].roomImage}`}
              alt="room"
              className={"w-full h-full object-cover"}
            />
          )}
        </div>
        <div className={"grid grid-cols-4 gap-3"}>
          {room?.roomImages?.slice(1).map((img) => (
            <img
              key={img.id}
              src={`data:${img.contentType};base64,${img.roomImage}`}
              alt={""}
              className={"rounded-xl h-28 w-full object-cover"}
            />
          ))}
        </div>
      </div>
      <div
        className={
          "max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mt -10 "
        }
      >
        <div className={"lg:col-span-2 space-y-6"}>
          <div>
            <h1 className={"text-3xl font-bold text-gray-800"}>{room.title}</h1>
            <p className={"text-gray-600 mt-1 text-lg"}>{room.rent}/month</p>
          </div>
          <div
            className={
              "bg-white p-6 rounded-xl shadow grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4"
            }
          >
            <Detail label="Room type" value={room?.roomType?.typeName} />
            <Detail label="Beds" value={room.beds} />
            <Detail
              label="Attached Washroom"
              value={room.attachedWashroom ? "yes" : "No"}
            />
            <Detail label="City" value={room.city} />
            <Detail label="Address" value={room.address} />


            <Detail label="Available From" value={room.availableDate} />
            <Detail label="Balcony" value={room.balcony ? "Yes" : "No"} />
          </div>

          <div className={"bg-white p-6 rounded-xl shadow"}>
            <h1 className={"text-xl font-semibold mb-3"}>Description</h1>
            <p className={"text-gray-700 leading-relaxed"}>
              {room.description}
            </p>
          </div>
          <div className={"bg-white p-6 rounded-xl shadow"}>
            <h2 className={"text-xl font-semibold mb-4"}>Amenities</h2>
            <div className={"grid grid-cols-2 md:grid-cols-3 gap-3"}>
              {Object.entries(room.amenities || {}).map(([key, value]) => (
                <Amenities key={key} label={key} available={value} />
              ))}
            </div>
          </div>
        </div>
        <div className={"lg:col-span-1"}>
          <div className={"bg-white p-6 rounded-xl shadow sticky top-24"}>
            <h2 className={"text-2xl font-bold text-gray-800 mb-4 "}>
              ₹{room.rent}/month
            </h2>
            <p className={"text-gray-600 mb-4"}>
              Deposit:₹{room.securityDeposit}/month{" "}
            </p>

            {/* <Button variant={"default"} onClick={handleBooking} > Book Now</Button> */}
            <Button
              variant={"default"}
              onClick={() => setShowPaymentCard(true)}
            >
              {" "}
              Book Now
            </Button>

            {/* <Button variant={"default"} > Send message</Button> */}
          </div>
        </div>
      </div>
      {/* SAME MAX WIDTH CONTAINER */}
<div className="max-w-6xl mx-auto mt-8">
  <div className="lg:col-span-2 space-y-6">

    {room && (
      <ReviewList roomId={room.roomId} />
    )}

    {authenticated && (
      <ReviewForm
        roomId={room.roomId}
        onReviewAdded={() => window.location.reload()}
      />
    )}

  </div>
</div>
      <PaymentCard
        open={showPaymentCard}
        onClose={() => setShowPaymentCard(false)}
        room={room}
        onConfirm={handleBooking}
      />
    </div>
  );
}
export default RoomDescription;
