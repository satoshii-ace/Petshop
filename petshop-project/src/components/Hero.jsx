import React from 'react'
import hero from '../assets/hero.jpg'

const Hero = () => {
  return (
    <section id='home' className='bg-amber-50 scroll-mt-20 py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-10'>
            <div className='text-center lg:text-left max-w-xl'>
                <h1 className='text-4xl sm:text-5xl font-bold text-amber-950 leading-tight mb-4'>
                    Discover The Best Deals on Top Products
                </h1>
                <p className='text-gray-700 text-base sm:text-lg mb-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, minima a possimus harum doloremque dolor facere! Earum aliquid placeat soluta repellendus, eveniet suscipit voluptatem laboriosam, illo facere sapiente voluptates esse!
                </p>
                <div className='flex justify-center lg:justify-start gap-4'>
                    <a href="/shop"
                    className='px-6 py-3 bg-green-900 text-white text-sm font-semibold rounded-lg shadow hover:bg-green-600 transition'>Shop Now</a>
                    <a href="/offers" className='px-6 py-3 border border-green-500 text-green-600 text-sm font-semibold rounded-lg hover:bg-green-200 transition'>View Offers</a>
                </div>
            </div>
            <div className='w-full lg:w-1/2 flex justify-center'>
            <img src={hero} alt="Hero Image" className='w-3/4 lg:w-full max-w-md mx-auto rounded-xl shadow-lg' />
            </div>
        </div>
    </section>
  )
}

export default Hero