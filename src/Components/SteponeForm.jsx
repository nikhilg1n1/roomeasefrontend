import {InputWithLabel} from "./InputWithLabel"
import {dataOfForm} from '../Constants/index.js'
import {Button} from "@/Components/ui/button.jsx";
import NextButton from "@/Components/NextButton.jsx";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


import React, {useContext, useState} from "react";
import {useForm} from "react-hook-form";
import PreviousButton from "./PreviousButton";
import { AuthContext } from "@/Context/AuthContext";


function SteponeForm({step,setStep,formDataState,setFormDataState}) {
    // const [formDataState, setFormDataState] = useState({});

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {api} = useContext(AuthContext)

    const roomData = dataOfForm[step];
    const navigate  = useNavigate();


    const onSubmit = async (data) => {
        console.log("Form Data:", data);
        const allData = {...formDataState, ...data};
        setFormDataState(allData); // or navigate to next step

        if (step < dataOfForm.length - 1) {
            setStep(prev => prev + 1);
            return
        }

        const amenities = {
            wifi:allData.wifi  || false,
            ac:allData.ac || false,
            parking:allData.parking || false,
            geyser:allData.geyser || false,
            fridge:allData.fridge || false,
            washingMachine:allData.washingMachine || false,
            cctv:allData.cctv || false,
            security:allData.security || false,
            powerBackup : allData.powerBackup || false,
            houseKeeping : allData.houseKeeping || false,
            allTime : allData.allTime || false,
            drinkingWater : allData.drinkingWater || false,
        };

        const roomData = {
            title : allData.title,
            description:allData.description,
            rent:allData.rent,
            securityDeposit:allData.securityDeposit,
            availableDate: allData.availableDate,
            address:allData.address,
            city:allData.city,
            landmark:allData.landmark,
            phoneNumber:allData.phoneNumber,
            alternateNumber:allData.alternateNumber,
            furnishingType: allData.furnishingType,
            roomType: allData.roomType,
            occupacyType: allData.occupacyType,
            attachedWashroom: allData.attachedWashroom === "true" || allData.attachedWashroom === true,
            balcony: allData.balcony === "true" || allData.balcony === true,
            beds: allData.beds,
            email: allData.email,
            name:allData.name,
            roomInterior: undefined,
            bathroom: undefined,
            kitchen : undefined,
            outside : undefined,
            amenities: amenities,
        };

        // Sending to backend
        const formData = new FormData();

        // Object.keys(allData).forEach((key) => {
        //     const value = allData[key];
        //
        //     if(value instanceof  FileList){
        //         Array.from(value).forEach((file) => formData.append(key, file));
        //     }else if(Array.isArray(value)){
        //         value.forEach((item) => {formData.append(key, item);});
        //     }else{
        //         formData.append(key, value);
        //     }
        // });

        const jsonBlob = new Blob([JSON.stringify(roomData)],{type: "application/json"});
        formData.append("roomData", jsonBlob);

        ["roomInterior","bathroom","kitchen","outside"].forEach((key) => {
            if(allData[key] && allData[key].length > 0) {
                Array.from(allData[key]).forEach((file) => {
                    formData.append("image", file);
                })
            }

        });
        console.log("Total Image are " , formData.getAll("image").length)

        // const imageKey = [...(allData.roomInterior ||[]),
        //                         ...(roomData.bathroom || []),
        //                         ...(roomData.kitchen || []),
        //                         ...(roomData.outside||[])];
        //         imageKey.forEach((item) => {formData.append("image", item)});
        // console.log("Total images are" , imageKey.length)

        // if (allData.image && allData.image instanceof FileList && allData.image.length > 0) {
        //     formData.append("image", allData.image[0]);
        // }

        try {
            const res = await api.post("http://localhost:8080/v1/saveRooms", formData, {
                headers: {"Content-Type": "multipart/form-data"},

                withCredentials: true,

            })
            navigate("/success")
            console.log("success :", res.data)
        } catch (err) {
            console.log(err)
        }
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
                                            name={field.name}
                                            type={field.type}
                                            placeholder={field.placeholder?.[index] || `Enter ${field.label}`}
                                            options={field.options}
                                            register={register}
                                            error={errors[field.name]}
                                            required={field.required}
                            />
                        ))
                    }
                </div>
                {/*<div>*/}
                {/*    <Button variant={"default"}>Next</Button>*/}
                {/*</div>*/}
                <div className="flex gap-96">
                    {
                        step === 0 ? "" :<PreviousButton step={step} setStep={setStep}></PreviousButton>

                    }
                    <NextButton step={step} setStep={setStep} totalSteps={dataOfForm.length}/>
                </div>
                

            </div>
        </form>
    )
}

export default SteponeForm
