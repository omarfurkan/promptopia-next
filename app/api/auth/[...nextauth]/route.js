import NextAuth from "next-auth/next";
import GoogleProverdier from 'next-auth/providers/google';
import { connnecToDB } from "@utils/database";


const handler = NextAuth({

    providers: [
        GoogleProverdier({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({ session }) {

    },
    async signIn({ profile }) {
        try {
            await connnecToDB();

            //check if a user already exists

            //if not, create a new user
            return true;
        } catch (error) {
            return false;
        }
    }
})

export { handler as GET, handler as POST };