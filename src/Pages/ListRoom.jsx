import React, { useContext, useState } from "react";
import { steps } from "../Constants/index";
import SteponeForm from "@/Components/SteponeForm";
import ProgressBar from "@/Components/ProgressBar.jsx";
import { AuthContext } from "@/Context/AuthContext";

const ListRoom = () => {
  const { api } = useContext(AuthContext);
  const [step, setStep] = useState(0);
  const [formDataState, setFormDataState] = useState({});

  return (
    <section className="min-h-screen w-full bg-gray-200 pt-16">
      <h1 className="text-2xl text-black font-semibold p-8">
        Fill the form to list the room
      </h1>

      {/* MAIN CONTAINER */}
      <div className="flex w-full min-h-[80vh] bg-gray-100">

        {/* LEFT SIDE → PROGRESS */}
        <ProgressBar step={step} totalStep={steps.length} />

        {/* RIGHT SIDE → FORM */}
        <div className="flex-1 p-6 ">
          <SteponeForm
            step={step}
            setStep={setStep}
            formDataState={formDataState}
            setFormDataState={setFormDataState}
          />
        </div>

      </div>
    </section>
  );
};

export default ListRoom;
