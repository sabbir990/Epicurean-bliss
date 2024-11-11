import { connectDB } from "@/libraries/ConnectDB";
import { NextResponse } from "next/server";

export const PATCH = async(req) => {
    const newProfile = await req.json();
    try{
        const db = await connectDB()
        const usersCollection = await db.collection('users');
        const query = {email : newProfile?.email};
        const updateDoc = {
            $set : {
                ...newProfile
            }
        }

        const result = await usersCollection.updateOne(query, updateDoc);
        return NextResponse.json({message : "Updating Profile successful", result}, {status : 200})
    }catch(error){
        console.log(error)
        return NextResponse.json({message : "Something's wrong", error}, {status : 404})
    }
}