import dbConnect from "@/config/db"
import { userModel } from "@/model/user"

dbConnect()
const fetchProducts=async()=>{
  try {
    let resp=await userModel.find()
    console.log("response",resp)
    return resp
  } catch (error) {
    console.log("error",error)
  }
    
}
export default async function Home() {
  const api=await fetchProducts()
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
          {api?.map((item,i)=>{
            return<tr key="i">
                <td className="w-52 text-center">{item.id}</td>
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
