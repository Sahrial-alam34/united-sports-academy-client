import SectionTitle from "../../../components/SectionTitle";

import coach from '../../../assets/facility/coach.png'
const Facility = () => {
    return (
        <section className="mb-5">
            <SectionTitle subHeading={"What does"} heading={"Improve the Game by Focusing on Key Elements"}></SectionTitle>
            <div className="grid sm:grid-cols-1 lg:grid-cols-4 gap-4 mt-16">
                    <div className="bg-slate-100 text-center p-5 ">
                        <img className="mx-auto w-[100px] h-[100px]" src={coach} alt=""/>
                        <h1 className="text-2xl font-bold">Milk Tea</h1>
                        <p className="text-gray">Creamer could be replaced by fresh milk</p>
                    </div>
                    <div className="bg-slate-100 text-center p-5">
                        <img className="mx-auto" src="images/tea-2.png" alt=""/>
                        <h1 className="text-2xl font-bold">Black Tea</h1>
                        <p>Creamer could be replaced by fresh milk</p>
                    </div>
                    <div className="bg-slate-100 text-center p-5">
                      <img className="mx-auto" src="" alt="" />
                        <h1 className="text-2xl font-bold">Lemon Tea</h1>
                        <p>Creamer could be replaced by fresh milk</p>
                    </div>
                    <div className="bg-slate-100 text-center p-5">
                        <img className="mx-auto" src="images/tea-4.png" alt=""/>
                        <h1 className="text-2xl font-bold">Green Tea</h1>
                        <p>Creamer could be replaced by fresh milk</p>
                    </div>

                </div>
        </section>
    );
};

export default Facility;