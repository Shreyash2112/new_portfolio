import { FaAngleDoubleDown } from "react-icons/fa";
function Hero() {
    return (
        <section
            id="hero"
            className='relative min-h-screen flex flex-col justify-center items-center px-4'
        >
            <div className='container max-w-4xl mx-auto text-center z-10'>
                <div className='space-y-6'>
                    <h1 className='text-4xl md"text-6xl font-bold tracking-tight'>
                        <span className='block md:inline opacity-0 animate-fade-in'>Hi, I'm</span>
                        <span className='opacity-0 animate-fade-in-delay-1 text-primary mx-2'>
                            Shreyash
                        </span>
                        <span className='opacity-0 animate-fade-in-delay-2 text-gradient'>
                            Purankar
                        </span>
                    </h1>

                    <p className='text:lg md:text-xl text-muted-foreground max-2-xl mx-auto opacity-0 animate-fade-in-delay-4'>Bringing together crisp design and robust engineering, I build responsive web apps that engage users and exceed expectations.</p>

                    <div className='opacity-0 animate-fade-in-delay-5 pt-6'>
                        <a href='#projects' className='cosmic-button'>
                            View My Work
                        </a>
                    </div>
                </div>
            </div>

            <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce'>
                <span className="text-sm mb-2">Scroll</span>
                <FaAngleDoubleDown className="w-5 h-5 text-primary" />
            </div>
        </section>
    )
}

export default Hero