import { notFound, redirect } from 'next/navigation';
import React from 'react';
// export const metadata={
//   title:"User_id",
//   description:"this is User_id page"
// }

export async function generateMetadata({params})
{
  const p = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${p.usersid}`);
    const data = await res.json();
   return{
    title:data.name
   }
}
async function UsersId({ params }) {
  const p = await params;

  try
  {
 
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${p.usersid}`);
   const data = await res.json();
   async function goback()
{
  "use server"
redirect("/")
}
  }catch(err)
  {
    console.log(err);
    
     notFound()
    // redirect('/not-found');
  }
// console.log(data);

  return (
    <>
    <div style={{ padding: '20px' }}>
      <h3>{data.name}</h3>
      <p>{data.email}</p>
      <p>{data.username}</p>
      <form action={goback}>
        <button className='btn btn-danger'> Go Back</button>
      </form>
    </div>
    </>
  );
}

export default UsersId;
