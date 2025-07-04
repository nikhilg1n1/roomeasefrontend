import * as React from "react"
import { Slider } from "@/components/ui/slider"

const PriceRangeSlider = () => {
    const [minRent, setMinRent] = React.useState([5000])
    const [maxRent, setMaxRent] = React.useState([15000])

    return (
        <div>

            {/* Minimum Rent */}
            <div className={"mb-8"}>
                <p className="mb-2">Minimum</p>

                <div className="mb-2 text-sm text-gray-700 font-medium">₹{minRent[0].toLocaleString()}</div>
                <Slider
                    defaultValue={minRent}
                    min={5000}
                    max={20000}
                    step={500}
                    onValueChange={(val) => setMinRent(val)}
                    className="w-1/2"
                />
            </div>

            {/* Maximum Rent */}
            <div>
                <p className="mb-2">Maximum</p>

                <div className="mb-2 text-sm text-gray-700 font-medium">₹{maxRent[0].toLocaleString()}</div>
                <Slider
                    defaultValue={maxRent}
                    min={15000}
                    max={30000}
                    step={500}
                    onValueChange={(val) => setMaxRent(val)}
                    className="w-1/2"
                />
            </div>
        </div>
    )
}

export default PriceRangeSlider
