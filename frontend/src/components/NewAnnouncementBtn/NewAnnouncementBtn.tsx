import React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { NavLink } from 'react-router-dom';
import './newAnnouncementBtn.scss';
import { Button, Typography } from '@mui/material';

function NewAnnouncementBtn() {
  return (
    <NavLink to="/new-announcement">
      <Button variant="contained" color="success">
        <AddCircleOutlineIcon className="plus" />
        <Typography variant="body1" className="announ-btn-text">
          Новое объявление
        </Typography>
      </Button>
    </NavLink>
  );
}

export default NewAnnouncementBtn;
