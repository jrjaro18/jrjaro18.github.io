import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Post from '../pages/Post'
import supabase from '../supabase/SupabaseClient'
import loader from '../assets/loader.gif'
import SkeletonLoader from 'tiny-skeleton-loader-react'

const Posts = () => {

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase.from('Blogs').select(`id, created_at, title`).order('created_at', { ascending: false })
      if (error) {
        console.log('error', error)
        alert("Try Again Later")
      } else {
        setPosts(data)
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  const navigate = useNavigate()
  return (
    <>
      <div className='mt-4'>
        <div className='select-none text-xl text-left sm:text-lg flex sm:gap-5 gap-0 justify-between items-center'>
          <div>
            Posts
          </div>
          <div>
            {loading && <img src={loader} className='h-4 w-4' alt="Loading..." />}
          </div>
        </div>
        {
          !loading ? (
            <div className='mt-4 md:justify-start flex flex-wrap gap-[2%] gap-y-4'>
              {
                posts.map((post) => (
                  <div key={post.id} className='h-40 relative md:w-[32%] w-full border-[2px] border-black dark:border-slate-50 p-2 cursor-pointer select-none active:scale-[0.98] duration-300 hover:-translate-y-1 my-1'
                    onClick={() => {
                      navigate(`/post/${post.id}`)
                    }}>
                    <div className='text-justify overflow-hidden text-ellipsis sm:line-clamp-4 line-clamp-3 sm:text-base text-lg'>
                      {post.title}
                    </div>
                    <div className='absolute bottom-2 right-2 text-dark-blue dark:text-light-blue text-lg sm:text-base'>
                      {post.created_at.split('T')[0]}
                    </div>
                  </div>
                ))
              }
            </div>
          ) : (
            <div className='mt-2 md:justify-start flex flex-wrap gap-[2%] gap-y-2'>
              {
                [1, 2, 3].map((i) => (
                  <div key={i} className='h-44 relative md:w-[32%] w-full cursor-none select-none my-1'>
                    <SkeletonLoader height='100%' width='100%' background={localStorage.getItem('theme') === 'dark' ? '#02021d' : '#d7d7d7'} />
                  </div>
                ))
              }
            </div>
          )
        }
      </div>
    </>
  )
}

export default Posts

// const posts = [
//   {
//       title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum cupiditate a aspernatur expedita dolores delectus soluta, aut maxime quis ducimus tempore rem inventore obcaecati perspiciatis.",
//       created_at: "2021-10-10TT12:00:00Z",
//       pin: true
//   },
//   {
//       title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, a!",
//       created_at: "2021-10-11T12:00:00Z",
//       pin: false
//   },
//   {
//       title: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
//       created_at: "2021-10-12T12:00:00Z",
//       pin: false
//   },
//   {
//       title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates pariatur tempore modi exercitationem eligendi placeat dolore esse quidem!",
//       created_at: "2021-10-13T12:00:00Z",
//       pin: false
//   }
// ]