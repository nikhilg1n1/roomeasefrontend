import {steps} from "@/Constants/index.js";

function ProgressBar({step,totalStep}) {
    // const [step, setStep] = useState(1); // Track current form step
    const percent = ((step+1)/totalStep)*100;

    return(
        <div className="flex justify-between items-center w-full max-w-3xl mx-auto pb-16 md:w-[3/4] sm:w-[1/4]">
            {steps.map((s, i) => (
                <div key={i} className="flex flex-col justify-center  items-center relative w-full gap-4">

                    {/* Circle */}
                    <div
                        className={`rounded-full w-14 h-14 flex items-center justify-center z-10 
          ${step === i ? 'bg-blue-600 text-white' : step > i ? 'bg-green-500 text-white' : 'bg-gray-300'}
        `}
                    >
                        {step > i ? '✓' : i+1}
                    </div>
                    <div className='text-black text-center font-medium w-full h-7'><h1>{steps[i].text}</h1></div>

                    {/* Line between steps (skip after last) */}
                    {i < steps.length-1 && (
                        <div className="absolute top-5 left-1/2 flex w-full h-1 bg-gray-300 z-0">
                            <div
                                className={`h-full transition-all duration-300 ${step > s ? 'bg-blue-500' : ''}`}
                                style={{ width: `${percent}%`}}
                            >
                            </div>
                        </div>
                    )}
                </div>

            ))}
        </div>
    )
}export default ProgressBar;