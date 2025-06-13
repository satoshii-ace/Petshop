import React from 'react'
import dogs from '../assets/dogs.jpg'
import cats from '../assets/cats.jpg'
import birds from '../assets/birds.png'
import fish from '../assets/fish.jpg'
import hamster from '../assets/hamster.jpg'
import accessories from '../assets/accessories.jpg'

const categories = [
    {img: dogs, alt:"Dogs", title: "Dogs", description:"amet consectetur, adipisicing elit."},
    {img: cats, alt:"Cats", title: "Cats", description:"amet consectetur, adipisicing elit."},
    {img: birds, alt:"Birds", title: "Birds", description:"amet consectetur, adipisicing elit."},
    {img: fish, alt:"Fish & Aquatics", title: "Fish & Aquatics", description:"amet consectetur, adipisicing elit."},
    {img: hamster, alt:"Small Pets", title: "Small Pets", description:"amet consectetur, adipisicing elit."},
    {img: accessories, alt:"Pet Accessories", title: "Pet Accessories", description:"amet consectetur, adipisicing elit."}
]

const Categories = () => {
  return (
   <section id='categories' className='py-16 scroll-mt-20 bg-white'>
    <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-amber-950 mb-3'>
                Explore Our Pet Collections
            </h2>
            <p className='text-lg text-gray-800 max-w-2xl mx-auto'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
            {categories.map((category, index)=>(
                <div key={index} className='relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
                    <div className='h-64 overflow-hidden'>
                        <img src={category.img} alt={category.alt} 
                        className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500' />
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent'>
                        <div className='absolute bottom-0 left-0 p-6'>
                            <h3 className='text-xl font-semibold text-white'>{category.title}</h3>
                            <p className='text-gray-200 mt-1'>{category.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
   </section>
  );
};

export default Categories