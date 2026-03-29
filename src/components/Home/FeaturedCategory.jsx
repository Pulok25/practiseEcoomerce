import React from 'react'
import category from './category';

const FeaturedCategory = () => {
  return (
    <div className='flex gap-12 flex-wrap container mx-auto pt-12 justify-center items-center'>
       {
        category.map((cat)=>{
            return(
                
                <div key={cat.id}>
                    <img src={cat.cat_img} alt={cat.title} />
                    <h2>{cat.title}</h2>

                </div>

            )
        })
       }
    </div>
  )
}

export default FeaturedCategory
