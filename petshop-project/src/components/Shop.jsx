import React, { useEffect, useState } from 'react'
import pet from '../assets/pet.jpg'
import pet1 from '../assets/pet1.jpg'
import pet2 from '../assets/pet2.jpg'
import pet3 from '../assets/pet3.jpg'
import pet4 from '../assets/pet4.jpg'
import pet5 from '../assets/pet5.jpg'
import pet6 from '../assets/pet6.jpg'
import { FiChevronLeft, FiChevronRight, FiHeart, FiShoppingCart, FiStar } from 'react-icons/fi'

const Shop = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [productsPerPage, setProductsPerPage] = useState(4);

    const shop = [
        {id: 1, name:'Bantay', price: 99.99, rating: 4.5, image:pet, discount: 20},
        {id: 2, name:'Cupcake', price: 50.99, rating: 4.8, image:pet1, discount: 15},
        {id: 3, name:'Nerd', price: 30.99, rating: 4.0, image:pet2, discount: 0},
        {id: 4, name:'Christian', price: 60.99, rating: 4.6, image:pet3, discount: 30},
        {id: 5, name:'Maxx', price: 79.99, rating: 4.1, image:pet4, discount: 10},
        {id: 6, name:'Spot', price: 33.99, rating: 4.4, image:pet5, discount: 25},
        {id: 7, name:'Alex', price: 26.99, rating: 4.8, image:pet6, discount: 5}
    ];
    useEffect(() =>{
        const handleResize = () => {
        if (window.innerWidth < 640){
            setProductsPerPage(1);
        }else if (window.innerWidth < 768){
            setProductsPerPage(2);
        }else if (window.innerWidth < 1024){
            setProductsPerPage(3);
        }else {
            setProductsPerPage(4);
        }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

    }, []);

    const totalSlides = Math.ceil(shop.length / productsPerPage);

    const nextSlide = () => {
        setCurrentSlide((prev)=> (prev === totalSlides - 1 ? 0 : prev + 1));
    };
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    const visibleProducts = shop.slice(
        currentSlide * productsPerPage,
        (currentSlide + 1) * productsPerPage
    );

  return (
    <section id='shop' className='py-12 scroll-mt-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
            <div className='flex justify-between items-center mb-8'>
                <h2 className='md:text-3xl text-2xl font-bold text-amber-900'>Featured Pets</h2>
                <div className='flex space-x-4'>
                    <button 
                    onClick={prevSlide}
                    className='p-2 rounded-full bg-white shadow-md hover:bg-green-100 text-green-600 transition-colors'
                    aria-label='Previous slide'
                    >
                        <FiChevronLeft size={24} />
                    </button>
                    <button 
                    onClick={nextSlide}
                    className='p-2 rounded-full bg-white shadow-md hover:bg-green-100 text-green-600 transition-colors'
                    aria-label='Next slide'
                    >
                        <FiChevronRight size={24} />
                    </button>
                </div>
            </div>
            <div className='relative overflow-hidden'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {
                        visibleProducts.map((shop) => (
                            <div key={shop.id}
                            className='bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:scale-105'
                            >
                                <div className='relative'>
                                    <img src={shop.image} alt={shop.name}
                                    className='w-full h-64 object-cover' />
                                    {
                                        shop.discount >0 && (
                                            <span className='absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full'>
                                                - {shop.discount}%
                                            </span>
                                        )
                                    }
                                    <button className='absolute top-3 left-3 p-2 bg-white rounded-full shadow-md hover:bg-green-100 text-gray-700'>
                                        <FiHeart size={18} />
                                    </button>
                                </div>
                                <div className='p-4'>
                                    <div className='flex items-center mb-2'>
                                        {
                                            [...Array(5)].map((_, i) => (
                                                <FiStar key={i} size={16}
                                                className={i < Math.floor(shop.rating)
                                                    ? 'text-yellow-400 fill-current'
                                                    : 'text-gray-300'
                                                }/>))
                                        }
                                        <span className='text-sm text-gray-500 ml-1'>
                                            ({shop.rating})
                                        </span>
                                    </div>
                                    <h3 className='text-lg font-semibold text-gray-800 mb-1'>
                                        {shop.name}
                                    </h3>
                                    <div className='flex items-center justify-between'>
                                        <div>
                                            <span className='text=lg font-bold text=green-600'>
                                                ${(shop.price * (1 - shop.discount/100)).toFixed(2)}
                                            </span>
                                            {
                                                shop.discount > 0 && (
                                                    <span className='text-sm text-gray-500 line-through ml-2'>
                                                        ${shop.price.toFixed(2)}
                                                    </span>
                                                )
                                            }
                                        </div>
                                        <button className='p-2 bg-green-950 rounded-full text-white hover:bg-green-700 transition-colors'>
                                            <FiShoppingCart size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='flex justify-center mt-6 space-x-2'>
                {[...Array(totalSlides)].map((_, index) =>(
                    <button key={index} onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-green-950':'bg-gray-400'}`}
                    aria-label={`Go to slide ${index + 1}`}></button>
                )
                )}
            </div>
        </div>
    </section>
  );
};

export default Shop