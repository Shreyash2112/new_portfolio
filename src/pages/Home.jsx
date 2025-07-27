import { useState } from 'react'
import NavBar from '../components/sections/NavBar'
import LoadingScreen from '../components/LoadingScreen'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Skills from '../components/sections/Skills'

function Home() {
    const [isLoaded, setIsLoaded] = useState(true)
    function toggleLoaded() {
        setIsLoaded(true)
    }

    return (
        <>
            {!isLoaded ? <LoadingScreen onComplete={toggleLoaded} /> : (
                <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_90%_at_50%_0%,#000_70%,transparent_100%)]"></div>
                    <NavBar />
                    {/* Main content */}
                    <main>
                        <Hero />
                        <About />
                        <Skills />
                    </main>
                    {/* Skills in the form of card with hover effect */}
                    {/* Projects in the form of slider with hover effect */}
                    {/* Footer */}
                </div>)
            }
        </>
    )
}

export default Home