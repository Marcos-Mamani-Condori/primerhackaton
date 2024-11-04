import { Box, Typography, Avatar, IconButton } from '@mui/material';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';

const Post=()=> {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #e0e0e0',
        borderRadius: 2,
        padding: 2,
      }}
    >
      <Avatar sx={{ mr: 2 }} />
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle1">Nombre de usuario</Typography>
        <Typography variant="body2" color="text.secondary">
          Este es el contenido del post.
        </Typography>
      </Box>
      <IconButton>
        <ThumbUpAltOutlinedIcon />
      </IconButton>
      <Typography variant="body2">0</Typography>
    </Box>
  );
}

export default Post;
