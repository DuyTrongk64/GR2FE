import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import React, { useState } from "react";
import SHeader from "../components/studentHeader/studentHeader";
import Info from "../components/info/info";
import { useNavigate } from "react-router-dom";
import CurrentRoom from "../components/currentRoom/currentRoom";
import RegisterRoom from "../components/registerRoom/registerRoom";
import EditProfile from "../components/editProfile/editProfile";
import StudentManage from "../components/studentManage/studentManage";
import RegisterTime from "../components/registerTime/registerTime";
import Building from "../components/building/building";

const Admin = () => {
  const [selectedChoice, setSelectedChoice] = useState(null);
  const navigate = useNavigate();

  const handleChoiceClick = (choice) => {
    setSelectedChoice(choice);
  };

  const handleHomeClick = () => {
    navigate(`/`);
  };

  const handleLogout = () => {
    //log out here
  };

  const renderContent = () => {
    // Define content based on the selected choice
    switch (selectedChoice) {
      case "choice1":
        return <StudentManage />;
      case "choice2":
        return <RegisterTime />;
      case "choice3":
        return <Building />;
      default:
        return <StudentManage />;
    }
  };

  return (
    <Box>
      <SHeader />
      <Box sx={{ display: "flex", borderLeft: "1px solid #ccc", height: 600 }}>
        {/* Left side menu */}
        <Box sx={{ width: 200, padding: 2 }}>
          <List>
            <ListItem
              button
              selected={selectedChoice === "choice1"}
              onClick={() => handleChoiceClick("choice1")}
              sx={{
                backgroundColor:
                  selectedChoice === "choice1" ? "#2196F3" : "inherit",
              }}
            >
              <ListItemText primary="Quản lý sinh viên" />
            </ListItem>
            <ListItem
              button
              selected={selectedChoice === "choice2"}
              onClick={() => handleChoiceClick("choice2")}
              sx={{
                backgroundColor:
                  selectedChoice === "choice2" ? "#2196F3" : "inherit",
              }}
            >
              <ListItemText primary="Đợt đăng ký " />
            </ListItem>
            <ListItem
              button
              selected={selectedChoice === "choice3"}
              onClick={() => handleChoiceClick("choice3")}
              sx={{
                backgroundColor:
                  selectedChoice === "choice3" ? "#2196F3" : "inherit",
              }}
            >
              <ListItemText primary="Toà nhà  " />
            </ListItem>
          </List>
        </Box>

        {/* Right side content */}
        <Box sx={{ flex: 1, padding: 2, borderLeft: "1px solid #ccc" }}>
          {renderContent()}
        </Box>
      </Box>
    </Box>
  );
};

export default Admin;
