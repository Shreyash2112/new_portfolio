import React, { useEffect, useState } from 'react'
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import cn from '../../lib/utils';

function ThemeToggle({ closeMenu = () => { } }) {
    const [isDark, setIsDark] = useState(true)

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "dark") {
            setIsDark(true)
            document.documentElement.classList.add("dark")
        } else {
            setIsDark(false)
            document.documentElement.classList.remove("dark")
        }
    }, [])

    function toggle() {
        if (isDark) {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
            setIsDark(false)
        } else {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
            setIsDark(true)
        }
        closeMenu()
    }

    return (
        <button onClick={toggle} className={cn("md:pl-5 z-50 rounded-full transition-colors duration-300", "focus:outline-hidden")}>
            {isDark ?
                <IoSunnyOutline className='h-6 w-6 text-orange-400' /> :
                <IoMoonOutline className='h-6 w-6 text-blue-900' />}
        </button >
    )
}

export default ThemeToggle