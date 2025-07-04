import {InputWithLabel} from "./InputWithLabel"
import {dataOfForm} from '../Constants/index.js'
import {Button} from "@/Components/ui/button.jsx";
import NextButton from "@/Components/NextButton.jsx";

import React from "react";
import {useForm} from "react-hook-form";


function SteponeForm({step ,setStep}) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const roomData = dataOfForm[step];
    const onSubmit = (data) => {
        console.log("Form Data:", data);
        setStep(prev => prev + 1); // or navigate to next step
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full  flex justify-center items-center py-12">
            <div
                className='bg-gray-100 rounded-xl flex flex-col justify-start items-center p-8 gap-8  w-[80%] md:w-[3/4] sm:w-[1/4]'>
                <h1 className='text-black font-sans font-semibold text-2xl md:text-xl  '>{roomData.header}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl justify-items-center">
                    {
                        roomData.fields.map((field, index) => (
                            <InputWithLabel key={index}
                                            label={field.label}
                                            id={field.id}
                                            type={field.type}
                                            placeholder={field.placeholder?.[index] || `Enter ${field.label}`}
                                            options={field.options}
                                            register={register}
                                            error={errors[field.label]}
                            />
                        ))
                    }
                </div>
                {/*<div>*/}
                {/*    <Button variant={"default"}>Next</Button>*/}
                {/*</div>*/}
                <NextButton step={step} setStep={setStep} totalSteps={dataOfForm.length}/>

            </div>
        </form>
    )
}

export default SteponeForm
