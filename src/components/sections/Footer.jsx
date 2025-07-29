import { LuArrowUpFromLine } from "react-icons/lu";
import { FaAngleDoubleUp} from "react-icons/fa";

function Footer() {
    return (
        <footer className="py-3 px-4 relative mb-12 md:mb-8 flex flex-wrap justify-center items-center">
            <a
            href="#hero"
            className="p-3 rounded-full text-primary bg-primary/10 hover:bg-primary/20 transition-colors"
            >
                <FaAngleDoubleUp size={20} className="animate-bounce"/>
            </a>
        </footer>
    )
}

export default Footer