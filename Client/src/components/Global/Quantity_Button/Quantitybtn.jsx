import React, { useState } from 'react';
import { Box, Button, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const QuantityButton = (props) => {


  return (
    <Box display="flex" alignItems="center">
      <IconButton onClick={props.handleDecrease} aria-label="decrease quantity" disabled={props.Quantity <= 1}>
        <RemoveIcon />
      </IconButton>
      <Typography variant="h6" mx={2}>
        {props.Quantity}
      </Typography>
      <IconButton onClick={props.handleIncrease} aria-label="increase quantity">
        <AddIcon />
      </IconButton>
    </Box>
  );
};

export default QuantityButton;