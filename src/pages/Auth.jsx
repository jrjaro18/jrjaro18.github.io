import React, { useState } from 'react'
import supabase  from '../supabase/SupabaseClient'

const Auth = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = async (e) => {
        console.log('email', email)
        console.log('password', password)
        e.preventDefault()
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })
        if (error) {
            console.log('error', error)
            alert(error)
        } else {
            console.log('data', data)
        }
    }

    return (
        <div className='dark:bg-slate-950 slate-50  h-screen w-screen flex justify-center items-center font-raleway select-none'>
            <form className='flex flex-col justify-center items-center p-4 gap-4 border-[1px] rounded-md border-light-blue dark:border-darker-blue bg-transparent' onSubmit={onSubmit}>
                <div className='text-center text-light-blue text-lg dark:text-white'>Login</div>
                <input
                    type={'email'}
                    className='rounded-md p-2 outline-none bg-transparent w-80 text-dark-blue dark:text-white'
                    placeholder='email'
                    onChange={
                        (e) => setEmail(e.target.value)
                    } />
                <input
                    type={'password'}
                    className='rounded-md p-2 outline-none bg-transparent w-80 text-dark-blue dark:text-white'
                    placeholder='password'
                    onChange={
                        (e) => setPassword(e.target.value)
                    }
                />
                <div className='w-80 my-2 border-t-[1px] border-light-blue dark:border-darker-blue rounded-lg' />
                <button
                    className='bg-light-blue dark:bg-darker-blue hover:bg-dark-blue text-white p-2 rounded-md active:scale-95 duration-300 w-80'
                    onClick={onSubmit}
                >Submit</button>
            </form>
        </div>
    )
}

export default Auth