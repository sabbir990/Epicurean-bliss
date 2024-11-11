import { connectDB } from "@/libraries/ConnectDB"
import { NextResponse } from "next/server";

export const GET = async() => {
    try{
        const db = await connectDB();
        const estatesCollection = await db.collection("estates")
        const result = await estatesCollection.find().toArray();
        return NextResponse.json({message : "All good!", result}, {status : 200})
    }catch(error){
        console.log(error)
        return NextResponse.json({message : "Something's wrong!"}, {status : 404})
    }
}