import React, { useState, useEffect } from 'react';
import {
  FormControl,
  Select,
  MenuItem,
  Box,
  Typography,
} from '@mui/material';

const RegisterTime = () => {
  const [data, setData] = useState([]);
  const [selectedTerm, setSelectedTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/fakedataRegisterTime.json');
        const jsonData = await response.json();
        setData(jsonData);

        // Set default selected term (if needed)
        if (jsonData.length > 0) {
          setSelectedTerm(jsonData[0].term);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleTermChange = (event) => {
    setSelectedTerm(event.target.value);
  };

  return (
    <div>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Typography>Chọn kỳ đăng ký:</Typography>
        <FormControl sx={{ marginLeft: 2 }}>
          <Select
            value={selectedTerm}
            onChange={handleTermChange}
            displayEmpty
          >
            <MenuItem value="" disabled>
              Chọn kỳ đăng ký
            </MenuItem>
            {data.map((item) => (
              <MenuItem key={item.term} value={item.term}>
                {item.term}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {selectedTerm && (
        <div>
          {data
            .find((item) => item.term === selectedTerm)
            ?.wave.map((wave) => (
              <div key={wave.id}>

                {/* <Typography variant="h6">Đợt {wave.id}</Typography>
                <Typography>Tổng số sinh viên: {wave.total_students}</Typography>
                <Typography>Số sinh viên đã đăng ký: {wave.total_register}</Typography>
                <Typography>Trạng thái: {wave.status ? 'Đã mở' : 'Chưa mở'}</Typography>
                <Typography>Tổng số phòng: {wave.total_room}</Typography>
                <hr /> */}

              <Box sx={{backgroundColor: "#E6F7FF", marginTop: 5, padding: 2}}>
              <Typography align='left' sx={{paddingLeft: 2}}>Đợt {wave.id}</Typography>
                <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          p: 1,
          m: 1,
          borderRadius: 1,
        }}
      >
        <Box sx={{padding: 2, borderRadius: 5, width: 206, backgroundColor: "#52C41AB2"}}>
            <Typography align="left" sx={{fontWeight: 600, fontSize: 24}}>{wave.total_students}</Typography>
            <Typography align="left" sx={{fontWeight: 600, fontSize: 18}}>Sinh viên</Typography>
            <Typography align="left" sx={{fontWeight: 400, fontSize: 14}}>Tổng số đăng ký tối đa</Typography>
        </Box>
        <Box sx={{padding: 2, borderRadius: 5, width: 206, backgroundColor: "#0E9CFFB2"}}> 
            <Typography align="left" sx={{fontWeight: 600, fontSize: 24}}>{wave.total_register}</Typography>
            <Typography align="left" sx={{fontWeight: 600, fontSize: 18}}>Đăng ký</Typography>
            <Typography align="left" sx={{fontWeight: 400, fontSize: 14}}>Tổng số đăng ký trong kỳ</Typography>
        </Box>
        <Box sx={{padding: 2, borderRadius: 5, width: 206, backgroundColor: "#FF7723B2"}}>
            <Typography align="left" sx={{fontWeight: 600, fontSize: 24}}>{wave.status ? 'Đã mở' : 'Chưa mở'}</Typography>
            <Typography align="left" sx={{fontWeight: 600, fontSize: 18}}>Trạng thái</Typography>
            <Typography align="left" sx={{fontWeight: 400, fontSize: 14}}>Trạng thái đợt đăng ký</Typography>
        </Box>
        <Box sx={{padding: 2, borderRadius: 5, width: 206, backgroundColor: "#8E30FFB2"}}> 
            <Typography align="left" sx={{fontWeight: 600, fontSize: 24}}>{wave.total_room}</Typography>
            <Typography align="left" sx={{fontWeight: 600, fontSize: 18}}>Phòng</Typography>
            <Typography align="left" sx={{fontWeight: 400, fontSize: 14}}>Tổng số phòng</Typography>
        </Box>
      </Box>
      </Box>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default RegisterTime;
