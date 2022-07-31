import React,{useEffect} from "react";
import './Gallary.scss'
import {useSelector,useDispatch} from 'react-redux'
import {getGallery} from '../../../features/auth/admin/Gallery/gallerySlice'
function GallaryUser() {
    const dispatch = useDispatch();
    const { gallarys } = useSelector((state) => state.getgallery);

    useEffect(() => {
        dispatch(getGallery())
    },[dispatch]);
    console.log("sdfg",gallarys)

  return (
    <div className="galleryforUser p-5 mx-5">
    <div className="row featuredd">
              {gallarys.map((input) => (
            <div className="col-md-3 featuredItem">
                <img src={input.image} alt="" className="img" />
                <div className="featuredTitles">
                    <h5>{input.name}</h5>
                    <p>200 Seating
                    </p>
                </div>
            </div> 
              ))
              }
          </div>
         
         
      </div>
          );
}
export default GallaryUser;
