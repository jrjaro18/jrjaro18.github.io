import React, { useState } from 'react'
import img from '../assets/steeeve.png'
import { useNavigate } from 'react-router-dom'

const Introduction = () => {
    const [toggle, setToggle] = useState(true)
    const navigate = useNavigate()
    return (
        <>
            <div className='text-2xl text-left sm:text-lg sm:p-0 p-2.5'>Hello! <br className='sm:hidden' />I am Rohan Jaiswal :D</div>
            <ul className='mt-2 list-inside tracking-wide list-disc sm:text-base text-lg flex flex-col gap-y-4 sm:gap-y-2'>
                <li>
                    i am a <span className='text-dark-blue hover:text-darker-blue dark:hover:text-lighter-blue font-light duration-300 font-montserrat tracking-wide cursor-pointer ' onClick={() => {
                        setToggle(!toggle)
                    }}>
                        {
                            toggle ? 'YA-CS' : 'YET ANOTHER COMPUTER SCIENCE'
                        }
                    </span> grad from '25 batch
                </li>
                <li className=''>
                    i have completed my <br className='sm:hidden' /> <span className='sm:ml-0 ml-5' />engineering from<a href='https://maps.app.goo.gl/sb9LQSaBfD9gRgnPA' className='text-dark-blue hover:text-darker-blue dark:hover:text-lighter-blue text-5 duration-300 ml-1 tracking-wide font-light font-montserrat' target='_blank' rel='noreferrer'>SPIT</a>, Mumbai
                </li>
                <li className=''>
                    its been an year since i joined<a href='https://www.linkedin.com/company/idfcfirstbank' className='text-dark-blue hover:text-darker-blue dark:hover:text-light-blue text-5 duration-300 ml-1 tracking-wide font-light font-montserrat' target='_blank' rel='noreferrer'>IDFC</a>,<br className='sm:hidden' /><span className='sm:ml-0 ml-5' /> including a 6 month internship
                </li>
                <li className=''>
                    i call myself a full stack developer, <br className='sm:hidden' /> <span className='sm:ml-0 ml-5' /> more of a backend guy tho :P
                </li>
                <li className=''>
                    i like making mobile apps in react <br className='sm:hidden' /> <span className='sm:ml-0 ml-5' /> native and tailwind
                </li>
                <li className=''>
                    connect with me on:
                    <a href='https://linkedin.com/in/jrjaro18' className='text-dark-blue hover:text-darker-blue dark:hover:text-lighter-blue text-5 duration-300 ml-1 tracking-wide font-light font-montserrat' target='_blank' rel='noreferrer'> Linkedin</a>, <br className='sm:hidden' /> <span className='sm:ml-0 ml-5' />
                    <a href='https://github.com/jrjaro18' className='mr-0.5 text-dark-blue hover:text-darker-blue dark:hover:text-lighter-blue text-5 duration-300 ml-1 tracking-wide font-light font-montserrat' target='_blank' rel='noreferrer'> Github </a>
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