import { useEffect, useState } from "react"
import cn from "../../lib/utils"
import ThemeToggle from "./ThemeToggle"
import { IoCloseCircleOutline } from "react-icons/io5";
import { TiThMenuOutline } from "react-icons/ti";
import { IoIosMenu } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import { RiCloseLargeFill } from "react-icons/ri";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Project", href: "#project" },
    { name: "Contact", href: "#contact" },
]

function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)

    })

    function closeMenu() {
        setIsMenuOpen(false)
    }

    return (
        <nav className={cn("fixed w-full z-40 transition-all duration-300 border-b border-primary/20",
            isScrolled ? "py-3 bg-background/5 backdrop-blur-lg shadow-xs" : "py-5")}
        >
            <div className="container flex items-center justify-between">
                <a className="text-xl text-primary font-bold flex-items-center" href="#hero">
                    <span className="z-10 relative">
                        <span className="text-glow text-foreground">Shreyash Purankar </span>
                        Portfolio
                    </span>
                </a>

                {/* Desktop */}
                <div className="hidden md:flex space-x-8 md:items-center">
                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            className="text-foreground hover:text-primary transition-colors duration-300">
                            {item.name}
                        </a>
                    ))}
                    <ThemeToggle />
                </div>

                {/* Mobile */}

                <button
                    className="z-50 md:hidden text-foreground"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <RiCloseLargeFill className="text-xl text-foreground" /> : <CiMenuBurger className="text-xl text-foreground" />}
                </button>

                <div className={cn("fixed inset-0 bg-background/60 backdrop-blur-xs z-40 flex flex-col items-center justify-center transition-all md:hidden duration-300",
                    isMenuOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none")}
                >
                    <div className="flex flex-col space-y-8 text-xl items-center">
                        <ThemeToggle closeMenu={closeMenu} />
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="text-foreground hover:text-primary transition-colors duration-300"
                                onClick={closeMenu}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar