import { useEffect, useState } from "react"
import cn from "../../lib/utils"
import ThemeToggle from "./ThemeToggle"
import { CiMenuBurger } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import { RiCloseLargeFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
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
    }, [])

    function closeMenu() {
        setIsMenuOpen(false)
    }

    return (
        <>
            <nav className={cn(
                "fixed w-full z-50 transition-all duration-300",
                isScrolled ? "py-3 bg-background/5 backdrop-blur-lg shadow-xs" : "py-5"
            )}>
                <div className="container flex justify-between">
                    <a className="text-xl text-primary font-bold flex-items-center" href="#hero">
                        <span className="z-10 relative">
                            <span className="text-primary">Shreyash</span><span className="text-foreground"> Purankar</span>
                        </span>
                    </a>

                    {/* Desktop */}
                    <div className="hidden md:flex space-x-8 md:items-center">
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="text-foreground hover:text-primary transition-colors duration-300"
                            >
                                {item.name}
                            </a>
                        ))}

                    </div>
                    <div className="hidden md:flex md:gap-4 lg:gap-8 items-center">
                        <a
                            href="https://www.linkedin.com/in/shreyash-purankar"
                            target="_blank"
                            className="text-foreground hover:text-primary transition-colors duration-300">
                            <FaLinkedin size={22} />
                        </a>
                        <a
                            href="https://github.com/Shreyash2112"
                            target="_blank"
                            className="text-foreground hover:text-primary transition-colors duration-300">
                            <FaGithub size={22} />
                        </a>
                        <ThemeToggle />
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex gap-5 md:hidden">
                        <ThemeToggle />
                        <button
                            className="text-foreground"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? (
                                <RiCloseLargeFill className="text-xl text-foreground" />
                            ) : (
                                <CiMenuBurger className="text-xl text-foreground" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile menu overlay, OUTSIDE nav */}
            <div className={cn(
                "fixed inset-0 bg-background/35 backdrop-blur-sm z-40 flex flex-col items-center justify-center transition-all md:hidden duration-300",
                isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}>
                <div className="flex flex-col space-y-8 text-xl items-center">
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
                    <div className="flex gap-4 items-center justify-center">
                        <a
                            href="https://www.linkedin.com/in/shreyash-purankar"
                            target="_blank"
                            className="text-foreground hover:text-primary transition-colors duration-300">
                            <FaLinkedin size={24} />
                        </a>
                        <a
                            href="https://github.com/Shreyash2112"
                            target="_blank"
                            className="text-foreground hover:text-primary transition-colors duration-300">
                            <FaGithub size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}


export default NavBar