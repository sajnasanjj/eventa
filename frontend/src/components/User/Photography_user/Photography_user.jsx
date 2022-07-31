import { LocationCity } from "@material-ui/icons";
import React from "react";
import './Photography_user.scss';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageIcon from '@mui/icons-material/Image';

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

function PhotographyUser() {
  return (
  <>

          <div className="row photos-head">
              <div className="col-md-4 col-sm-12 main-outlines">
                  <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2VkZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
" alt="" className="images" />
                    
                  
              </div>
              <div className="col-md-4 col-sm-12 p-4 details ">
                  <h6>Photography</h6>
                  <p><LocationCity />Kochi,Kerala,India</p>
                  <h6>Photo Package : 35,000 per day</h6>
                  <h6>Photo + Vedio : 65,000 per day</h6>
              </div>
              
 </div>
<div>
              <ImageList
                  sx={{ width: '100%', height: 300 }}
                  variant="quilted"
                  cols={4}
                  rowHeight={121}
              >
                  {itemData.map((item) => (
                      <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                          <img
                              {...srcset(item.img, 121, item.rows, item.cols)}
                              alt={item.title}
                              loading="lazy"
                          />
                      </ImageListItem>
                  ))}
              </ImageList>

              
</div>
 <div className="row photography-about">

              <h6>1.Working Style</h6>
              
              <p>

              The team presents to you an ensemble of great and outstanding pictures. Their team's professionalism, energy, and enthusiasm will be reflected in every single picture of your album. They ensure to shoot every moment and feel of the ceremony by taking real candid pictures. This talented and highly skilled team of photographers should definitely be on your list when hiring a wedding photographer. From pre-wedding shoots to post wedding pictures, they aim at providing all the pictures to you. They have a creative, innovative and contemporary style of photography and capture mesmerizing moments telling a story out of pictures captured in the camera. With an experience of 3-5 years in wedding photography and using the latest tools and techniques, their team delivers ultimate quality pictures ensuring to give beautiful memories to the happy couple.
</p>
              <h6>2.Services provided</h6>
              <p> What would it be like if you have no pictures to cherish? Well of course it's the most important part of a wedding ceremony. The team is highly proficient and provides the best of pictures. They offer following services:
              </p>
              
              <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                  <ListItem>
                      <ListItemAvatar>
                          
                              <ImageIcon />
                         
                      </ListItemAvatar>
                      <ListItemText primary="Wedding Photography"/>
                  </ListItem>
                  <ListItem>
                      <ListItemAvatar>
                          
                              <ImageIcon />
                         
                      </ListItemAvatar>
                      <ListItemText primary="Pre-wedding Photoshoots" />
                  </ListItem>
                  <ListItem>
                      <ListItemAvatar>
                          
                              <ImageIcon />
                         
                      </ListItemAvatar>
                      <ListItemText primary="Videography" />
                  </ListItem>
              </List>
                    
              

 </div>
  


  </>
  );  
}
const itemData = [

    {
        img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2VkZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        title: 'Breakfast',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2VkZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',

        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2VkZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2VkZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        title: 'Coffee',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2VkZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        title: 'Hats',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2VkZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
    }]

export default PhotographyUser;
