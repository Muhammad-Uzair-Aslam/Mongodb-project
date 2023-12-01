import dbConnect from "@/config/db"
import { userModel } from "@/model/user"
import { NextResponse } from "next/server"

dbConnect
export const GET=async()=>{
    try {
        const data=await userModel.find()
        return NextResponse.json({message:"successfully added",user:data})
    } catch (error) {
        return NextResponse.json("error",error)
    }
     
}