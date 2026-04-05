import {Button} from "@/components/ui/button.jsx";

function PreviousButton({step,setStep}){
    return(
        <Button variant = "default" type = "button"
            onClick={()=>{
            
                if (step > 0) setStep(step -1)

            }}>
                Previous
        </Button>

    )
    
}
export default PreviousButton