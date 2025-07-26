import { useEffect, useState } from "react"
import { PiCodeDuotone } from "react-icons/pi";
import cn from "../lib/utils"

function LoadingScreen({ onComplete }) {
    const [text, setText] = useState("")
    const fullText = "Shreyash Purankar"

    useEffect(() => {
        let index = 0
        const interval = setInterval(() => {
            setText(fullText.substring(0, index))
            index++;

            if (index > fullText.length) {
                clearInterval(interval)

                setTimeout(() => {
                    onComplete()
                }, 1000);
            }
        }, 100)

        return () => clearInterval(interval)
    }, [])
    return (
        <div className={cn("fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center")}>
            <PiCodeDuotone className={cn(" w-16 h-16 text-gray-100 mb-10")} />
            <div className={cn("mb-4 text-5xl font-bold")}>
                {text}<span className={cn("animate-blink ml-1")}>|</span>
            </div>

            <div className={cn("w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden")}>
                <div className={cn("w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6 animate-loading-bar")}></div>
            </div>
        </div >
    )
}

export default LoadingScreen