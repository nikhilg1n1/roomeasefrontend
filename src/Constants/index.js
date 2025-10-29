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
            { name:"title",label: "Title", type: "text", required:true },
            { name:"description",label: "Description", type: "text",required:false },
            { name:"rent",label: "Rent" ,required:true},
            { name:"securityDeposit",label: "Security deposit" , required:true},
            { name:"availableDate",label: "Available date", type: "date" ,required:true },
            { name:"roomType",label: "Room type", type: "select", options: ["Single", "Shared", "1BHK"] ,required:true },
            { name:"furnishingType",label: "Furnished type", type: "select", options: ["Furnished", "Semi-Furnished", "Unfurnished"],required:true },
            { name:"beds",label: "Beds", type: "number",required:true },
            { name:"attachedWashroom",label: "Attached washroom", type: "select", options: [
                    {label:"Yes",value:true},
                    {label:"No",value:false}], required:true },
            { name:"occupacyType",label: "For whom", type: "select", options: ["Boys", "Girls", "Family"],required:true },
            { name:"balcony",label: "Balcony", type: "select", options: [
                    {label:"Yes", value:true},
                    {label:"No", value:false}],required:true },
        ]
    },
    {
        id:2,
        header:"Location Information",
        fields: [
            {name:"address", label:"Address", type:"text",},
            {name:"city",label:"City",type:"text",},
            {name:"landmark",label:"Nearby Landmark"}
        ],
    },
    {
        id:3,
        header: "Amenities",
        fields: [
            {name:"wifi",label:"Wifi",type:"checkbox",required:false},
            {name:"powerBackup",label:"Power backup",type:"checkbox",required:false},
            {name:"parking",label:"Parking",type:"checkbox",required:false},
            {name:"geyser",label:"Geyser",type:"checkbox",required:false},
            {name:"ac",label:"Ac",type:"checkbox",required:false},
            {name:"fridge",label:"Fridge",type:"checkbox",required:false},
            {name:"washingMachine",label:"Washing machine",type:"checkbox",required:false},
            {name:"drinkingWater",label:"Drinking water",type:"checkbox",required:false},
            {name:"cctv",label:"CCTV",type:"checkbox",required:false},
            {name:"allTime",label:"24*7",type:"checkbox",required:false},
            {name:"security",label:"Security",type:"checkbox",required:false},
            {name:"HouseKeeping",label:"House Keeping",type:"checkbox",required:false},

        ]
    },
    {
        id:4,
        header:"Photos",
        fields:[
            {name:"roomInterior",label:"Room interior", type:"file",required: true},
            {name:"bathroom",label:"Bathroom",type:"file",required: true},
            {name:"kitchen",label:"Kitchen",type:"file",required: true},
            {name:"outside",label:"Outside",type:"file",required: true},
        ],
    },
    {
        id:5,
        header:"Rules",
        fields: [
            {name:"smoking",label: "Smoking",type:"select",options: ["Yes","No" ],required:true},
            {name:"drinking",label: "Drinking",type:"select",options: ["Yes","No" ],required:true},
            {name:"nonVeg",label: "Non-Veg",type:"select",options: ["Yes","No" ],required:true},
            {name:"pets",label: "Pets",type:"select",options: ["Yes","No" ],required:true},
            {name:"visitors",label: "Visitors",type:"select",options: ["Yes","No" ],required:true},
        ]

    },
    {
        id:6,
        header:"Contact Information",
        fields: [
            {name:"phoneNumber",label:"Phone number",type:"text" ,required:true},
            {name:"email",label:"Email",type:"text",required:true},
            {name:"alternateNumber",label:"Alternative number",type:"text",required:true},
        ]
    }




];