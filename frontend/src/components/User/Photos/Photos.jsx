import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import {Link,Outlet} from 'react-router-dom'
import './Photos.scss'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  textDecorationLine:'none',
  fontSize:'30px',
  marginTop:'10px',
  color: theme.palette.text.secondary,
  
}));

   


function Photos() {
  return (
    <>
      <div >
        <Stack className="contain"
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <Item><Link to="" className="text">Gallary</Link></Item>
          <Item><Link to="album" className="text">Albums</Link></Item>
          <Item><Link to="review" className="text">Review</Link></Item>
        </Stack>
      </div>
         
          
         <div>
           <Outlet />
         </div>

    </>
  )
  ;
}

export default Photos;
