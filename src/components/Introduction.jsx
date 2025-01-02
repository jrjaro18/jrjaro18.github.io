import React, { useState } from 'react'
import img from '../assets/steeeve.png'
import { useNavigate } from 'react-router-dom'

const Introduction = () => {
    const [toggle, setToggle] = useState(true)
    const navigate = useNavigate()
    return (
        <>
            <div className='text-xl text-left md:text-lg'>Hello! I am Rohan Jaiswal :D</div>
            <ul className='md:mt-2 mt-3 list-inside tracking-wide list-disc'>
                <li>
                    i am a <span className='text-dark-blue hover:text-darker-blue dark:hover:text-lighter-blue font-light duration-300 font-montserrat tracking-wide cursor-pointer' onClick={() => {
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
                    <a href='https://linkedin.com/in/jrjaro18' className='text-dark-blue hover:text-darker-blue dark:hover:text-lighter-blue text-5 duration-300 ml-1 tracking-wide font-light font-montserrat' target='_blank' rel='noreferrer'> Linkedin </a>
                    <a href='https://github.com/jrjaro18' className='text-dark-blue hover:text-darker-blue dark:hover:text-lighter-blue text-5 duration-300 ml-1 tracking-wide font-light font-montserrat' target='_blank' rel='noreferrer'> Github </a>
                    <br className='md:hidden' /><span className='md:ml-0 ml-4' />
                    <a href='https://app.daily.dev/jrjaro18' className='text-dark-blue hover:text-darker-blue dark:hover:text-lighter-blue text-5 duration-300 ml-1 tracking-wide font-light font-montserrat mr-1' target='_blank' rel='noreferrer'>Daily.dev </a>
                    or drop a
                    <a href='mailto:jrjaro18@duck.com' className='text-dark-blue hover:text-darker-blue dark:hover:text-lighter-blue duration-300 text-5 ml-1 tracking-wide font-light font-montserrat mr-1' target='_blank' rel='noreferrer'>mail</a>
                </li>
            </ul>
            <img src={img} alt='rohan' className='md:visible absolute invisible hover:visible hover:scale-110 cursor-pointer opacity-0 hover:opacity-100 active:scale-50 duration-1000 top-3 right-2 h-10 w-10' onClick={()=>{
                navigate('/auth')
            }}/>
        </>
    )
}

export default Introduction