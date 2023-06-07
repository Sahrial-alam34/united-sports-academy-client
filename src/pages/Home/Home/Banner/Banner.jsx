


import banner1 from '../../../../assets/banner/banner1.jpg'
import banner2 from '../../../../assets/banner/banner3.jpg'
import banner3 from '../../../../assets/banner/banner4.jpg'
import banner4 from '../../../../assets/banner/banner2.jpg'

const Banner = () => {

    return (
        <div>

            <div className="carousel w-full h-full lg:h-[600px]">

                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner1} className="w-full rounded-xl" />
                    <div className="absolute rounded-xl h-full w-full flex items-center
         left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0.2)]">
                        <div className='text-white lg:space-y-7 lg:pl-12 w-1/2'>
                            <h2 className='text-2xl lg:text-6xl font-bold'>Welcome To Best Sports Academy</h2>
                            <p>There are many variations sports event occurred. So join us and try to keep fit</p>
                            <div>
                                
                                <button className='btn btn-outline btn-success'>Registration</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} className="w-full rounded-xl" />
                    <div className="absolute rounded-xl h-full w-full flex items-center
         left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0.2)]">
                        <div className='text-white lg:space-y-7 lg:pl-12 w-1/2'>
                            <h2 className='text-2xl lg:text-6xl font-bold'>Welcome To Best Sports Academy</h2>
                            <p>There are many variations sports event occurred. So join us and try to keep fit</p>
                            <div>
                                
                                <button className='btn btn-outline btn-success'>Latest Cars</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner3} className="w-full rounded-xl" />
                    <div className="absolute rounded-xl h-full w-full flex items-center
         left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0.2)]">
                        <div className='text-white lg:space-y-7 lg:pl-12 w-1/2'>
                            <h2 className='text-2xl lg:text-6xl font-bold'>Welcome To Best Sports Academy</h2>
                            <p>There are many variations sports event occurred. So join us and try to keep fit</p>
                            <div>
                                
                                <button className='btn btn-outline btn-success'>Latest Cars</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={banner4} className="w-full rounded-xl" />
                    <div className="absolute rounded-xl h-full w-full flex items-center
         left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0.2)]">
                        <div className='text-white lg:space-y-7 lg:pl-12 w-1/2'>
                            <h2 className='text-2xl lg:text-6xl font-bold'>Welcome To Best Sports Academy</h2>
                            <p>There are many variations sports event occurred. So join us and try to keep fit</p>
                            <div>
                                
                                <button className='btn btn-outline btn-success'>Latest Cars</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;