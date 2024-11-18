import React from 'react'
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export default function AlertBox(props) {
  return (
    <Stack sx={{ width: `${props.alertData.width}`,margin:"auto" }} boxShadow={"4.5px 4.5px 4.5px #949494"} spacing={2}>
        <Alert severity={props.alertData.severity} >
            
            {props.alertData.message}
        </Alert>
    </Stack>

  )
}
