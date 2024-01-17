import React, { useState, useEffect } from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Button,
  TextField,
  InputAdornment,
  Grid,
} from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";

const Building = () => {
  const [buildingData, setBuildingData] = useState([]);
  const [selectedBuilding, setSelectedBuilding] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/fakedataRegisterRoom.json'); // Adjust the path as needed
        const data = await response.json();
        console.log('Fetched data:', data);
        setBuildingData(data);
        // Set default selected building (if needed)
        if (data.length > 0) {
          setSelectedBuilding(data[0].building);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleBuildingChange = (event) => {
    setSelectedBuilding(event.target.value);
  };

  return (
    <div>
      <Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", padding: 2 }}>
          <FormControl sx={{ marginLeft: 2 }}>
            <Select
              value={selectedBuilding}
              onChange={handleBuildingChange}
              displayEmpty
            >
              {buildingData.map((building) => (
                <MenuItem key={building.building} value={building.building}>
                  Phòng {building.building}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Box>
          <TextField
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{paddingRight: 2, paddingTop: 0}}
              />
          </Box>

        </Box>
<Grid container>
  <Grid item xs={9}>
        <Box sx={{ display: "flex", justifyContent: "right", marginTop: 5}}>
          <TableContainer component={Paper} sx={{width: "80%"}}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell>Phòng</TableCell>
                  <TableCell>Số người</TableCell>
                  <TableCell>Giá</TableCell>
                  <TableCell>Đã đăng ký</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {buildingData
                  .find((building) => building.building === selectedBuilding)
                  ?.room.map((room) => (
                    <TableRow key={room.room}>
                      <TableCell>{room.room}</TableCell>
                      <TableCell>{room.capacity} người</TableCell>
                      <TableCell>{room.price}</TableCell>
                      <TableCell>{room.current}/{room.capacity}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
  </Grid>

  <Grid item xs={3}>
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: "center", paddingTop: 5 }}>
      <Button variant="contained" sx={{ width: 150, backgroundColor: "#1890FFB2" }}>
        Thêm phòng
      </Button>
      <Button variant="contained" sx={{ width: 150, backgroundColor: "#E5352AB2" }}>
        Xoá phòng
      </Button>
      <Button variant="contained" sx={{ width: 150, backgroundColor: "#8E30FFB2" }}>
        Xem chi tiết
      </Button>
    </Box>
  </Grid>

</Grid>





      </Box>
    </div>
  );
}

export default Building