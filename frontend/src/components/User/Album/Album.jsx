import React,{useEffect} from "react";
import './Album.scss'
import {useSelector,useDispatch} from 'react-redux'
import { getAlbum } from "../../../features/auth/admin/Album/albumSlice";
function Album() {
  const dispatch = useDispatch();
  const { albums } = useSelector((state) => state.allalbum);

  useEffect(() => {
    dispatch(getAlbum())
  }, [dispatch]);
  return (
    <>

      <div className="container m-5">
          <div className="row album">
          {albums.map((input) => (
            <div className="col-md-4 albumItem">
              <img src={input.image} alt="" className="albumImg" />
              <div className="albumTitles">
                <h5>{input.name}</h5>
              </div>
            </div>
          ))}
          </div>
      
       
      </div>
    </>
  );
}

export default Album;
