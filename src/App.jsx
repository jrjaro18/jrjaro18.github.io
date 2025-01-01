import { useState } from 'react'
import image from "./assets/steeeve.png"

function App() {
  return (
    <div className='bg-neutral-900 min-h-screen text-neutral-200 p-4 font-raleway select-text'>
      <div className='flex justify-between items-center'>
        <div
          className='tracking-wider text-3xl'
        >
          Hello I am Rohan Jaiswal!
        </div>
        <a href="https://linkedin.com/in/jrjaro18"
          className='lg:inline none text-transparent hover:bg-red-400 px-3 py-2 text-base hover:text-neutral-950 hover:shadow-2xl hover:shadow-red-300 duration-500 hover:cursor-pointer font-montserrat'>
          i'm Steeeve :P
        </a>
      </div>
      <ul className='text-base mt-5 list-disc list-inside tracking-wider'>
        <li className='mt-1'>
          <span>i call myself a <span className='text-red-300 font-medium cursor-none'> full stack developer </span></span>
          <span className='md:inline md:text-transparent md:hover:text-red-100 md:text-sm md:ml-1 md:duration-1000 hidden'>(more of a backend guy tho ^_^ )</span>
        </li>
        <li className='mt-1'>
          i like making <span className='text-red-300 font-medium cursor-none'>mobile apps</span> in <span className='text-red-300 font-medium cursor-none'>react native</span>
        </li>
        <li className='mt-1'>
          i am a <span className='text-red-300 font-medium cursor-none'>gopher</span>  <span className='md:inline md:text-transparent md:hover:text-red-100 md:text-sm md:ml-1 md:duration-1000 hidden'>(Golang is GOATED)</span>
        </li>
        <li className='mt-1'>
          shoutout to <span className='text-red-300 font-medium cursor-none'>tailwind</span> for carrying my frontend career <span className='md:inline md:text-transparent md:hover:text-red-100 md:text-sm md:ml-2 md:duration-1000 hidden'>(this is the only animation i know)</span>
        </li>
      </ul>

      <div className='relative mt-6 z-0 min-h-64 flex md:w-4/6'>
        <div className='absolute bg-red-400 w-full h-full blur-3xl z-0 rounded-full top-0 left-0'></div>
        {/* Overlay for better text contrast */}
        <div className='absolute bg-black bg-opacity-50 w-full h-full rounded-lg top-0 left-0'></div>
        {/* Content */}
        <div className='relative flex flex-row gap-4 p-4 rounded-lg z-10 lg:flex-nowrap flex-wrap-reverse items-center justify-between'>
          <div className=''>
            <img src={image} alt='steeeve' className='' />
          </div>
          <div className='relative z-10 p-6 text-white font-medium text-justify lg:w-11/12'>
            "Rohan Jaiswal—a final-year Computer Science student from SPIT, Mumbai. He’s a backend enthusiast, a Golang pro, and a full-stack developer passionate about microservices, blockchain, and building scalable systems. Whether it’s mobile apps in React Native or clean, efficient code, Rohan’s always pushing boundaries and diving into cutting-edge tech. Let’s hear it for Rohan!"
            <div className='mt-2 text-sm text-end mr-3'>
              ~ ChatGPT
            </div>
          </div>
        </div>
      </div>


      <div className='mt-5 flex gap-2 flex-row flex-wrap text-base'>
        <div>
          Connect with me on:
        </div>
        <a href='https://linkedin.com/in/jrjaro18'
          className='text-red-300 hover:text-red-500 duration-500 hover:cursor-pointer font-montserrat font-medium'
        >
          Linkedin
        </a>,
        <a href='https://github.com/jrjaro18'
          className='text-red-300 hover:text-red-500 duration-500 hover:cursor-pointer font-montserrat font-medium'
        >
          Github
        </a>,
        <a href='https://app.daily.dev/jrjaro18'
          className='text-red-300 hover:text-red-500 duration-500 hover:cursor-pointer font-montserrat font-medium'
        >
          Daily.dev
        </a>
        or
        <a href='mailto:jrjaro18@duck.com'
          className='text-red-300 hover:text-red-500 duration-500 hover:cursor-pointer font-montserrat font-medium'
        >
          Reach Me Directly
        </a>
      </div>

      <div className='mt-6 lg:mt-2'>
        Anyways here's my    {" "}
        <a href='https://docs.google.com/document/d/1rUitCNDEqlH9WvvaRiwbKUaAvVbWubNVdpQQe_w5B7Y/edit?usp=sharing'
          className='text-red-300 hover:text-red-500 duration-500 hover:cursor-pointer font-montserrat font-medium'
        >
          Resume
        </a>
      </div>
    </div>
  )
}

export default App
