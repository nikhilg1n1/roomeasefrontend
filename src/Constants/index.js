export  const footerInfo=[
    {   id:1,
        label:"Shop",
        text1:"NuraTrue Pro",
        text2:"Audio Transmitter",
        text3:"NuraTrue",
        text4:"NuraBuds",
        text5:"Nuraphone",
        text6:"NuraLoop",
        text7:"Accessories",
        text8:"Subscription"
    },
    {   id:2,
        label: "INFO",
        text1:"Why Nura?",
        text2:"Shipping",
        text3:"Returns",
        text4:"Warranty",
        text5:"Patents"

    },
    {   id:3,
        label: "SUPPORT",
        text1:"Help Centre",
        text2:"Contact Us"

    },
    {   id:4,
        label: "SOCIALS",
        text1:"Instagram",
        text2:"Facebook",
        text3:"Twitter",
        text4:"Discord"

    }

]

export const steps=[
    {
        id:1,
        text:"Room Details"
    },
    {
        id:2,
        text:"Location Information"
    },
    {
        id:3,
        text:"Amenities"
    },
    {
        id:4,
        text:"Photos"
    },
    {
        id:5,
        text:"Rules"
    },
    {
        id:6,
        text:"Contact Information"
    }

]

export  const dataOfForm = [
    {
        id: 1,
        header: "Room Details",
        fields: [
            { label: "Title", type: "text", required:true },
            { label: "Description", type: "text",required:false },
            { label: "Rent" ,required:true},
            { label: "Security deposit" , required:true},
            { label: "Available date", type: "date" ,required:true },
            { label: "Room type", type: "select", options: ["Single", "Shared", "1BHK"] ,required:true },
            { label: "Furnished type", type: "select", options: ["Furnished", "Semi-Furnished", "Unfurnished"],required:true },
            { label: "Beds", type: "number",required:true },
            { label: "Attached washroom", type: "select", options: ["Yes", "No"],required:true },
            { label: "For whom", type: "select", options: ["Boys", "Girls", "Family"],required:true },
            { label: "Balcony", type: "select", options: ["Yes", "No"],required:true },
        ]
    },
    {
        id:2,
        header:"Location Information",
        fields: [
            { label:"Address", type:"text",},
            {label:"City",type:"text",},
            {label:"Nearby Landmark"}
        ],
    },
    {
        id:3,
        header: "Amenities",
        fields: [
            { label:"Wifi",type:"checkbox",required:false},
            {label:"Power backup",type:"checkbox",required:false},
            {label:"Parking",type:"checkbox",required:false},
            {label:"Geyser",type:"checkbox",required:false},
            {label:"Ac",type:"checkbox",required:false},
            {label:"Fridge",type:"checkbox",required:false},
            {label:"Washing machine",type:"checkbox",required:false},
            {label:"Drinking water",type:"checkbox",required:false},
            {label:"CCTV",type:"checkbox",required:false},
            {label:"24*7",type:"checkbox",required:false},
            {label:"Security",type:"checkbox",required:false},
            {label:"House Keeping",type:"checkbox",required:false},

        ]
    },
    {
        id:4,
        header:"Photos",
        fields:[
            {label:"Room interior", type:"file",required: true},
            {label:"Bathroom",type:"file",required: true},
            {label:"Kitchen",type:"file",required: true},
            {label:"Outside",type:"file",required: true},
        ],
    },
    {
        id:5,
        header:"Rules",
        fields: [
            {label: "Smoking",type:"select",options: ["Yes","No" ],required:true},
            {label: "Drinking",type:"select",options: ["Yes","No" ],required:true},
            {label: "Non-Veg",type:"select",options: ["Yes","No" ],required:true},
            {label: "Pets",type:"select",options: ["Yes","No" ],required:true},
            {label: "Visitors",type:"select",options: ["Yes","No" ],required:true},
        ]

    },
    {
        id:6,
        header:"Contact Information",
        fields: [
            {label:"Phone number",type:"text" ,required:true},
            {label:"Email",type:"text",required:true},
            {label:"Alternative number",type:"text",required:true},
        ]
    }




];