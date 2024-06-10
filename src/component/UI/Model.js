import React from "react";
import ReactDom from 'react-dom'

import './Model'


const overLayPortalId = document.getElementById('overlays')

const Backdrop = (props) => {
    return <div style={{position:'fixed',top:'0',left:'0',width:'100%',height:'100vh',zIndex:'20',backgroundColor:'#000000bf'}}></div>
  }

  const ModelOverLay=(props)=>{
    return <>
     <div className="modal" style={{
        position:'fixed',
        width:'90%',
        height:'30%',
        backgroundColor:'white',
        padding:'1rem',
        borderRadius:'14px',
        animation:"slide-down 300ms ease-out forwards"
        ,top:'20vh',
        zIndex:'30',
        boxShadow:'0 2px 8px rgba(0, 0, 0, 0.25)',
        left:'5%',

     }}>
    {props.children}
     </div>
     </>
  }

const  Model=(props)=>{
    return <>
    {ReactDom.createPortal(<Backdrop></Backdrop>,overLayPortalId)}
    {ReactDom.createPortal(<ModelOverLay>{props.children}</ModelOverLay>,overLayPortalId)}
    </>
}

export default Model;