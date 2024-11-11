import { connectDB } from "@/libraries/ConnectDB";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';

export const POST = async (req, { params }) => {
    try {
        const db = await connectDB();
        const usersCollection = db.collection("users");
        const user = await req.json();
        const password = {password : user?.password}
        const hashedPassword = bcrypt.hashSync(password?.password, 14);
        const hashedUser = {
            username : user?.username, email : user?.email, photoURL : user?.photoURL, hashedPassword
        }

        const isExists = await usersCollection.findOne({email : user?.email});
        if(isExists){
            return NextResponse.json({message : "Already exists", result})
        }
        const result = await usersCollection.insertOne(hashedUser);
        return NextResponse.json({ message: "success", result });
    } catch (error) {
        return NextResponse.json({ message: "Failed", error });
    }
};
