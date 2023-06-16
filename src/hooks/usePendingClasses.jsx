
import { useQuery } from "@tanstack/react-query";
//import { useEffect, useState } from "react"

const usePendingClasses = () => {
    // const [pendingClasses, setPendingClasses] = useState([]);
    // const [loading, setLoading] = useState(true);
    // useEffect(()=>{
    //     fetch('http://localhost:5000/addClass')
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
          
            const res = await fetch('http://localhost:5000/addClass')
            return res.json();
        },
   
    })

    return [pendingClasses, refetch]
};

export default usePendingClasses;