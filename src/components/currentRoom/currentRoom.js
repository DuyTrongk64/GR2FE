import React, { useEffect, useState } from "react";
import { baseUrl } from '../../constant/baseUrl';
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
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const CurrentRoom = () => {
  const [currentRoomData, setCurrentRoomData] = useState({ Room: {} });

  useEffect(() => {
    const fetchData = async () => {
      try {
        let ip = localStorage.getItem('user_id');
        console.log(ip);
        const response = await fetch(`${baseUrl}rooms/${ip}`);
        const data = await response.json();
        console.log('Fetched data:', data.Room);
        setCurrentRoomData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Function to format date to display only the day part
  const formatDayFromDate = (isoDate) => {
    const dateObject = new Date(isoDate);
    return dateObject.toLocaleDateString('en-US'); // Adjust the locale as needed
  };

  return (
    <div>
      {currentRoomData.Room && (
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: 5,
              paddingBottom: 5,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flex: "row",
                border: 1,
                borderColor: "grey.500",
                borderRadius: 3,
                padding: 1,
              }}
            >
              <Typography sx={{ fontWeight: 700 }}>Phòng</Typography>
              <Typography sx={{ fontWeight: 700, paddingLeft: 1 }}>
                {currentRoomData.Room.room_name} - {currentRoomData.Room.Apartment?.apartment_name}
              </Typography>
            </Box>
            <Box>
              <TextField
                variant="standard"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{paddingRight: 2}}
              />
            </Box>
          </Box>
          
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>Họ và tên</TableCell>
                  <TableCell>Ngày sinh</TableCell>
                  <TableCell>Giới tính</TableCell>
                  <TableCell>Lớp</TableCell>
                  <TableCell>Mã số sinh viên</TableCell>
                  <TableCell>Ghi chú</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentRoomData.Room.User &&
                  currentRoomData.Room.User.map((user) => (
                    <TableRow key={user.user_id}>
                      <TableCell>{user.user_id}</TableCell>
                      <TableCell>{user.full_name}</TableCell>
                      <TableCell>{formatDayFromDate(user.birthday)}</TableCell>
                      <TableCell>{user.gender}</TableCell>
                      <TableCell>{user.batch}</TableCell>
                      <TableCell>{user.mssv}</TableCell>
                      <TableCell>{user.is_valid ? "" : "Tài khoản chưa được xác thực"}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </div>
  );
};

export default CurrentRoom;