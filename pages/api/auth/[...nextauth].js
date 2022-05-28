import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.FACEBOOK_CLINT_ID,
            clientSecret: process.env.FACEBOOK_CLINT_SECRET,
        }),
        // ...add more providers here
    ],
})