import React, { useState } from 'react'
import img from '../assets/steeeve.png'

const Introduction = () => {
    const [toggle, setToggle] = useState(true)
    return (
        <>
            <div className='text-xl text-left md:text-lg'>Hello! I am Rohan Jaiswal :D</div>
            <ul className='md:mt-2 mt-3 list-inside tracking-wide list-disc'>
                <li>
                    i am a <span className='text-dark-blue hover:text-lighter-blue font-light duration-300 font-montserrat tracking-wide cursor-pointer' onClick={() => {
                        setToggle(!toggle)
                    }}>
                        {
                            toggle ? 'YACS' : 'YET ANOTHER COMPUTER SCIENCE'
                        }
                    </span> '25 grad
                </li>
                <li className='mt-1'>
                    i call myself a full stack developer, <br className='md:hidden' /> <span className='md:ml-0 ml-5' /> more of a backend guy tho :P
                </li>
                <li className='mt-1'>
                    i like making mobile apps in react <br className='md:hidden' /> <span className='md:ml-0 ml-5' /> native
                </li>
                <li className='mt-1'>
                    golang is my 2nd language
                </li>
                <li className='mt-1'>
                    tailwind is my bestfriend
                </li>
                <li className='mt-1'>
                    connect with me on:
                    <a href='https://linkedin.com/in/jrjaro18' className='hover:text-lighter-blue text-dark-blue text-5 duration-300 ml-1 tracking-wide font-light font-montserrat' target='_blank' rel='noreferrer'> Linkedin </a>
                    <a href='https://github.com/jrjaro18' className='hover:text-lighter-blue text-dark-blue text-5 duration-300 ml-1 tracking-wide font-light font-montserrat' target='_blank' rel='noreferrer'> Github </a>
                    <br className='md:hidden' /><span className='md:ml-0 ml-4' />
                    <a href='https://app.daily.dev/jrjaro18' className='hover:text-lighter-blue text-dark-blue text-5 duration-300 ml-1 tracking-wide font-light font-montserrat mr-1' target='_blank' rel='noreferrer'>Daily.dev </a>
                    or drop a
                    <a href='mailto:jrjaro18@duck.com' className='hover:text-lighter-blue text-dark-blue duration-300 text-5 ml-1 tracking-wide font-light font-montserrat mr-1' target='_blank' rel='noreferrer'>mail</a>
                </li>
            </ul>
            <img src={img} alt='rohan' className='md:visible absolute invisible hover:scale-125 cursor-pointer opacity-0 hover:opacity-100 active:scale-100 duration-1000 top-3 right-2 h-10 w-10' />
        </>
    )
}

export default Introduction