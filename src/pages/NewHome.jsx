import React from 'react'
import Introduction from '../components/Introduction'
import Skills from '../components/Skills'
import Posts from '../components/Posts'

function NewHome() {
    return (
        <div className='pt-3 sm:px-4 px-2 min-h-screen dark:bg-slate-950 dark:text-gray-200 font-montserrat bg-slate-50 text-slate-950 selection:bg-light-blue tracking-wide pb-8'>
            <Introduction />
            <Skills />
            <Posts />
        </div>
    )
}

export default NewHome