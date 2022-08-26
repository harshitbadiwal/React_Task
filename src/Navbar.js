import {Button,Grid} from "@mui/material"
import { useNavigate } from "react-router-dom"
const Navbar=()=>{
    const navigate =useNavigate()
    const logout=()=>{
        localStorage.removeItem("token");
        navigate("/")
    }
    const Addproduct=()=>{
        navigate("/add")
    }
    return<>
<Grid sx={{display:"flex",justifyContent:"flex-end",gap:5, padding:3, width:"100%"}}>
    <Button variant="contained"onClick={()=>Addproduct()}>Add Product</Button>
    <Button variant="contained"onClick={()=>logout()} >Logout</Button>
</Grid>
    </>
}
export default Navbar