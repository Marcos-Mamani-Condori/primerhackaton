import {Box,Typography,TextField,Button,Link} from '@mui/material';
const RegisterForm=()=>{
    return(
        <Box
        component="form"
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2, 
            width: '100%',
            maxWidth: 400, 
            mx: 'auto', 
            mt: 4, 
            p: 3, 
            boxShadow: 3, 
            borderRadius: 2, 
        }}
        noValidate
        autoComplete="off"
        >
            <Typography variant="h5" gutterBottom>
                Registrate
            </Typography>
            <TextField
                fullWidth
                label="Nombre"
                variant="outlined"
                required
            />
            <TextField
                fullWidth
                label="Contraseña"
                type="password"
                variant="outlined"
                required
            />
            <TextField
                fullWidth
                label="Confirmar contraseña"
                type="password"
                variant="outlined"
                required
            />
            <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
            >
                Registrate
            </Button>
            <Link href="/Login" underline="hover">
                ¿Ya tienes una cuenta? Inicia sesion
            </Link>
        </Box>
    )
}
export default RegisterForm;