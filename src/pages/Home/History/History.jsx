import SectionTitle from "../../../components/SectionTitle";

import football from '../../../assets/History/footballgame.jpg'
import building from '../../../assets/History/sportsCenter.jpg'
import awards from '../../../assets/History/award.jpg'
const History = () => {
    return (
        <div className="mt-20 mb-20">
            <SectionTitle subHeading={"History"} heading={"To Know Our History"}></SectionTitle>
            <div>
                <div className="relative flex w-full flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                        <img
                            src={awards}
                            alt="image"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                            2023
                        </h6>
                        <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Has 50 Awards from various parts of the world
                        </h4>
                        <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ratione eius aperiam alias sunt deserunt laudantium! Quo commodi, odit totam accusamus consequatur eos dicta aliquam unde expedita at architecto sunt quasi doloremque minima sequi non laborum, harum dolore iste fugit. Hic aut est aliquam et excepturi iure, aspernatur nesciunt harum!
                        </p>
                   
                    </div>
                </div>
                <div className="relative flex w-full flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                        <img
                            src={building}
                            alt="image"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                            2021
                        </h6>
                        <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Building a Sports Center 
                        </h4>
                        <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ratione eius aperiam alias sunt deserunt laudantium! Quo commodi, odit totam accusamus consequatur eos dicta aliquam unde expedita at architecto sunt quasi doloremque minima sequi non laborum, harum dolore iste fugit. Hic aut est aliquam et excepturi iure, aspernatur nesciunt harum!
                        </p>
                   
                    </div>
                </div>
                <div className="relative flex w-full flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                            alt="image"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                            2020
                        </h6>
                        <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Recognised By FIFA: Integrity ,Respect & Community 
                        </h4>
                        <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ratione eius aperiam alias sunt deserunt laudantium! Quo commodi, odit totam accusamus consequatur eos dicta aliquam unde expedita at architecto sunt quasi doloremque minima sequi non laborum, harum dolore iste fugit. Hic aut est aliquam et excepturi iure, aspernatur nesciunt harum!
                        </p>
                   
                    </div>
                </div>
           
            </div>
        </div>
    );
};

export default History;