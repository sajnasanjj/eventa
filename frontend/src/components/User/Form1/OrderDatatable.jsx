import React, { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from "@mui/material";
import './OrderDatatable.scss';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../../../features/auth/admin/Gallery/gallerySlice'

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

function OrderDatatable() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const dispatch = useDispatch()
    const [order,setOrder] = useState([])
   
    const { orders, isError, isSuccess, message } = useSelector((state) => state.allorder);

    useEffect(() => {
        if (isSuccess && orders) {
            setOrder(orders)
        }
        dispatch(reset());

    }, [orders, isError, isSuccess, message, dispatch]);
    console.log("Details", orders)
    
    return(
        <>
        <div className="detailbox">

        
        {orders.map((input)=>(

            <Card sx={{ maxWidth:600 ,marginLeft:'auto',paddingLeft:'10px' }} className="cardborder">
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            W
                        </Avatar>
                    }
                    
                    title="Your Details"
                    
                />
                <Typography variant="h5" color="text.secondary">
                    {input.bride}&{input.groom}
                </Typography>
               
                <Typography paragraph>
                    Contact:{input.phonenumber}<br />

                    Bride:{input.bride} <br />
                    Groom:{input.groom} <br />
                    Events: {input.events} <br />
                    Number of Guests:{input.guests}<br/>
                    Starting-date :{input.start_date}<br/>
                    Ending-date:{input.end_date}<br/>
                    Photography:{input.photography}<br/>
                    Catering:{input.catering}<br/><br/>
                    <Typography paragraph>Address:
                    </Typography>
                    Address:{input.address} <br />
                    Street: {input.street} <br />
                    City:{input.City} <br />
                    District: {input.district} <br />
                    Country: {input.country} <br />
                    Postal code: {input.postal_code} 

                </Typography>
               
                
            </Card>
        ))}
            </div>
        </>
    );
                }

export default OrderDatatable;
