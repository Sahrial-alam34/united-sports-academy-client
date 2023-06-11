import { useEffect, useState } from "react"

const useClasses = () =>{
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch('https://assignment12-united-sports-academy-server-sahrial-alam34.vercel.app/classes')
        .then(res => res.json())
        .then(data =>{
            setClasses(data)
            setLoading(false);
        })
    },[])
    return [classes, loading]

}

export default useClasses