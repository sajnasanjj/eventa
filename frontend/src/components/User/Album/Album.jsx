import React,{useEffect} from "react";
import './Album.scss'
import {useSelector,useDispatch} from 'react-redux'
import { getAlbum } from "../../../features/auth/admin/Album/albumSlice";
import { Container } from "@material-ui/core";
function Album() {
  const dispatch = useDispatch();
  const { albums } = useSelector((state) => state.allalbum);

  useEffect(() => {
    dispatch(getAlbum())
  }, [dispatch]);
  return (
    <>
      <Container>
          <div className="row album mt-5 pt-3">
          {albums.map((input) => (
            <div className="col-md-4 albumItem">
              <img src={input.image} alt="" className="albumImg" />
              <div className="albumTitles">
                <h5>{input.name}</h5>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </>
  );
}

export default Album;
