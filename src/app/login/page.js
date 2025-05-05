import React from 'react'
import { signIn } from '../auth'
export const metadata={
  title:"Login",
  description:"this is Login page"
}
function Login() {
  async function loginn() {
    "use server"
    await signIn("google",{redirectTo:"/showusers"})
    
  }
  return (
    <>
    <form action={loginn}>
      <button> SignUp </button>
    </form>
    </>
    
  )
}

export default Login