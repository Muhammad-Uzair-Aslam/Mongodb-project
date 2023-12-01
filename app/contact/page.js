'use client'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { GET } from '../api/profiles/route'
import { set } from 'mongoose'

export default  function Contact() {
   const [data,setData]=useState([])
  const fetchproduct=async()=>{
    const user=await fetch("http://localhost:3000/api/profiles")
    const result=await user.json()
    
    setData(result.user)
  }
  

  useEffect(()=>{
    fetchproduct()
  }
    
  ,[])
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Database Data</h1>
        <table className="mt-10">
          <tr key="i">
            <th class="w-52">id</th>
            <th class="w-52">First Name</th>
            <th class="w-52">Last Name</th>
            <th class="w-52">Email</th>
            <th class="w-52">Phone Number</th>  
          </tr>
          {data?.map((item,i)=>{
            return<tr key="i">
                <td className="w-52 text-center">{item._id}</td>
                <td className="w-52 text-center">{item.firstName}</td>
                <td className="w-52 text-center">{item.lastName}</td>
                <td className="w-52 text-center">{item.email}</td>
                <td className="w-52 text-center">{item.phone}</td>
            </tr>
          })}
        </table>
    </div>
  )
}
