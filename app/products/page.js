import React from 'react'
import './products.css'
import { productModel } from '@/model/products';
import Button from '@/components/button/Button';
import Modal from '../../components/modal/Modal';

const fetchProducts=async()=>{
  try {
    const data=await productModel.find()
    console.log(data)
    return data
  } catch (error) {
    console.log("error",error)
  }
}
const deleteHandler=async()=>{
  try {
    var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "id": props.id
  });
  
  var requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  const resp=await fetch("http://localhost:3000/api/products", requestOptions)
  console.log(resp)
  return resp
  } catch (error) {
    console.log("error",error)
  }
  
    
}

export default async function Products() {
  const data=await fetchProducts()
  return (
    <div>
      <h1 className='text-center font-bold text-4xl'>Products</h1>
      {/* <button className='m-5 px-6 py-3 bg-slate-700 text-white border-2'>Add Products</button> */}
      <Modal title="Create"/>
      <table className='table m-5'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Product Name</th>
          <th>Product Description</th>
          <th>Product price</th>
          <th>Update</th>
          <th>Delete</th>
          {/* Add more table headers as needed */}
        </tr>
      </thead>
      <tbody>
        {data?.map((item, index) => (
          <tr key={index}>
            <td>{item._id}</td>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>{item.price}</td>
            <td><Modal title="Update" isUpdate={true} products={item}/></td>
            <td><Button id={item._id} title="Delete" /></td>
            {/* Add more table data cells as needed */}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}
