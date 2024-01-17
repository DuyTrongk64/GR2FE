import { Box, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

const Info = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/fakedataUser.json"); // Adjust the path as needed
        const data = await response.json();
        setUserData(data[0]); // Assuming you have a single user in your JSON
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }
  return (
    <Box>
      <div
        style={{
          display: "flex",
          alignItems: "left",
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Thông tin sinh viên
      </div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "903",
          height: "231",
          borderRadius: 2,
          marginTop: 2,
          boxShadow: 5,
        }}
      >
        <Grid container spacing={2} sx={{ padding: 5 }}>
          <Grid item xs={3}>
            <img src="avatar.png" />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginLeft: 11,
                paddingTop: 5,
              }}
            >
              <Typography sx={{ fontWeight: "bold" }}>MSSV:</Typography>
              <Typography sx={{ paddingLeft: 1 }}> {userData.mssv}</Typography>
            </Box>
          </Grid>

          <Grid item xs={4.5}>
            <Box sx={{ marginLeft: 6 }}>
              <Box
                sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}
              >
                <Typography sx={{ fontWeight: "bold" }}>Họ và tên:</Typography>
                <Typography sx={{ paddingLeft: 5 }}>
                  {userData.student_name}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", direction: "row", marginBottom: 2 }}>
                <Typography
                  align="left"
                  sx={{ fontWeight: "bold", whiteSpace: "nowrap" }}
                >
                  Chương trình:
                </Typography>
                <Typography align="left" sx={{ paddingLeft: 1 }}>
                  {userData.educational_program}
                </Typography>
              </Box>

              <Box
                sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}
              >
                <Typography sx={{ fontWeight: "bold" }}>Giới tính:</Typography>
                <Typography sx={{ paddingLeft: 5 }}>
                  {userData.gender}
                </Typography>
              </Box>

              <Box
                sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}
              >
                <Typography sx={{ fontWeight: "bold" }}>Khoá học:</Typography>
                <Typography sx={{ paddingLeft: 5 }}>
                  {userData.uyear}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={{ fontWeight: "bold" }}>Email:</Typography>
                <Typography sx={{ paddingLeft: 5 }}>
                  {userData.email}
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={4.5}>
            <Box sx={{ marginLeft: 6 }}>
              <Box
                sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}
              >
                <Typography sx={{ fontWeight: "bold" }}>Trạng thái:</Typography>
                {userData.state ? (
                  <Typography sx={{ paddingLeft: 5, color: "green" }}>
                    Đã đăng ký
                  </Typography>
                ) : (
                  <Typography sx={{ paddingLeft: 5, color: "red" }}>
                    Chưa đăng ký
                  </Typography>
                )}
              </Box>

              <Box
                sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}
              >
                <Typography sx={{ fontWeight: "bold" }}>
                  Thông tin bổ sung:
                </Typography>
                {userData.info_state ? (
                  <Typography sx={{ paddingLeft: 5, color: "green" }}>
                    Đã hoàn tất
                  </Typography>
                ) : (
                  <Typography sx={{ paddingLeft: 5, color: "red" }}>
                    Chưa hoàn tất
                  </Typography>
                )}
              </Box>

              <Box
                sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}
              >
                <Typography sx={{ fontWeight: "bold" }}>Phòng:</Typography>
                <Typography sx={{ paddingLeft: 5 }}>{userData.room}</Typography>
              </Box>

              <Box
                sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}
              >
                <Typography sx={{ fontWeight: "bold" }}>Toà nhà:</Typography>
                <Typography sx={{ paddingLeft: 5 }}>
                  {userData.building}
                </Typography>
              </Box>

              <Box
                sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}
              >
                <Typography sx={{ fontWeight: "bold" }}>Kỳ đăng ký:</Typography>
                <Typography sx={{ paddingLeft: 5 }}>{userData.term}</Typography>
              </Box>

              <Box
                sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}
              >
                <Typography sx={{ fontWeight: "bold" }}>Thời gian:</Typography>
                <Typography sx={{ paddingLeft: 5 }}>
                  {userData.time_start} - {userData.time_end}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <div
        style={{
          display: "flex",
          alignItems: "left",
          fontSize: 20,
          fontWeight: "bold",
          marginTop: 10,
        }}
      >
        Tổng quan
      </div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        <Box sx={{padding: 2, borderRadius: 5, width: 206, backgroundColor: "#52C41AB2"}}>
            <Typography align="left" sx={{fontWeight: 600, fontSize: 24}}>{userData.total_student}</Typography>
            <Typography align="left" sx={{fontWeight: 600, fontSize: 18}}>Sinh viên</Typography>
            <Typography align="left" sx={{fontWeight: 400, fontSize: 14}}>Tổng số tài khoản</Typography>
        </Box>
        <Box sx={{padding: 2, borderRadius: 5, width: 206, backgroundColor: "#0E9CFFB2"}}> 
            <Typography align="left" sx={{fontWeight: 600, fontSize: 24}}>{userData.total_register}</Typography>
            <Typography align="left" sx={{fontWeight: 600, fontSize: 18}}>Đăng ký</Typography>
            <Typography align="left" sx={{fontWeight: 400, fontSize: 14}}>Tổng số đăng ký trong kỳ</Typography>
        </Box>
        <Box sx={{padding: 2, borderRadius: 5, width: 206, backgroundColor: "#FF7723B2"}}>
            <Typography align="left" sx={{fontWeight: 600, fontSize: 24}}>{userData.total_mod}</Typography>
            <Typography align="left" sx={{fontWeight: 600, fontSize: 18}}>Cán bộ</Typography>
            <Typography align="left" sx={{fontWeight: 400, fontSize: 14}}>Tổng tài khoản cán bộ</Typography>
        </Box>
        <Box sx={{padding: 2, borderRadius: 5, width: 206, backgroundColor: "#8E30FFB2"}}> 
            <Typography align="left" sx={{fontWeight: 600, fontSize: 24}}>{userData.total_room}</Typography>
            <Typography align="left" sx={{fontWeight: 600, fontSize: 18}}>Phòng</Typography>
            <Typography align="left" sx={{fontWeight: 400, fontSize: 14}}>Tổng số phòng</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Info;
