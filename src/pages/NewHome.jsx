import React from 'react'
import Introduction from '../components/Introduction'
import Skills from '../components/Skills'
import Posts from '../components/Posts'

function NewHome() {


    return (
        <div className='p-3 min-h-screen bg-slate-950 text-gray-200 font-montserrat selection:bg-light-blue tracking-wide'>
            <Introduction />
            <Skills />
            <Posts />
        </div>
    )
}

export default NewHome