import { connectDB } from '@/libraries/ConnectDB';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

const handler = NextAuth({
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {}
            },

            async authorize(credentials) {
                const { email, password } = credentials;

                if (!email || !password) {
                    throw new Error("Fill all the fields properly!");
                }

                try {
                    const db = await connectDB();
                    const usersCollection = db.collection('users');
                    const isExists = await usersCollection.findOne({ email });
                    if (!isExists) {
                        throw new Error("User is not registered yet!")
                    }

                    const matchPassword = bcrypt.compareSync(password, isExists?.hashedPassword);
                    if (!matchPassword) {
                        throw new Error("Password didn't matched")
                    }

                    return isExists;
                } catch (error) {
                    console.log(error);
                }
            }
        })
    ],
    pages: {
        signIn: '/login'
    }
})

export { handler as GET, handler as POST };