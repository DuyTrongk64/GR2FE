import React from 'react';
import { useNavigate } from "react-router-dom";
import { Box, Button, Grid } from '@mui/material';
import Logo from '../logoLetter/logoLetter';

export const Header = () => {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate(`/`);
  };

  const handleLoginClick = () => {
    navigate(`/Login`);
  };
  return (
    <Box sx={{ backgroundColor: 'white', height: 103, display: 'flex', alignItems: 'center', padding: '0 20px' }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
            <Logo/>
        </Grid>

        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Box sx={{ display: 'flex', gap: 5 }}>
            <Button variant="contained" sx={{ color: 'white', fontSize: '16px', borderRadius: 0, backgroundColor: "#7BC9F5"  }}
             onClick={handleHomeClick}>Trang chủ</Button>
            <Button variant="text" sx={{ color: 'black', fontSize: '16px' }} >Đăng ký</Button>
            <Button variant="text" sx={{ color: 'black', fontSize: '16px' }} onClick={handleLoginClick}>Đăng nhập</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

