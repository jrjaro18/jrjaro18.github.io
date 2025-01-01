import React from 'react'

const Posts = () => {
  return (
    <>
      <div className='mt-5'>
        <div className='select-none text-xl text-left md:text-lg'>
          Posts
        </div>
        <div className='mt-2 md:justify-start flex flex-wrap gap-[2%] gap-y-2'>
          {
            posts.map((post, index) => (
              <div key={index} className='h-40 relative md:w-[32%] w-full border-[1px] p-2 cursor-pointer select-none active:scale-[0.985] duration-300 active:translate-y-0 hover:-translate-y-1 my-1'>
                <div className='text-justify overflow-hidden text-ellipsis line-clamp-4'>
                  {post.title}
                </div>
                <div className='absolute bottom-2 right-2 text-lighter-blue'>
                  {post.date}
                </div>
              </div>

            ))
          }
        </div>
      </div>
    </>
  )
}

export default Posts

const posts = [
  {
      title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum cupiditate a aspernatur expedita dolores delectus soluta, aut maxime quis ducimus tempore rem inventore obcaecati perspiciatis.",
      date: "2021-10-10",
      pin: true
  },
  {
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, a!",
      date: "2021-10-11",
      pin: false
  },
  {
      title: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
      date: "2021-10-12",
      pin: false
  },
  {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates pariatur tempore modi exercitationem eligendi placeat dolore esse quidem!",
      date: "2021-10-13",
      pin: false
  }
]