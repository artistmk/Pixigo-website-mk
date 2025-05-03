import React from 'react'
import '../responsive/Home.css'
import Loader from './Loader'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = ({images, loader, saved, setSaved}) => {

  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto"
  }

    const saveImg = (img) => {

      let flag = true;

      if(saved !== null && saved.length > 0) {
          
        for (let i=0; i<saved.length; i++) {
          if(saved[i].id === img.id) {

            flag = false;
           
            toast.info('Image Already Saved!', {
              position: "top-right",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
              });

            break;
          }
        }
      }
  
      if(flag) {

        setSaved([...saved, img]);

        toast.success('Image Saved!', {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
      }
    }

  return (
   <>

<ToastContainer />
 
   <div className="container-fluid text-center" id='top' style={myStyle}>

    {loader ? (
        <Loader/>
    ) : (
        <>
        <div className="flex">
           
        {images.map((img) => {
          return (
              <div className='items' key={img.id} onClick={() => saveImg(img)}>
                
                <img src={img.src.medium} alt={img.photographer}/>

            </div>
        )
    })}
    </div>
        </>
    )}
   
   {images.length != 0 && (
     <a href='#top' className="btn btn-warning my-5">Back To Top</a> 
    )}
    
   </div>
   </>
  )
}

export default Home
