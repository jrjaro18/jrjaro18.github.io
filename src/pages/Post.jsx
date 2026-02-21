import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import supabase from '../supabase/SupabaseClient'
import SkeletonLoader from "tiny-skeleton-loader-react";
import { Helmet } from 'react-helmet-async'

const Post = () => {
  const { id } = useParams()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    scrollTo(0, 0)
    const fetchPost = async () => {
      const { data, error } = await supabase.from('Blogs').select('title, content, created_at').eq('id', id)
      if (error) {
        console.log('error', error)
        alert("Try Again Later")
      } else {
        console.log('data', data)
        setData(data[0])
        if (data.length === 0) {
          setData({ title: 'Post not found', content: '', created_at: 'T' })
        }
        setLoading(false)
      }
    }
    fetchPost()
  }, [])

  return (
    <>
      <Helmet>
        <title>{data?.title || 'Rohan Jaiswal'}</title>

        <meta name="description" content={data?.title} />

        <link rel="canonical" href={`https://jrjaro18.github.io/#/post/${id}`} />

        <meta property="og:title" content={data?.title} />
        <meta property="og:description" content={data?.title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://jrjaro18.github.io/#/post/${id}`} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: data?.title,
            description: data?.title,
            author: {
              "@type": "Person",
              name: "Rohan Jaiswal"
            },
            url: `https://jrjaro18.github.io/#/post/${id}`
          })}
        </script>
      </Helmet>

      <div id='post' className='selection:bg-light-blue bg-slate-50 min-h-screen overflow-hidden text-black sm:px-20
     px-3 sm:pt-6 pt-2 font-montserrat dark:bg-slate-950 dark:text-white pb-10'>
        <div className='text-2xl my-2 text-justify'>
          {
            !loading ? data.title : (
              <SkeletonLoader
                height="7vh"
                width="100%"
                background={localStorage.getItem('theme') === 'dark' ? '#02021d' : '#d7d7d7'}
              />
            )
          }
        </div>
        <div
          className='flex flex-col justify-end items-end sm:mb-6 sm:mt-6 my-4'
        >
          <span className='min-w-44 text-end md:text-base text-lg'>
            {
              !loading ? data.created_at.split('T')[0] : (
                <SkeletonLoader
                  height="6vh"
                  width={"100%"}
                  background={localStorage.getItem('theme') === 'dark' ? '#02021d' : '#d7d7d7'}
                />
              )
            }
          </span>
        </div>
        {
          !loading ? <div className='my-2 text-justify md:text-base text-lg'
            dangerouslySetInnerHTML={{ __html: data.content }}
          /> : (
            <SkeletonLoader
              height="76vh"
              width="100%"
              background={localStorage.getItem('theme') === 'dark' ? '#02021d' : '#d7d7d7'}
            />
          )
        }
      </div>
    </>
  )
}

export default Post