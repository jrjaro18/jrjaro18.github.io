import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import supabase from '../supabase/SupabaseClient'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Writer = () => {
  const navigate = useNavigate()
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');


  useEffect(() => {
    const checkSession = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        alert('You are not logged in')
        navigate('/')
      }
    }
    checkSession()
  }, [])

  const onPressSubmit = async () => {
    if (title.length < 10) {
      alert('Title must be at least 3 characters')
      return
    } 
    if (value.length < 100) {
      alert('Content must be at least 10 characters')
      return
    }
    const { data, error } = await supabase.from('Blogs').insert([
      { title, content: value }
    ])
    if (error) {
      console.log('error', error)
      alert(error)
    } else {
      alert('submitted')
      setTitle('')
      setValue('')
    }
  }

  const onPressLogout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.log('error', error)
      alert(error)
    } else {
      alert('logged out')
      navigate('/')
    }
  }

  return (
    <div className='dark:bg-zinc-900 slate-50 p-2 h-screen flex flex-col justify-center items-start select-none font-raleway tracking-wide'>
      <button
        className='absolute top-1 right-2 opacity-0 hover:opacity-100 bg-light-blue dark:bg-darker-blue hover:bg-dark-blue text-white p-2 rounded-md active:scale-95 duration-500'
        onClick={onPressLogout}
      >Log Out</button>

      <input
        type={'text'}
        className='rounded-none p-2 outline-none bg-transparent w-[98vw] border-[1px] border-slate-300 dark:text-white mb-2'
        placeholder='Title'
        onChange={
          (e) => setTitle(e.target.value)
        } />

      <TextEditor value={value} setValue={setValue} />  

      <button
        className='bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-600 dark:hover:bg-neutral-500 hover:text-white text-stone-600 dark:text-neutral-400 font-semibold w-44 p-2 rounded-md active:scale-95 duration-200'
        onClick={onPressSubmit}
      >Submit</button>

    </div>
  )
}

function TextEditor ({ value, setValue }) {
  
  const theme = localStorage.getItem("theme") == "dark" ? "dark" : "light";

  return <ReactQuill style={{
    width: "98vw",
    height: "75vh",
    marginBottom: "8vh",
    color: theme == "dark" ? "white" : "black",

  }}
    theme="snow"
    value={value}
    onChange={setValue}
  />;
}


export default Writer