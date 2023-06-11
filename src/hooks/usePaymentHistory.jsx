import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
const usePaymentHistory = () => {
    const { user } = useContext(AuthContext);
    //const token = localStorage.getItem('access-token');
    const {  data: payment = [] } = useQuery({
        queryKey: ['paymentHistory', user?.email],
        // enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`https://assignment12-united-sports-academy-server-sahrial-alam34.vercel.app/paymentHistory?email=${user?.email}`)
 
            return res.json();
        },

    })

    return [payment]

}

export default usePaymentHistory;