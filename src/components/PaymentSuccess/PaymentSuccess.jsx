import React, { useEffect } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { useNavigate, useSearchParams } from 'react-router';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const PaymentSuccess = ({ amount = 50, eventName = "AI Workshop" }) => {
    const navigate = useNavigate();
    const axiossecure = useAxiosSecure()
    const [sherchsession] = useSearchParams()
    const sessionId = sherchsession.get('session_id')
    console.log(sessionId)


    useEffect(() => {

        if (sessionId) {
            axiossecure.post('/payment-success', { sessionId })
                .then((res) => {
                    console.log(res.data)
                })
        }

    }, [sessionId, axiossecure])
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full text-center">
                {/* Success Icon */}
                <div className="flex justify-center mb-4">
                    <CheckCircleIcon className="w-16 h-16 text-green-500" />
                </div>

                {/* Success Message */}
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful!</h2>
                <p className="text-gray-600 mb-4">
                    Thank you for your payment. Your registration for{" "}
                    <span className="font-semibold">{eventName}</span> is confirmed.
                </p>

                {/* Amount */}
                <p className="text-gray-700 mb-6">
                    Amount Paid: <span className="font-bold">${amount}</span>
                </p>

                {/* Action Buttons */}
                <button
                    onClick={() => navigate('/clubs')}
                    className="btn btn-primary w-full mb-3"
                >
                    Go to Clubs
                </button>
                <button
                    onClick={() => navigate('/')}
                    className="btn btn-outline w-full"
                >
                    Back to Home
                </button>
            </div>
        </div>
    );
};

export default PaymentSuccess;
