import { Helmet } from "react-helmet-async";
import usePaymentHistory from "../../../hooks/usePaymentHistory";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const PaymentHistory = () => {
    const {user} = useContext(AuthContext);
    const [payment] = usePaymentHistory();
    console.log('payemnt 6 ', payment)
    return (
        <div>
            <Helmet>
                <title>United Sports | Payment History</title>

            </Helmet>
            <div className="font-bold flex justify-evenly gap-10 items-center h-[60px]">
                <h3 className="text-3xl">{user?.displayName} Payment History</h3>
                {/* <h3 className="text-3xl">Total Price: ${total}</h3> */}

            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full bg-gray-300">
                    {/* head */}
                    <thead>
                        <tr className="bg-purple-500 text-white">
                            <th> # </th>
                            <th>Class Name</th>
                            <th>Class Id</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            payment.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>

                             
                                    <div>
                                        {item.className}
                                    </div>


                                </td>
                                <td>

                             
                                    <div>
                                        {item.classId}
                                    </div>


                                </td>
                         
                                <td className="text-end">${item.price}</td>
                           
                           
                                <td className="text-center">
                                    {item.transactionId}
                                </td>

                            </tr>)
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;