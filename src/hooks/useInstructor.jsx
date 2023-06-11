import { useEffect, useState } from "react"

const useInstructor = () =>{
    const [instructor, setInstructor] = useState([]);
    const [instructorUsers, setInstructorUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch('https://assignment12-united-sports-academy-server-sahrial-alam34.vercel.app/instructor')
        .then(res => res.json())
        .then(data =>{
            setInstructor(data)
            setLoading(false);
        })
    },[])
    useEffect(()=>{
        fetch('https://assignment12-united-sports-academy-server-sahrial-alam34.vercel.app/instructorUsers')
        .then(res => res.json())
        .then(data =>{
            setInstructorUsers(data)
            setLoading(false);
        })
    },[])
    return [instructor, loading,instructorUsers]

}

export default useInstructor