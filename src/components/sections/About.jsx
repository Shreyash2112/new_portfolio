import { FiDownload } from "react-icons/fi";

function About() {
    return (
        <section
            id="about"
            className='py-24 px-4 relative'
        >
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text:4xl font-bold mb-12 text-center'>
                    About <span className='text-primary'>Me</span>
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                    <div className="space-y-6">

                        <h3 className="text-2xl font-semibold">Turning Ideas Into Robust, Engaging Web Experiences</h3>

                        <p className="text-muted-foreground">Passionate about design, coding, and problem-solving, I turn ideas into fast, visually polished web apps—blending technical skill with aesthetic intuition for truly engaging results.</p>

                        <p>With every project, I build from the ground up—creating clean, responsive interfaces with modern frontend tools to deliver seamless, user-focused digital experiences that solve real problems.</p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a
                                href="#contact"
                                className="cosmic-button"
                            >
                                Get In Touch
                            </a>
                            <a
                                href="#contact"
                                className="flex gap-2 items-center justify-center px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                Download CV<FiDownload className="w-5 h-5 text-foreground animate-bounce" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About