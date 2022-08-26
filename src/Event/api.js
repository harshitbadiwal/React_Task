import axios from "axios";


const Login_Url = "https://reqres.in/api/login"
const Product_Url = "http://localhost:3002/products"

export const login = async (data)=>{
    try{
     return await axios.post(Login_Url,data)
    }
    catch (error){
        console.log ('error while calling login api', error.message)
    }
}

export const addProductData = async (data)=>{
    try{
     return await axios.post(Product_Url ,data)
    }
    catch (error){
        console.log ('error while calling login api', error.message)
    }
}

export const getProductData =async(data)=>{
    let search = data || ""
    try{
            return await axios.get(`${Product_Url}?q=${search}`)
    }
    catch(error){
            console.log("error while calling getUser api",error.message)
    }
}

export const deleteProductData =async(id)=>{
    try{
        return await axios.delete(`${Product_Url}/${id}`)
    }
    catch(error){
        console.log("error while calling getUser api",error.message)
    }
}