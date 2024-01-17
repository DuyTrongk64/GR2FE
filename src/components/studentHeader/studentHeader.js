import { Box, Grid } from '@mui/material'
import React from 'react'
import Logo from '../logoLetter/logoLetter'

const SHeader = () => {
  return (
    <Box sx={{ backgroundColor: 'white', height: 103, display: 'flex', alignItems: 'center', padding: '0 20px', borderBottom: 1 }}>
    <Grid container spacing={2}>
      <Grid item xs={8}>
          <Logo/>
      </Grid>

      <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Box sx={{ display: 'flex', gap: 4, marginRight: 5, alignItems: 'center', justifyContent: 'center' }}>
            <Box>NotiIcon</Box>
            <img src='avatar.png' style={{height: 60}}/>
            <Box sx={{fontSize: 14, fontWeight: "bold"}}> Duy Trọng</Box>
        </Box>
      </Grid>
    </Grid>
  </Box>
  )
}

export default SHeader