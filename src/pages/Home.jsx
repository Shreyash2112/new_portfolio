import { useState } from 'react'
import NavBar from '../components/sections/NavBar'
import LoadingScreen from '../components/LoadingScreen'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'

function Home() {
    const [isLoaded, setIsLoaded] = useState(true)
    function toggleLoaded() {
        setIsLoaded(true)
    }

    return (
        <>
            {!isLoaded ? <LoadingScreen onComplete={toggleLoaded} /> : (
                <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
                    <NavBar />
                    {/* Main content */}
                    <main>
                        <Hero />
                        <About />
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