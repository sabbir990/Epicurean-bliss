import { connectDB } from "@/libraries/ConnectDB";
import { NextResponse } from "next/server";

export const GET = async(req, {params}) => {
    const {email} = await params;
    try{
        const db = await connectDB();
        const usersCollection = await db.collection("users");
        const query = {email : email}
        const result = await usersCollection.findOne(query);
        return NextResponse.json({message : "user found!", result}, {status : 200})
    }catch(error){
        return NextResponse.json({message : "Something's wrong!", error}, {status : 404})
    }
}