import { useEffect, useState } from "react"

const useInstructor = () =>{
    const [instructor, setInstructor] = useState([]);
    const [instructorUsers, setInstructorUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch('http://localhost:5000/instructor')
        .then(res => res.json())
        .then(data =>{
            setInstructor(data)
            setLoading(false);
        })
    },[])
    useEffect(()=>{
        fetch('http://localhost:5000/instructorUsers')
        .then(res => res.json())
        .then(data =>{
            setInstructorUsers(data)
            setLoading(false);
        })
    },[])
    return [instructor, loading,instructorUsers]

}

export default useInstructor