import { Button, FormControl, Grid, FormGroup, Input, InputLabel, Typography } from "@mui/material"

import { useState } from "react"
import { addProductData } from "./Event/api"
import { useNavigate } from "react-router-dom"
const intialvalue = {
    Product : '' ,
    price :'',
}

const Addproduct=()=>{
    const [product, setproduct] = useState()
    const navigate = useNavigate()

    const onValueChange =(e)=>{
        setproduct({ ...product, [e.target.name]: e.target.value })         
    }
    const Addproducts =async()=>{
        await addProductData(product)
        navigate('/home')
    }


    return<>
   
    <Grid container xs={12} sx={{ display: "flex", justifyContent: "center", alignItem: 'center',marginTop:10 }}>
                <Grid xs={6} item sx={{  display: "flex", flexDirection: "column",gap:5 }}>

                    <FormControl>
                        <InputLabel>Product Name</InputLabel>
                        <Input 
                         onChange={(e) => onValueChange(e)} 
                        name="Product" />
                    </FormControl>
                    <FormControl>
                        <InputLabel>Price</InputLabel>
                        <Input
                        onChange={(e) => onValueChange(e)}
                          name="price" />
                    </FormControl>
                    <Button
                      onClick={() => Addproducts()}
                      variant="contained">Add</Button>
                </Grid>
            </Grid>

    </>
}
export default Addproduct