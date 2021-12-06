/* eslint-disable camelcase */
import React from 'react';
import FooterBar from './FooterBar';


function Footer() {
    return (
        <>
        <p style={{ textAlign: 'center' }}><strong>ProTip</strong> What's not been update in a month:<span  style={{ color:"blue" }}>update:2020-12-07</span></p>
           <hr/>
          < FooterBar>  
          
            
              <p style={{ width:"150px", padding:"20px" }}>Term</p>
              <p style={{ width:"150px", padding:"20px" }}>Privacy</p>
              <p style={{ width:"150px", padding:"20px" }}>Security</p>
              <p style={{ width:"150px", padding:"20px" }}>Status</p>
              <p style={{ width:"150px", padding:"20px" }}>Docs</p>
              <img style={{ paddingTop:"20px"  }} src= "https://avatars.githubusercontent.com/u/9919?s=280&v=4" width="40" height="40" alt="Github Logo"/>
              <p style={{ width:"150px", padding:"20px" }}>Contact</p>
              <p style={{ width:"150px", padding:"20px" }}>Pricing</p>
              <p style={{ width:"150px", padding:"20px" }}>Traning</p>
              <p style={{ width:"150px", padding:"20px" }}>Blog</p>
              <p style={{ width:"150px", padding:"20px" }}>About</p> 
          </FooterBar>
        
        </>
    )
}

export default Footer

