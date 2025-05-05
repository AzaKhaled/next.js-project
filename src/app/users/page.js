"use client"
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React  from 'react'
// export const metadata={
//   title:"Users",
//   description:"this is Users page"
// }
export default async function Users() {
//  const [users,setuser] = useState();
  let data =[] ;
// async function fetchData()
//  {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    data = await res.json();
    // setuser(data);
  } catch (err) {
    console.error(err);
    
  }


  return (
    <div style={{ padding: '20px' }}>
  {data.map((user) => (
    <div 
      key={user.id} 
      style={{
        backgroundColor: '#f1f1f1',
        padding: '15px',
        marginBottom: '15px',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
      }}
    >
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.username}</p>
      <Link href={`/users/${user.id}`}>
      <button className='btn btn-primary' >Details</button>
      
      </Link>
    </div>
  ))}
</div>

  )
}
//onClick={()=>{redirect(`/user/${p.usersid}`)}}



