import mongoose from "mongoose";
const {Schema} =mongoose;
const productSchema=new Schema({
    title:{ type: String,required:true},
    description:{type:String,required:true},
    price:Number
})
export const productModel=mongoose.models?.products ||mongoose.model('products',productSchema)