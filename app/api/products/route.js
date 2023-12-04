const { default: dbConnect } = require("@/config/db")
const { productModel } = require("@/model/products")
const { NextResponse } = require("next/server")
dbConnect()
export const POST=async(req)=>{
    try {
        const body=await req.json()
        console.log("body",body)
        if(body.title&&body.description&&body.price){
            const product=new productModel(body)
            await product.save()
            return NextResponse.json({message:"Successfully added"})

        }
        else{
            return NextResponse.json({message:"All Params are Required"})
        }
        // productModel.create({})
    
    } catch (error) {
        return NextResponse.json({message:"error"})
    }
    }