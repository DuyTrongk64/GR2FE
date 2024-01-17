import React, { useState, useEffect } from 'react';
import {
  FormControl,
  Select,
  MenuItem,
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Typography,
} from '@mui/material';

const StudentManage = () => {
  const [data, setData] = useState([]);
  const [selectedBuilding, setSelectedBuilding] = useState('');
  const [selectedRoom, setSelectedRoom] = useState('');
  const [selectedStudents, setSelectedStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/fakedataStudentManage.json'); // Adjust the path as needed
        const jsonData = await response.json();
        console.log('Fetched data:', jsonData);
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Reset selected room when building changes
    setSelectedRoom('');
    // Reset selected students when building or room changes
    setSelectedStudents([]);
  }, [selectedBuilding]);

  const handleBuildingChange = (event) => {
    setSelectedBuilding(event.target.value);
  };

  const handleRoomChange = (event) => {
    setSelectedRoom(event.target.value);
    // Find the selected building and room in the data
    const selectedBuildingData = data.find((building) => building.building === selectedBuilding);
    if (selectedBuildingData) {
      const selectedRoomData = selectedBuildingData.detail.find((room) => room.room === event.target.value);
      setSelectedStudents(selectedRoomData ? selectedRoomData.students : []);
    }
  };

  return (
    <div>
      <Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <FormControl sx={{ marginLeft: 2 }}>
            <Select
              value={selectedBuilding}
              onChange={handleBuildingChange}
              displayEmpty
            >
              <MenuItem value="" disabled>
                Chọn tòa nhà
              </MenuItem>
              {data.map((building) => (
                <MenuItem key={building.building} value={building.building}>
                  {building.building}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {selectedBuilding && (
            <>
              <FormControl sx={{ marginLeft: 2 }}>
                <Select
                  value={selectedRoom}
                  onChange={handleRoomChange}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    Chọn phòng
                  </MenuItem>
                  {data
                    .find((building) => building.building === selectedBuilding)
                    ?.detail.map((room) => (
                      <MenuItem key={room.room} value={room.room}>
                        {room.room}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </>
          )}
        </Box>

        {selectedStudents.length > 0 && (
          <TableContainer component={Paper} sx={{ marginTop: 2 }}>
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
                {selectedStudents.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>{student.id}</TableCell>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.date_of_birth}</TableCell>
                    <TableCell>{student.gender}</TableCell>
                    <TableCell>{student.class}</TableCell>
                    <TableCell>{student.mssv}</TableCell>
                    <TableCell>{student.note}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </div>
  );
};

export default StudentManage;
