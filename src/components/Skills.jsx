import React from 'react'

const Skills = () => {
    return (
        <>
            <div className='mt-4 cursor-none select-none'>
                <span className='text-xl text-left md:text-lg'>
                    I primarily build with
                </span>
                <div className='md:mt-3 mt-4 w-full flex flex-wrap gap-4 md:justify-normal justify-start items-center'>
                    {
                        techstack.map((tech, index) => (
                            <span key={index} className='bg-dark-blue md:min-w-36 min-w-[45%] shadow-2xl shadow-darker-blue text-center p-2 duration-200 hover:-translate-y-1 hover:bg-light-blue'>{tech}</span>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Skills

const techstack = [
    'Golang',
    'React Native',
    'React',
    'Tailwind CSS',
    'Supabase',
    'Node.js',
    'PostgreSQL',
    'MongoDB',
    'Docker',
    'Gemini',
]