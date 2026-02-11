import React from 'react'

function AboutMe() {
  return (
    <div className='sm:mt-5 mt-4'>
            <span className='text-xl text-left sm:text-lg select-none'>
                What I do ?
            </span>
            <div className='text-justify sm:mt-2 mt-3 w-full flex flex-wrap gap-y-5 sm:justify-normal justify-evenly items-center sm:text-base text-lg leading-relaxed'>
                my work involves building and maintaining an event driven low latency, high throughput financial system using Springboot, Kafka and Aerospike, which is consumed by various downstream services critical for banking operations either via events or apis.
            </div>
        </div>
  )
}

export default AboutMe