import { steps } from "@/Constants/index.js";

function ProgressBar({ step, totalStep }) {
  // const [step, setStep] = useState(1); // Track current form step
  const percent = ((step + 1) / totalStep) * 100;

  return (
    <div className="flex  flex-col gap-10 items-start pl-6 py-10 w-[360px] min-h-screen border-r bg-white">
      {steps.map((s, i) => (
        <div key={i} className="flex items-start relative gap-4">
          {/* Circle */}
          <div
            className={`rounded-full w-20 h-20 flex text-xl font-semibold items-center justify-center z-10 
          ${step === i ? "bg-blue-600 text-white" : step > i ? "bg-green-600 text-white" : "bg-gray-300"}
        `}
          >
            {step > i ? "✓" : i + 1}
            {/* Line between steps (skip after last) */}
            {/* {i < steps.length-1 && (
                        <div className= {`absolute left-[36px] top-20 w-2 bg-gray-200`}
                        style={{      height:"calc(100% + 98px)"}}> 
                            <div
                                className={`flex justify-end transition-all duration-300 ${step > i ? 'bg-green-600 ' : 'h-0'}`}
                                style={{height: step > i ? '100%' : '20%'}}
                            >
                            </div>
                        </div>
                    )} */}
          </div>
          <div className="text-black text-xl font-medium pt-4">
            <h1>{steps[i].text}</h1>
          </div>

          {/* Line between steps (skip after last) */}
          {i < steps.length - 1 && (
            <div
              className={`absolute h-[198px] w-2 bg-gray-200`}
              style={{
                left: "40px", // half of w-20
                top: "80px", // exactly circle height
                height:"80px", // gap between items
              }}
            >
              <div
                className={`transition-all duration-300 ${step > i ? "bg-green-600 " : "h-0"}`}
                style={{ height: step > i ? "100%" : "0",
                    width:"100%"
                 }}
              ></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
export default ProgressBar;
