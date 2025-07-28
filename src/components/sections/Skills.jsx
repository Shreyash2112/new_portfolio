
import Tilt from 'react-parallax-tilt';
import { skillsInfo } from "../../lib/assets"

function Skills() {
    return (
        <section
            id="skills"
            className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[7vw]"
        >
            <div className="text-center mb-8">
                <h2 className='text-3xl md:text-4xl font-bold text-center'> <span className='text-primary'>Technical</span> Skills</h2>
                <div className="w-24 h-1 bg-foreground mx-auto mt-2 mb-12"></div>
                <p className="text-foreground mt-4 text-lg font-semibold">Here&apos;s a collection of the technical skills and expertise I&apos;ve honed through diverse projects and certifications</p>
            </div>

            <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
                {skillsInfo.map((category) => (
                    <div
                        key={category.title}
                        className="bg-primary/10 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-primary shadow-[0_0_5px_1px_rgba(130,69,236,0.3)]"
                    >
                        <h3
                            className="text-1xl sm:text-2xl font-semibold text-foreground mb-4 text-center"
                        >
                            {category.title}
                        </h3>
                        <Tilt
                            key={category.title}
                            tiltMaxAngleX={20}
                            tiltMaxAngleY={20}
                            perspective={1000}
                            scale={1.05}
                            transitionSpeed={1000}
                        >

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex flex-col gap-2 items-center justify-center bg-background border-1 border-primary/30 py-2 px-2 rounded-3xl sm:py-2 sm:px-2 text-center"
                                    >
                                        <img
                                            src={skill.logo}
                                            alt={`${skill.name} logo`}
                                            className="w-6 h-6 sm:w-7 sm:h-7"
                                        />
                                        <div className="text-xs sm:text-sm text-foreground">
                                            {skill.name}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Tilt>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills