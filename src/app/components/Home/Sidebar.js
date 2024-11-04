import { Box, Typography, Avatar, Button } from '@mui/material';
const Sidebar=()=>{
    return(
        <Box
        sx={{
            width: 200,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRight: '1px solid #e0e0e0',
            padding: 2,
        }}
        >
            <Avatar sx={{ width: 56, height: 56 }} />
            <Typography variant="h6" sx={{ mt: 2 }}>
                Nombre
            </Typography>
            <Button variant="outlined" color="primary" sx={{ mt: 4 }}>
                Cerrar Sesión
            </Button>
        </Box>
    )
}
export default Sidebar;