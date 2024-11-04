import RegisterForm from "../components/Register";
import { Container,Box } from "@mui/material";
const Register=()=>{
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
            <RegisterForm/>
        </Box>
      </Container>
    )
}
export default Register;