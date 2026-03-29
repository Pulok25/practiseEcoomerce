import React from 'react';
import products from './products';

import ProductCard from './ProductCard';


const FeaturedProducts = () => {



  return (
   <section className='container mx-auto py-12'>
    <div className='max-w-lg mx-auto text-center py-4 space-y-4'>
       <h1 className='text-4xl mb-4 font-bold'>Featured Products</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam distinctio iusto impedit!</p>
    </div>
     <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
      {
        products.map(product => {
          return (
            <ProductCard product={product} key={product.id}/>
          );

        })
      }
    </div>
   </section>
  );
};

export default FeaturedProducts;
