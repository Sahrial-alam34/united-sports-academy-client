import SectionTitle from "../../../components/SectionTitle";

import coach from '../../../assets/facility/coach.png'
import culture from '../../../assets/facility/culture.png'
import health from '../../../assets/facility/mental-health.png'
import recovery from '../../../assets/facility/recovery.png'
const Facility = () => {
    return (
        <section className="mb-5 mt-20">
            <SectionTitle subHeading={"What does"} heading={"Improve the Game by Focusing on Key Elements"}></SectionTitle>
            <div className="grid sm:grid-cols-1 lg:grid-cols-4 gap-4">
                    <div className="bg-slate-100 text-center p-5 ">
                        <img className="mx-auto w-[100px] h-[100px]" src={coach} alt=""/>
                        <h1 className="text-2xl font-bold">Experience Coaching</h1>
                        <p className="text-gray">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, quisquam deserunt doloribus expedita repellendus animi nam pariatur! Reiciendis, nostrum laudantium.</p>
                    </div>
                    <div className="bg-slate-100 text-center p-5">
                        <img className="mx-auto w-[100px] h-[100px]" src={health} alt=""/>
                        <h1 className="text-2xl font-bold">Mental Stability</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis accusantium quam architecto non odio eaque recusandae consectetur sapiente vel obcaecati!</p>
                    </div>
                    <div className="bg-slate-100 text-center p-5">
                      <img className="mx-auto w-[100px] h-[100px]" src={recovery} alt="" />
                        <h1 className="text-2xl font-bold">Controlled Recovery</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, ullam rerum eveniet fuga voluptatem sequi! Incidunt debitis suscipit qui quae.</p>
                    </div>
                    <div className="bg-slate-100 text-center p-5">
                        <img className="mx-auto w-[100px] h-[100px]" src={culture} alt=""/>
                        <h1 className="text-2xl font-bold">Cultural Activities</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat nam eligendi pariatur dolores nostrum et cumque eos itaque impedit voluptas.</p>
                    </div>

            </div>
        </section>
    );
};

export default Facility;