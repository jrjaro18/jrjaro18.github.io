import React from 'react'
import Introduction from '../components/Introduction'
import Skills from '../components/Skills'
import Posts from '../components/Posts'
import AboutMe from '../components/AboutMe'
import { Helmet } from 'react-helmet-async'

function NewHome() {
    return (
        <>
            <Helmet>
                <title>Rohan Jaiswal | Software Engineer </title>
                <meta name="description" content="Rohan Jaiswal - Backend developer specializing in Golang, Java, React Native, Node and scalable systems." />
                <meta property="og:type" content="website" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        name: "Rohan Jaiswal",
                        jobTitle: "Backend Developer",
                        url: "https://jrjaro18.github.io/",
                    })}
                </script>
            </Helmet>

            <div className='pt-3 sm:px-4 px-2 min-h-screen dark:bg-slate-950 dark:text-gray-200 font-montserrat bg-slate-50 text-slate-950 selection:bg-light-blue tracking-wide pb-8'>
                <Introduction />
                <Skills techstack={techstack1} title="My day to day work involves" />
                <Skills techstack={techstack2} title="Previous Experience" />
                <AboutMe />
                <Posts />
            </div>
        </>
    )
}

export default NewHome

const techstack1 = [
    'Java',
    'Springboot',
    'Kafka',
    'Aerospike',
    'Connectors',
    'Docker',
]

const techstack2 = [
    'React Native',
    'Tailwind',
    'React',
    'Golang',
    'Python',
    'PostgreSQL',
    'MongoDB',
    'Node.js',
    'LLMs'
]