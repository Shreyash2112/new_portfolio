import { useEffect, useState } from 'react'
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import cn from '../../lib/utils';

function ThemeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "light") {
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    }, []);

    function toggle() {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    return (
        <button onClick={toggle} className={cn("z-50 rounded-full transition-colors duration-300", "focus:outline-hidden")}>
            {isDarkMode ?
                <IoSunnyOutline size={22} className=' text-orange-400' /> :
                <IoMoonOutline size={22} className=' text-blue-900' />}
        </button >
    )
}

export default ThemeToggle