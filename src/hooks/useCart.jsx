import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
const useCart = () => {
    const { user,loading } = useContext(AuthContext);
   
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
         enabled: !loading && !!user?.email,
        queryFn: async () => {
            const token = localStorage.getItem('sports-access-token');
           // const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return res.json();
        },
        // queryFn: async () => {
        //     const res = await axiosSecure(`/carts?email=${user?.email}`)
        //     console.log('res from axios', res)
        //     return res.data;
        // },
    })

    return [cart, refetch]

}

export default useCart;