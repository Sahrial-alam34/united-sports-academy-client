import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"
import { useQuery } from "@tanstack/react-query";

const useAdmin = () =>{
    const {user} = useContext(AuthContext);
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['isAdmin', user?.email],
        // enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/admin?email=${user?.email}`,{

            })
      
            return res.json();
        },
  
    })

    return [cart, refetch]
}
export default useAdmin;