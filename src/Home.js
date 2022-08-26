import Navbar from "./Navbar"
import { Table, TableBody, TableCell, TableHead, TableRow, styled, Button, Grid,TextField , variant } from "@mui/material";
import { useState } from 'react'
import { useEffect } from "react";
import { getProductData } from "./Event/api";
import { deleteProductData } from "./Event/api";
import { useNavigate } from "react-router-dom";

const StyledTable = styled(Table)
    `width:90%;
margin:25px auto 0 auto
`
const Thead = styled(TableRow)`
background:#000;
& > th{
    color:#fff;
    font-size:20px;
}`

const Tbody = styled(TableRow)`
&>td{
    font-size:20px
}`

const Home = () => {
    const navigate = useNavigate()
    const [search , setSearch] = useState('')
    let token = localStorage.getItem("token");
    const [productList, setproductList] = useState([])

   

    useEffect(() => {
        getProductDetails()
    }, [])
    useEffect(() => {
        if (!token) {
            navigate("/")
        }
    }, [token])

    const getProductDetails = async (data) => {
        let response = await getProductData(data)
        setproductList(response.data)
    }
    const deleteProductDetails = async (id) => {
        await deleteProductData(id)
        getProductDetails()
    }
    const searchData = () =>{
        getProductDetails(search)
    }
    return <>

        <Navbar />
        <Grid sx={{display:"flex" , alignItem:"center", justifyContent:"center"}}>
        <TextField id="outlined-basic" label="Search" variant="outlined" value={search} onChange={(e) => setSearch(e.target.value)} />
        <Button sx={{margin:1}} variant="contained" onClick={() => searchData()}>Search</Button>
        
        </Grid>
       
        <StyledTable>
        
            <TableHead>
                <Thead>
                    <TableCell>Id</TableCell>
                    <TableCell>Product Name</TableCell>
                    <TableCell>Price</TableCell>

                    <TableCell></TableCell>
                </Thead>
            </TableHead>
            <TableBody>
                { productList.length !== 0 ?  
                    productList.map(productData => (
                        <Tbody>
                            <TableCell>{productData.id}</TableCell>
                            <TableCell>{productData.Product}</TableCell>
                            <TableCell>{productData.price}</TableCell>
                            <TableCell>

                                <Button variant="contained" color="error"
                                    onClick={() => deleteProductDetails(productData.id)
                                    }
                                >Delete</Button>

                            </TableCell>
                        </Tbody>
                    )) :   <Tbody>
                            <TableCell>No Product</TableCell>
                        </Tbody>
                }
            </TableBody>
        </StyledTable>
    </>
}
export default Home