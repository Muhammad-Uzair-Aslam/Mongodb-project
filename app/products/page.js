import React from 'react'
import './products.css'
import Button from '@/components/button/Button';
import Modal from '../../components/modal/Modal';
const data = [
  { name: 'Alice', age: 25, email: 'alice@example.com' },
  { name: 'Bob', age: 30, email: 'bob@example.com' },
  // Add more sample data as needed
];
const updateHandler=()=>{

}
const deleteHandler=()=>{

}

export default function Products() {
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
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.email}</td>
            <td><Modal title="Update" isUpdate={true} product={item}/></td>
            <td><Button title="Delete" click={deleteHandler()}/></td>
            {/* Add more table data cells as needed */}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}
