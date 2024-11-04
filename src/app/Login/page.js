import LoginForm from "../components/Login";
import { Container,Box } from "@mui/material";
const Login=()=>{
    return(
        <Container
        maxWidth="sm" 
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh', 
            textAlign: 'center',
            
        }}
        >
        <Box>
            <LoginForm/>
        </Box>
      </Container>
    )
};
export default Login;