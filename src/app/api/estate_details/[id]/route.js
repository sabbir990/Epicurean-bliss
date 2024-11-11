import { connectDB } from "@/libraries/ConnectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async(req, {params}) => {
    const {id} = await params;

    try{
        const db = await connectDB();
        const estatesCollection = await db.collection('estates');
        const query = {_id : new ObjectId(id)};
        const result = await estatesCollection.findOne(query);
        return NextResponse.json({message : "Got it!", result}, {status : 200})
    }catch(error){
        console.log(error)
        return NextResponse.json({message : "Something's wrong!", error}, {status : 404})
    }
}