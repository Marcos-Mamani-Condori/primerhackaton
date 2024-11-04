import { Box, Container } from '@mui/material';
import Sidebar from './Sidebar';
import PostList from './PostList';
const HomeComponents=()=>{
    return(
        <Container maxWidth="lg" sx={{ display: 'flex', mt: 4 }}>
            <Sidebar />
            <Box sx={{ flexGrow: 1, ml: 4 }}>
                <PostList />
            </Box>
        </Container>
    )
}
export default HomeComponents;