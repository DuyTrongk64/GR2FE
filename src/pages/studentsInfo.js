import { Box, List, ListItem, ListItemText, Typography } from '@mui/material'
import React, { useState } from 'react'
import SHeader from '../components/studentHeader/studentHeader'
import Info from '../components/info/info';
import { useNavigate } from 'react-router-dom';
import CurrentRoom from '../components/currentRoom/currentRoom';
import RegisterRoom from '../components/registerRoom/registerRoom';
import EditProfile from '../components/editProfile/editProfile';

const Student = () => {
  const [selectedChoice, setSelectedChoice] = useState(null);
  const navigate = useNavigate();

  const handleChoiceClick = (choice) => {
    setSelectedChoice(choice);
  };

  const handleHomeClick = () => {
    navigate(`/`);
  }

  const handleLogout = () => {
    // log out here
  }

  const renderContent = () => {
    // Define content based on the selected choice
    switch (selectedChoice) {
      case 'choice1':
        handleHomeClick();
      case 'choice2':
        return <Info />;
      case 'choice3':
        return <CurrentRoom />;
      case 'choice4':
        return <RegisterRoom />;
      case 'choice5':
        return <EditProfile />;
      case 'choice6':
        handleLogout();
      default:
        return <Info />;
    }
  };

  return (
    <Box>
      <SHeader />
      <Box sx={{ display: 'flex', borderLeft: "1px solid #ccc", height: 630 }}>
        {/* Left side menu */}
        <Box sx={{ width: 200, padding: 2 }}>
          <List>
            <Typography align='left'>Điều hướng</Typography>
            <ListItem
              button
              selected={selectedChoice === 'choice1'}
              onClick={() => handleChoiceClick('choice1')}
            >
              <ListItemText primary="Trang chủ" />
            </ListItem>
            <ListItem
              button
              selected={selectedChoice === 'choice2'}
              onClick={() => handleChoiceClick('choice2')}
            >
              <ListItemText primary="Thông tin cá nhân" />
            </ListItem>
            <Typography align='left'>Quản lý đăng ký</Typography>
            <ListItem
              button
              selected={selectedChoice === 'choice3'}
              onClick={() => handleChoiceClick('choice3')}
            >
              <ListItemText primary="Phòng hiện tại" />
            </ListItem>
            <ListItem
              button
              selected={selectedChoice === 'choice4'}
              onClick={() => handleChoiceClick('choice4')}
            >
              <ListItemText primary="Đăng ký phòng" />
            </ListItem>
            <Typography align='left'>Tài khoản</Typography>
            <ListItem
              button
              selected={selectedChoice === 'choice5'}
              onClick={() => handleChoiceClick('choice5')}
            >
              <ListItemText primary="Sửa hồ sơ" />
            </ListItem>
            <ListItem
              button
              selected={selectedChoice === 'choice6'}
              onClick={() => handleChoiceClick('choice6')}
            >
              <ListItemText primary="Đăng xuất" />
            </ListItem>
          </List>
        </Box>

        {/* Right side content */}
        <Box sx={{ flex: 1, padding: 2, borderLeft: '1px solid #ccc' }}>
          {renderContent()}
        </Box>
      </Box>
    </Box>
  );
}

export default Student;
