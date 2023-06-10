import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import './CheckOutForm.css'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
const CheckoutForm = ({ price, sportsClass }) => {
    const { title, Price, classId, _id, availableSeat, students, instructorName } = sportsClass
    console.log('spoets', sportsClass)
    const { user } = useContext(AuthContext)
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        console.log('price', price)
        fetch('http://localhost:5000/create-payment-intent', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret))
    }, [price])

    const handleSubmit = async (event) => {
        // Block native form submission.

        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message)
        } else {
            setCardError("")
            // console.log('[PaymentMethod]', paymentMethod);
        }
        setProcessing(true)
        //confirm payment
        const { paymentIntent, error: confirmError } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous',
                    },
                },
            })
        if (confirmError) {
            console.log(confirmError)
        }
        console.log('payment intent', paymentIntent)
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)
            // save payment information to the server
            //const {title,Price, classId, _id, availableSeat,students,instructorName} = sportsClass
            const payment = {
                email: user?.email,
                userName: user?.displayName,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                cartClassId: _id,
                classId: classId,
                status: 'service pending',
                className: title,
                availableSeat: availableSeat,
                students: students,
                instructorName: instructorName

            }
            fetch('http://localhost:5000/payments', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                    
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Payment Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
            // axiosSecure.post('/payments', payment)
            //   .then(res => {
            //     console.log(res.data);
            //     if (res.data.insertedId) {
            //       //display
            //     }
            //   })
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className='w-[500px]'>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type='submit' className="rounded-full btn btn-outline bg-purple-500 text-white border-0 border-b-4  hover:text-[#BB8506]" disabled={!stripe || !clientSecret || processing}>Pay </button>


            </form>
            {
                cardError && <p className='text-red-600'>{cardError}</p>
            }
            {
                transactionId && <p className="text-green-500">Transaction complete with TransactionID: {transactionId}</p>
            }
        </>
    );
};

export default CheckoutForm