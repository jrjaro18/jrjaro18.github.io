import React, { useEffect } from 'react'

const Post = () => {
    useEffect(() => {
      scrollTo(0, 0)
    }, [])
    
  return (
    <div className='selection:bg-light-blue bg-slate-50 min-h-screen overflow-hidden text-black sm:px-14 px-4 pt-2 font-montserrat dark:bg-slate-950 dark:text-white pb-10'>
        <div className='text-2xl my-2 text-justify'>
            {data.title}
        </div>
        <div
            className=' text-end my-4'
        >
            {data.createdAt}
        </div>
        <div className='mt-2 text-justify md:text-base text-lg' dangerouslySetInnerHTML={{ __html: data.content }} />
    </div>
  )
}

export default Post

const data = {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vel voluptas, eum, tempore officia possimus velit aliquid totam, officiis amet animi deserunt ipsam porro esse!",

    content: "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, sunt consequuntur voluptates possimus molestiae reiciendis, unde tempore iusto neque voluptatum et corrupti eveniet, ratione perferendis adipisci quisquam in ea. Culpa dolor accusantium neque autem. Deleniti dolore eaque earum soluta rerum fugit dolor molestiae non tempore iste, provident ratione praesentium maiores tempora dolorem qui amet delectus inventore quaerat corrupti ipsum voluptate nostrum aliquid? Quisquam saepe ratione reiciendis vitae, quasi eos excepturi dolor voluptatibus voluptatem quos ullam, eum, fuga magni suscipit quas ducimus animi nam illo placeat corporis voluptate accusantium! Pariatur fugiat maxime blanditiis dolor veniam mollitia dolore. </p> <br /> <p> Velit adipisci, itaque atque unde molestiae reiciendis. Quia aspernatur tempora, dicta nam consequatur quos ab officiis minima, odit quasi necessitatibus delectus sunt dolore exercitationem minus magni impedit? Id sint perferendis omnis eius exercitationem placeat, dicta magni expedita recusandae nobis quia ipsum. Maxime voluptatem, sint nisi minima modi, illo, soluta nihil rerum eaque necessitatibus a odio similique quis ducimus eum consequatur praesentium quia? Quibusdam maiores soluta alias quos ipsam optio quae in? Molestias facere rerum fugit laborum quibusdam earum ipsa et! Consectetur officiis, repellat inventore quos ea iste maxime neque hic harum. Aliquam molestias quasi dolor eum excepturi mollitia voluptate ullam eos nostrum exercitationem fugit atque facilis provident ducimus, deleniti accusantium quam tempore molestiae hic saepe, officiis tenetur eveniet maiores. Non est et molestiae, atque dolores praesentium necessitatibus excepturi magni! Maiores numquam mollitia labore obcaecati quis blanditiis soluta, iure necessitatibus quos omnis ut eum culpa laudantium, molestias eveniet ab deleniti expedita magnam ad! Iure suscipit est, non illum autem sint similique facere explicabo inventore voluptatum fuga minus qui illo aliquam dicta, rerum ipsam delectus. Id eaque architecto aut harum rerum distinctio quidem laudantium nulla porro debitis, numquam iusto voluptatem inventore velit atque laborum cum quisquam similique impedit dolor ipsam! Eius vero facere quas quam eligendi! </p> <br> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, quam. Molestias atque quibusdam a ducimus sapiente veniam architecto mollitia accusamus debitis iusto. Voluptates eligendi, ea vel quas accusantium eaque iste ut facere iure molestiae non fuga sunt. Beatae illo necessitatibus et vitae distinctio minus, earum vel? Delectus repellat nisi veritatis, fuga architecto enim. Impedit dolorem numquam adipisci exercitationem aliquid qui magni! Voluptatem ut sunt ad ducimus quis quo necessitatibus soluta, voluptates amet atque magnam voluptas doloremque magni repellat libero perspiciatis obcaecati similique rem. Minus dignissimos qui perspiciatis inventore obcaecati delectus, fugiat reiciendis voluptatibus, rerum debitis eveniet optio corporis, sunt quibusdam? Est quisquam ipsam corrupti ratione asperiores impedit sequi esse, placeat quia fugiat repudiandae doloribus dolore inventore obcaecati praesentium officiis eveniet fugit. Ducimus perspiciatis fugiat alias aliquam! Molestias in voluptatibus blanditiis illo, ut quaerat ipsam facere optio animi laborum ex laboriosam! Labore nulla tempore sint voluptate exercitationem et fugiat illum, officiis esse corrupti dolorem distinctio velit laborum, quidem voluptas, obcaecati temporibus odio atque hic alias? Alias dolorem at ea excepturi voluptates sit exercitationem earum quis sunt repellendus delectus nam ullam perferendis dolorum sed minus ducimus nostrum officiis, suscipit quo quos? Magni molestias sint aspernatur soluta provident ipsum harum sed, nihil alias.</p>",

    createdAt: "2021-09-01",
}