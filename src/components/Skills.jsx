import React from 'react'

const Skills = ({ techstack, title }) => {
    return (
        <div className='mt-5 pb-3 sm:mt-4 sm:p-0 select-none'>
            <span className='text-xl text-left sm:text-lg select-none'>
                {title}
            </span>
            <div className='cursor-none sm:mt-3 mt-5 w-full flex flex-wrap gap-y-5 sm:justify-normal justify-evenly items-center text-slate-50 sm:text-base text-lg'>
                {
                    techstack.map((tech, index) => (
                        <span key={index} className='bg-dark-blue sm:mx-2 mx-1 sm:min-w-36 sm:px-0 px-2.5 shadow-2xl hover:shadow-darker-blue text-center p-2 duration-200 hover:-translate-y-1 hover:bg-darker-blue '>{tech}</span>
                    ))
                }
            </div>
        </div>
    )
}

export default Skills
