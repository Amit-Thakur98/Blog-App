
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

const Login = () => {

    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
      return(
        <Component>
            <Box>
            <img src={imageURL} alt="Login" />
            <Wrapper>
            <TextField variant="standard" label="Username"/>
            <TextField variant="standard" label="Password"/>
            <LoginButton variant="contained">Login</LoginButton>
            <Typography style={{textAlign: 'center'}}>OR</Typography>
            <SignupButton variant="contained">Create an account</SignupButton>
            </Wrapper>
            </Box>
        </Component>
        
      )
};

export default Login;