import {Button} from "@/Components/ui/button.jsx";

function PreviousButton({step,setStep}){
    return(
        <Button varient = "default" 
            onClick={()=>{
                if (step > 0 ) setStep(step -1)

            }}>
                Previous
        </Button>

    )
    
}
export default PreviousButton