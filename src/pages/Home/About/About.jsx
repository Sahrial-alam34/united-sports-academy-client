import SectionTitle from "../../../components/SectionTitle";
import football from '../../../assets/about/soccer.png'
import competition from '../../../assets/about/competition.png'
import academy from '../../../assets/about/academy.png'
import training from '../../../assets/about/tranning.png'

const About = () => {
    return (
        <section className="mt-20">
            <SectionTitle subHeading={"About"} heading={"Academy Environment"}></SectionTitle>
            <div className="grid sm:grid-cols-1 lg:grid-cols-4 gap-4">
                <div className=" p-5 ">
                    <img className=" w-[100px] h-[100px]" src={football} alt="" />
                    <h1 className=" h-[100px] text-2xl font-bold">World class academy coaches and player development team</h1>
                    <p className="text-gray">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, quisquam deserunt doloribus expedita repellendus animi nam pariatur! Reiciendis, nostrum laudantium.</p>
                </div>
                <div className=" p-5">
                    <img className=" w-[100px] h-[100px]" src={competition} alt="" />
                    <h1 className="h-[100px] text-2xl font-bold">World class / elite competition</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis accusantium quam architecto non odio eaque recusandae consectetur sapiente vel obcaecati!</p>
                </div>
                <div className=" p-5">
                    <img className=" w-[100px] h-[100px]" src={academy} alt="" />
                    <h1 className=" h-[100px] text-2xl font-bold">Immersion with a Liga Europe Academy team</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, ullam rerum eveniet fuga voluptatem sequi! Incidunt debitis suscipit qui quae.</p>
                </div>
                <div className=" p-5">
                    <img className=" w-[100px] h-[100px]" src={training} alt="" />
                    <h1 className="h-[100px] text-2xl font-bold">World class match, training and learning ecperiences</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat nam eligendi pariatur dolores nostrum et cumque eos itaque impedit voluptas.</p>
                </div>

            </div>
        </section>
    );
};

export default About;