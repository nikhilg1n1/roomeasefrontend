import {Button} from "@/components/ui/button.jsx";

function NextButton({step,setStep,totalSteps}) {

    return (
        <Button variant="default"
        
        onClick={() =>{
                setStep(step);
        }}
        >
            {step === totalSteps - 1 ? "Submit" : "Next"}
        </Button>
    );
}export  default NextButton;