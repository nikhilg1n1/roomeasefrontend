import {Button} from "@/Components/ui/button.jsx";

function NextButton({step,setStep,totalSteps}) {

    return (
        <Button variant="default">
            {step === totalSteps - 1 ? "Submit" : "Next"}
        </Button>
    );
}export  default NextButton;