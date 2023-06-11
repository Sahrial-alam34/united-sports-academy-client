import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
const useEnrolledClasses = () => {
    const { user } = useContext(AuthContext);
    //const token = localStorage.getItem('access-token');
    const {  data: enrolledClasses = [] } = useQuery({
        queryKey: ['enrolledClasses', user?.email],
        // enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/enrolledClasses?email=${user?.email}`)
 
            return res.json();
        },

    })

    return [enrolledClasses]

}

export default useEnrolledClasses;