'use client';

import {useState} from 'react';
import { Box, Button, Stack , Dialog, DialogTitle, DialogContent, DialogActions,TextField} from '@mui/material';
import Post from './Post';

function PostList() {
    const [open, setOpen] = useState(false);

 
  const handleOpen = () => {
    setOpen(true);
  };

  
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box
      sx={{
        maxHeight: 400,  
        overflowY: 'auto', 
        border: '1px solid #e0e0e0', 
        padding: 2,
      }}
    >
     
      <Button variant="contained" color="primary" sx={{ mb: 2 }} onClick={handleOpen}>
        Nuevo
      </Button>

      
      <Stack spacing={2}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </Stack>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="md" 
      >
        <DialogTitle>Nuevo Post</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Título del Post"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="dense"
            label="Contenido del Post"
            type="text"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleClose} color="primary" variant="contained">
            Crear
          </Button>
        </DialogActions>
      </Dialog>
    </Box>

  );
}

export default PostList;
