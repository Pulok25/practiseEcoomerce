import React from 'react'
import products from './products';


const FeaturedProducts = () => {


  
  return (
    <div>
      {
        products.map(product => {
          return (
            <div key={product.id} className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={product.img}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{product.title}</h2>
    <p>{product.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
          )

        })
      }
    </div>
  )
}

export default FeaturedProducts
