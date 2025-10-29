import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {useForm} from "react-hook-form";


export function InputWithLabel({label,name,placeholder ,type="text",options=[],register,error, required = true}) {

    if (type === "select") {
        return (
            <div className="grid w-full max-w-sm items-center gap-3 p-4">
                <label className={"block text-sm font-medium text-gray-700 mb-1"}>{label}</label>
                <select className={"border border-gray-300 h-12 text-sm p-2  rounded w-full"}
                        {...register(name,required ?{required: `${label} is required`}:{})}
                >
                    {
                        options.map((option, index) => {
                            const isObject = typeof option === "object";
                            return(
                                    <option key={index} value={isObject ? option.value:option}
                                    >
                                        {isObject ? option.label : option}</option>

                                );
                        })
                    }
                </select>
                {/* Always render the error container to prevent layout shift */}
                <div className="min-h-[1.25rem]">
                    {error && <p className="text-red-500 text-xs">{error.message}</p>}
                </div>            </div>
        );
    }
    if (type === "checkbox") {
        return (
            <div className="flex items-center w-[200px] gap-8 border bg-white border-gray-300 justify-between rounded space-x-2 p-4">
                <label htmlFor={name} className="text-sm font-medium text-gray-700">{label}</label>
                <input
                    {...register(name,{

                        setValueAs: (v) => !!v,
                        required: required ? `${label} is required`: false,})}
                    type="checkbox"
                    id={name}
                    placeholder={placeholder}
                    className={"w-5 h-5"}

                />
                {/* Always render the error container to prevent layout shift */}
                <div className="min-h-[1.25rem]">
                    {error && <p className="text-red-500 text-xs">{error.message}</p>}
                </div>
            </div>
        );
    }
    // if (type === "checkbox") {
    //     return (
    //         <div className="grid w-full max-w-sm items-center gap-3 p-4">
    //             <label className={"block text-sm font-medium text-gray-700 mb-1"}>{label}</label>
    //             <select className={"border border-gray-300 h-12 text-sm p-2 rounded w-full"}>
    //                 {
    //                     options.map((option, index) => (
    //                         <option key={index} value={option}>{option}</option>
    //                     ))
    //                 }
    //             </select>
    //         </div>
    //     );
    // }
  return (
    <div className="grid w-full max-w-sm items-center gap-3 p-4">
      <Label htmlFor={name} className="text-gray-700 font-medium">{label}</Label>
      <Input
          className="p-2 border h-12 bg-white border-gray-300 rounded w-full"
          type={type}
          name={name}
          min={type === "number" ? 0 : undefined} // 👈 only apply min=0 to number fields
          placeholder={placeholder}
          {...register(name,required ? {required: `${label} is required`}:{})}
      />
        {/* Always render the error container to prevent layout shift */}
        <div className="min-h-[1.25rem]">
            {error && <p className="text-red-500 text-xs">{error.message}</p>}
        </div>
    </div>
  )
}
