import React from 'react';
import img1 from '../../../assets/images/exposure.jpg';
import img2 from '../../../assets/images/over-computer.jpg';
import img3 from '../../../assets/images/menf.jpg';

const Carousel = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full h-[30rem]" />
                <div className="absolute flex transform h-full w-full bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 ml-52 pl-10 lg:mt-35 lg:w-1/3 sm:text-sm mt-24 w-1/2'>
                        <h1 className='text-5xl lg:text-6xl font-bold'>Smart <span className='text-orange-400'>Teacher</span></h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-outline btn-accent">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>

                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full h-[30rem]" />
                <div className="absolute flex transform h-full w-full bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 ml-52 pl-10 lg:mt-35 lg:w-1/3 sm:text-sm mt-24 w-1/2'>
                        <h1 className='text-5xl lg:text-6xl font-bold'>Smart <span className='text-orange-400'>Teacher</span></h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-outline btn-accent">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>

                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full h-[30rem]" />
                <div className="absolute flex transform h-full w-full bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 ml-52 pl-10 lg:mt-35 lg:w-1/3 sm:text-sm mt-24 w-1/2'>
                        <h1 className='text-5xl lg:text-6xl font-bold'>Smart <span className='text-orange-400'>Teacher</span></h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-outline btn-accent">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>

                </div>
            </div>
        </div>
    );
};

export default Carousel;