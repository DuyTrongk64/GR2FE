import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Logo = ({ color }) => {
  return (
    <Box sx={{ width: 274, height: 87 }}>
      <Grid container>
        <Grid item xs={3}>
          <img src="/logobk.png" style={{ height: 87, color: color || "black" }} alt='Logo' />
        </Grid>
        <Grid item xs={9}>
          <Box>
            <Typography variant="body1" align="left" sx={{ fontSize: 16, fontWeight: "bold", color: color || "black", paddingTop: 1 }}>
              TRUNG TÂM KÝ TÚC XÁ
            </Typography>
            <Typography variant="body1" align="left" sx={{ fontSize: 16, fontWeight: "bold", color: color || "black" }}>
              ĐẠI HỌC
            </Typography>
            <Typography variant="body1" align="left" sx={{ fontSize: 16, fontWeight: "bold", color: color || "black" }}>
              BÁCH KHOA HÀ NỘI
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Logo;
