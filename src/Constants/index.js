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
            { label: "Title", type: "text" },
            { label: "Description", type: "text" },
            { label: "Rent" },
            { label: "Security deposit" },
            { label: "Available date", type: "date" },
            { label: "Room type", type: "select", options: ["Single", "Shared", "1BHK"] },
            { label: "Furnished type", type: "select", options: ["Furnished", "Semi-Furnished", "Unfurnished"] },
            { label: "Beds", type: "number" },
            { label: "Attached washroom", type: "select", options: ["Yes", "No"] },
            { label: "For whom", type: "select", options: ["Boys", "Girls", "Family"] },
            { label: "Balcony", type: "select", options: ["Yes", "No"] },
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
            { label:"Wifi",type:"checkbox"},
            {label:"Power backup",type:"checkbox"},
            {label:"Parking",type:"checkbox"},
            {label:"Geyser",type:"checkbox"},
            {label:"Ac",type:"checkbox"},
            {label:"Fridge",type:"checkbox"},
            {label:"Washing machine",type:"checkbox"},
            {label:"Drinking water",type:"checkbox"},
            {label:"CCTV",type:"checkbox"},
            {label:"24*7",type:"checkbox"},
            {label:"Security",type:"checkbox"},
            {label:"House Keeping",type:"checkbox"}

        ]
    },
    {
        id:4,
        header:"Photos",
        fields:[
            {label:"Room interior", type:"file",},
            {label:"Bathroom",type:"file"},
            {label:"Kitchen",type:"file"},
            {label:"Outside",type:"file"}
        ],
    },
    {
        id:5,
        header:"Rules",
        fields: [
            {label: "Smoking",type:"select",options: ["Yes","No" ]},
            {label: "Drinking",type:"select",options: ["Yes","No" ]},
            {label: "Non-Veg",type:"select",options: ["Yes","No" ]},
            {label: "Pets",type:"select",options: ["Yes","No" ]},
            {label: "Visitors",type:"select",options: ["Yes","No" ]},
        ]

    },
    {
        id:6,
        header:"Contact Information",
        fields: [
            {label:"Phone number",type:"text"},
            {label:"Email",type:"text"},
            {label:"Alternative number",type:"text"}
        ]
    }




];