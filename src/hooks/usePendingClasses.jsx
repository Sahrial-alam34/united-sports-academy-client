
import { useQuery } from "@tanstack/react-query";
//import { useEffect, useState } from "react"

const usePendingClasses = () => {
    // const [pendingClasses, setPendingClasses] = useState([]);
    // const [loading, setLoading] = useState(true);
    // useEffect(()=>{
    //     fetch('https://assignment12-united-sports-academy-server-sahrial-alam34.vercel.app/addClass')
    //     .then(res => res.json())
    //     .then(data =>{
    //         setPendingClasses(data)
    //         setLoading(false);
    //     })
    // },[])
    // return [pendingClasses, loading]


    const { refetch, data: pendingClasses = [] } = useQuery({
        queryKey: ['addClass'],
        // enabled: !loading,
        queryFn: async () => {
          
            const res = await fetch('https://assignment12-united-sports-academy-server-sahrial-alam34.vercel.app/addClass')
            return res.json();
        },
   
    })

    return [pendingClasses, refetch]
};

export default usePendingClasses;