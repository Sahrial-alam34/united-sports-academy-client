import { Helmet } from "react-helmet-async";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)


const Payment = () => {
    const sportsClass = useLoaderData();
    const { picture, Price, title, availableSeat, students, instructorName } = sportsClass

    //const price = parseFloat(Price.toFixed(2))
    return (
        <div>
            <Helmet>
                <title>United Sports | Payment</title>

            </Helmet>
            <div className="card w-96 bg-base-100 shadow-xl  ">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="Shoes" className="rounded-xl h-[150px] w-[290px] " />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p className="font-bold">Instructor Name: {instructorName}</p>
                    <div className="flex gap-8">
                        <p>Seats Available: {availableSeat}</p>
                        <p>Total Students:{students}</p>
                    </div>
                    <p className="font-bold">Price: {Price}</p>



                </div>
            </div>


            <h2 className="text-3xl mt-10">Payment Process </h2>
            <Elements stripe={stripePromise}>
                <CheckOutForm price={Price} sportsClass={sportsClass}></CheckOutForm>
            </Elements>

        </div>
    );
};

export default Payment;