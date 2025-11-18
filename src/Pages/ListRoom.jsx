import React, {useEffect} from 'react'
import { useState } from 'react';
import { Button } from "@/Components/ui/button.jsx";
import { Input } from '@/Components/ui/input';
import { InputWithLabel } from '@/Components/InputWithLabel';
import {dataOfForm, steps} from "../Constants/index";
import SteponeForm from '@/Components/SteponeForm';
import ProgressBar from "@/Components/ProgressBar.jsx";
import NextButton from "@/Components/NextButton.jsx";
import api from "../Constants/api.js"

const ListRoom = () => {
    const [step, setStep] = useState(0); // Track current form step
    const [formDataState, setFormDataState] = useState({});


    // useEffect(() => {
    //     api.get("/v1/rooms/check")
    //
    //
    // }, []);

    return (
        <section className={"h-screen w-full bg-gray-200 pt-16"}>
            <h1 className='text-2xl text-black font-sans font-semibold p-8 md:p-4 md:text-xl sm:p-2 sm:text-lg'>Fill the form to list the room </h1>
            <div className='flex flex-col justify-start pt-10 items-center w-full min-h-screen bg-gray-400  pb-10'>
        {/*        <div className="flex justify-between items-center w-full max-w-3xl mx-auto pb-16 md:w-[3/4] sm:w-[1/4]">*/}
        {/*            {[1, 2, 3, 4, 5, 6].map((s, i) => (*/}
        {/*                <div key={s} className="flex flex-col justify-center  items-center relative w-full gap-4">*/}

        {/*                    /!* Circle *!/*/}
        {/*                    <div*/}
        {/*                        className={`rounded-full w-14 h-14 flex items-center justify-center z-10 */}
        {/*  ${step === s ? 'bg-blue-600 text-white' : step > s ? 'bg-green-500 text-white' : 'bg-gray-300'}*/}
        {/*`}*/}
        {/*                    >*/}
        {/*                        {step > s ? '✓' : s}*/}
        {/*                    </div>*/}
        {/*                    <div className='text-black text-center font-medium w-full h-7'><h1>{steps[i].text}</h1></div>*/}

        {/*                    /!* Line between steps (skip after last) *!/*/}
        {/*                    {i < 5 && (*/}
        {/*                        <div className="absolute top-5 left-1/2 flex w-full h-1 bg-gray-300 z-0">*/}
        {/*                            <div*/}
        {/*                                className={`h-full ${step > s ? 'bg-blue-500' : ''}`}*/}
        {/*                                style={{ width: '100%' }}*/}
        {/*                            >*/}
        {/*                            </div>*/}
        {/*                        </div>*/}
        {/*                    )}*/}
        {/*                </div>*/}

        {/*            ))}*/}
        {/*        </div>*/}
                <ProgressBar step={step} totalStep={steps.length} />
                <SteponeForm step={step} setStep={setStep} formDataState={formDataState} setFormDataState={setFormDataState} />

            </div>

        </section>
    )
}
export default ListRoom
