/* eslint-disable camelcase */
import React from 'react';
import styled from 'styled-components';

import RepoDetail from './commons/RepoDetail';
import RepoLogoSVG from './commons/svg/RepoLogoSVG';
import RepoNotification from './commons/RepoNotification';
import NavigationItem from './NavigationItem';



const Anchor = styled.a`
  color: ${props => props.color};
  text-decoration: none;
  font-size : 18px;
  font-weight : ${props => (props.fontWeight
    ? props.fontWeight : 'none')}
  &:hover {
    text-decoration: underline;
  }

  &:active {
    color: purple; 
  }
`;

const navigationValues = [
    {
      name: 'Code', selected: false,
    },
    {
      name: 'Issues', value: 625, selected: true, url: `${window.location.origin}`,
    },
    {
      name: 'Pull Requests', value: 208, selected: false,
    },
    {
      name: 'Action', selected: false,
    },
    {
      name: 'Projects', selected: false, 
    },
    
    {
      name: 'Wiki', selected: false,
    },
    {
      name: 'Security', selected: false,
    },
    {
      name: 'Insights', selected: false,
    },
    
  ];

const Nav = styled.nav`
background-color: #fafbfc;
border-bottom: 2px solid #e1e4e8;
width: 100%;
-webkit-transition: height 0.2s ease-in-out;
transition: height 0.2s ease-in-out;
height: 88px;
margin: 0 auto;
margin-bottom : 20px;
@media (max-width: 820px) {
  height: 77px;
}
@media (max-width: 600px) {
  height: 220px;
}
@media (max-width: 600px) {
  height: 240px;
}   
`;

const Navmenus = styled.div` 
      display: flex;
      flex-direction: row;
      width: 88%;
      margin: 0 auto;
      padding-top : 10px;
      justify-content: ${props => props.row === 'first'
                       && 'space-between'};
      
      @media (max-width: 600px) {
          flex-direction : column
          padding : 0px;
      }
`;

const RightNav = styled.div`
   @media (max-width: 820px) {
    display : none;
   }
`;

const RepoTitleInfo = styled.div`
@media (max-width: 600px) {
        padding-top: 15px;
      }

`;




function Header() {
    return (
        <Nav>
        <Navmenus row="first">
          <RepoTitleInfo>
            <RepoLogoSVG />
            <Anchor
              color="#0366d6"
            >
              facebook/react
            </Anchor>
            
          </RepoTitleInfo>
          <RightNav>
            <RepoNotification tag="Notification"  />
            <RepoDetail tag="Star"  value="175K"/>
            <RepoDetail tag="Fork" value="35.3K" />
          </RightNav>
        </Navmenus>

      <Navmenus >
          {
            navigationValues.map(item => (
              <NavigationItem
                key={item.name}
                {...item}
              />
            ))
          }
        </Navmenus>
        </Nav>
    )
}

export default Header
