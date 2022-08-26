import { Button, FormControl, Grid, FormGroup, Input, InputLabel, Typography } from "@mui/material"
import { styled } from "@mui/system"
import "./login.css"
import { useState } from "react"

import { login } from "../src/Event/api";
import { useNavigate } from "react-router-dom"

const intialvalue = {
    email: '',
    password: '',
}



const Container = styled(FormGroup)`
width:60%;
margin:1% auto 0 auto;
& >div{
    margin:20px
}`

const Login = () => {

    const [user, setuser] = useState(intialvalue)
    const navigate = useNavigate()
    const onValueChange = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value })
    }

    const Userlogin = async () => {
        let res = await login(user)
        localStorage.setItem("token", res.data.token)
        navigate('/home')       
    }
    return (

        <Grid>
            <Grid  sx={{  display: "flex",flexDirection: "column",justifyContent: "center", alignItems: 'center' }}>
                <Typography variant="h4"  sx={{marginTop:5}}>Login</Typography>
                <Typography variant="h6">Please enter your Email and Password details</Typography>
            </Grid>
            <Grid container xs={12} sx={{ display: "flex", justifyContent: "center", alignItem: 'center',marginTop:10 }}>
                <Grid xs={6} item sx={{  display: "flex", flexDirection: "column",gap:5 }}>

                    <FormControl>
                        <InputLabel>Email</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="email" />
                    </FormControl>
                    <FormControl>
                        <InputLabel>Password</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="password" />
                    </FormControl>
                    <Button onClick={() => Userlogin()} variant="contained">Login</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default Login