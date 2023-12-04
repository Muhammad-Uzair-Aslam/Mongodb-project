import { useState } from 'react';
import styles from '../../styles/products.module.css'
const ProductModal = ({ isOpen, onClose,isUpdate,product }) => {
  const [productDescription, setProductDescription] = useState('');
  const [formData,setFormData]=useState({
    title:productDescription.title||'',
    description:productDescription.description||'',
    price:productDescription.price||0
  })
  const [loading,setLoading]=useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    if(isUpdate){

    }
    else{
      PostProductApi()
    }
      onClose()// Close the modal after form submission
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
};
const PostProductApi =async()=>{
  try {
    setLoading(true)
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  ...formData
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

var response=await fetch("http://localhost:3000/api/products", requestOptions)
if(formData.title&&formData.description&&formData.price){
  alert("product created")
}
else{
  alert("All fields are required")
}
setFormData({title:"",description:"",price:0})  


  } catch (error) {
    console.log("error",error)
    
  }
  finally{
    setLoading(false)
  }
}
 

  return (
    <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                <h2 className='text-3xl font-bold '> {isUpdate ? "Update Product" : "Add Product"}</h2>
                <form className='form' onSubmit={handleSubmit}>
                    <label className='label' htmlFor="productName">Product Name:</label>
                    <input className='input border-slate-800 border-2'
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />

                    <br />

                    <label className='label' htmlFor="productName">Product Price:</label>
                    <input className='border-slate-800 border-2'
                        type="number"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                    />

                    <br />

                    <label className='label' htmlFor="productDescription">Product Description:</label>
                    <textarea className='textarea border-slate-800 border-2'
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />

                    {/* Add more form fields as needed */}
                    <br />
                    
                        {loading?<button type="submit" disabled>Loading...</button> :
                        <button type='submit'>submit</button>}</form>
            </div>
        </div>
  );
};

export default ProductModal;
