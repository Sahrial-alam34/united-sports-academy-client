export const getRole = async email =>{
    const response = await fetch(`https://assignment12-united-sports-academy-server-sahrial-alam34.vercel.app/users/${email}`)
    const user = await response.json();
    return user?.role
}