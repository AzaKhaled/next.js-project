import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
 
export const { handlers:{GET,POST}, signIn, signOut, auth } = NextAuth({
  providers: [Google({
    clientId:process.env.AUTHCLIENT_GOOGLE,
    clientSecret:process.env.AUTHSECRET_GOOGLE
  })],
})