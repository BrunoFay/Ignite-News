import NextAuth from 'next-auth'
import { query as q } from 'faunadb'
import GithubProvider from 'next-auth/providers/github'
import { fauna } from '../../../libs/faunadb'
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
      authorization: { params: { scope: 'read:user' } },
    }),
    // ...add more providers here
  ],
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }: any) {
      return token
    },
    async signIn({ user, account, profile, e, credentials }: any) {
      const { email } = user
      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(q.Match(q.Index('user_by_email'), q.Casefold(email))),
            ),
            q.Create(q.Collection('Users'), { data: { email } }),
            q.Get(q.Match(q.Index('user_by_email'), q.Casefold(email))),
          ),
        )
        return true
      } catch (error) {
        return false
      }
    },
  },
}
export default NextAuth(authOptions)
