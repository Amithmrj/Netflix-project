import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
  const [show, setShow]= useState(false)
  useEffect(()=>{
    window.addEventListener("scroll",()=>{    //use to monitor ----To give a black background once the 600 pxl is scrolled
      if(window.scrollY>600){                 //first argument "scroll" is the event and the sec arg is the function to execute
        setShow(true)
      }
      else{
        setShow(false)
      }
    })
  })         //dependency of this useefffect is null to call useEffect in every render

  return (
    <div className={`${show && 'Navig-black'} Nav`}>      {/* when show equals true also consider navig-black with nav*/}
      <img width={"150px"} src=" https://farm6.staticflickr.com/5821/20639706793_8c038faa4a_o.png" alt="" />
    </div>
  )
}

export default Nav