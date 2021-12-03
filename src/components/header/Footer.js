/* eslint-disable camelcase */
import React from 'react';
import Nav from './Nav';
import FooterMenu from './FooterMenu';

const FooterValve = [
  {
    name: 'Term',
  },
  {  
    name: 'Privacy',
  },
  {
    name: 'Security',
  },
  {
    name: 'Status',
  },
  {
    name: 'Docs', 
  },
  
  
  {  
    name: 'Contact',
  },
  {
    name: 'Pricing', 
  },
  {
    name: 'Traning',
  },
  
  {
    name: 'Blog',
  },
  {
    name: 'About', 
  },
 
  
];



const Footer = ({
 
  stargazers_count,
  
  forks_count,
}) => (
  <Nav>
     <p><strong>ProTip</strong> What's not been update in a month:<a src="#">update:2021-08-17</a></p>
     <hr/>
    <FooterMenu >
    {
        FooterValve.map(item => (
         <p style={{ width:"150px", padding:"20px" }}>{item.name}</p>
        ))
      }
    </FooterMenu>
      
    
   
  </Nav>
);

export default Footer;

