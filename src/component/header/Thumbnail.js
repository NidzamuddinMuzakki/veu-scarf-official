import React, { useEffect, useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import Images1 from './../../images/1.webp'
import Images2 from './../../images/2.webp'

import Images3 from './../../images/3.webp'
import Images4 from './../../images/4.webp'
import Images5 from './../../images/5.webp'
import Images6 from './../../images/6.webp'
import { down } from "styled-breakpoints";
import { useBreakpoint } from "styled-breakpoints/react-styled";


import useWindowDimensions from "./size";


const  MyGallery = ()=> {
    const { height, width } = useWindowDimensions();
    const [images, setImages] = useState([])
    const isMobile = useBreakpoint(down("sm"));
    console.log(width,isMobile, images,"asa")
    useEffect(()=>{
    console.log(width,isMobile,"nidzam")

        if(isMobile || width<600){
           setImages([
           {
             original: Images5,
           },
           {
             original: Images4,
           },
           {
             original: Images6,
           },
         ])
        }else{
            setImages([
                {
                  original: Images1,
                },
                {
                  original: Images2,
                },
                {
                  original: Images3,
                },
              ])
        }
    },[isMobile,width])
  
    return( <div style={{width:'100vw', height:'100vh',background:'rgba(222, 173, 174,1)'}}><ImageGallery slideDuration={3000} useTranslate3D={false}  showNav={false} showFullscreenButton={false} showThumbnails={false} disableThumbnailScroll={false} showPlayButton={false} autoPlay={true} items={images} showBullets={true} /></div>)
  }

export default MyGallery