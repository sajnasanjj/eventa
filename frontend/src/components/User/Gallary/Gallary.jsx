import React,{useEffect} from "react";
import './Gallary.scss'
import {useSelector,useDispatch} from 'react-redux'
import {getGallary} from '../../../features/auth/admin/Gallery/gallerySlice'
function Gallary() {
    const dispatch = useDispatch();
    const { gallarys } = useSelector((state) => state.getgallary);

    useEffect(() => {
        dispatch(getGallary())
    },[dispatch,gallarys]);
    console.log("sdfg", gallarys)

  return (
    <div className="container">
          

    <div className="featured">
              {gallarys.map((input) => (
            <div className="featuredItem">
                <img src={input.image} alt="" className="img" />
                <div className="featuredTitles">
                    <h5>{input.name}</h5>
                    <p>200 Seating
                        300 Floating
                    </p>
                </div>
            </div>
              ))
              }
          </div>
         
         
      </div>
          );
}

         
          
export default Gallary;
