import { useState } from "react";
import {Box, TextField, Button, styled, Typography} from "@mui/material";

const Component = styled(Box)`
      width: 400px;
      margin: auto;
      box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);

`;

const Image = styled('img')({
    width: 100,
    margin: 'auto',
    display: 'flex',
    padding: '50px 0 0',
})

const Wrapper = styled(Box)`
      padding: 25px 35px;
      display: flex;
      flex: 1;
      flex-direction: column;
      & > div, & > button, & >p {
      margin-top: 20px;
      }
`

const LoginButton = styled(Button)`
      text-transform: none;
      background: #FB641B;
      color: #fff;
      height: 48px;
      border-radius: 2px;
`

const SignupButton = styled(Button)`
      text-transform:none;
      background: #fff;
      color: #2874F0;
      height: 48px;
      border-radius: 2px;
      box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`

const Text = styled(Typography)`
      color: #878787;
      font-size: 14px;
`
const signupInitialValues = {
      name : "name",
      username : "username",
      password : "password"
}
const Login = () => {

    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
    const [account, toggleAccount] = useState("login");
    const toggleSignUp = ()=>{
      account === "signup" ? toggleAccount("login") : toggleAccount("signup");
    }
    const [signup, setsignup] = useState(signupInitialValues);

    const onInputChange = (e) => {
      setsignup({...signup, [e.target.name]: e.target.value});
    }
      return(
        <Component>
            <Box>
            <Image src={imageURL} alt="Login" />
            {
                  account === "login" ?
                  <Wrapper>
                        <TextField variant="standard" onChange={()=>onInputChange()} label="Enter Username"/>
                        <TextField variant="standard" onChange={()=>onInputChange()} label="Enter Password"/>
                        <LoginButton variant="contained">Login</LoginButton>
                        <Typography style={{textAlign: 'center'}}>OR</Typography>
                        <SignupButton onClick={()=>toggleSignUp()}>Create an account</SignupButton>
                  </Wrapper> 
                  :
                  
                  <Wrapper>
                        <TextField variant="standard" onChange={(e)=>onInputChange(e)} name = "name" label="Enter Name"/>      
                        <TextField variant="standard" onChange={(e)=>onInputChange(e)} name = "username" label="Enter Username"/>
                        <TextField variant="standard" onChange={(e)=>onInputChange(e)} name = "password" label="Enter Password"/>
                        <SignupButton >Signup</SignupButton>
                        <Typography style={{textAlign: 'center'}}>OR</Typography>
                        <LoginButton variant="contained" onClick={()=>toggleSignUp()}>Already have an account</LoginButton>
                  </Wrapper>
            
}
            </Box>

        </Component>
        
      )
};

export default Login;