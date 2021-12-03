/* eslint-disable camelcase */
import React from 'react';
import styled from 'styled-components';
import Anchor from '../commons/Anchor';
import RepoDetail from '../commons/RepoDetail';
import NavigationItem from './NavigationItem';
import Nav from './Nav';
import Navmenus from './Navmenus';
import RepoLogoSVG from '../commons/svg/RepoLogoSVG';
import RepoNotification from '../commons/RepoNotification';

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

const Header = ({
  name,
  html_url,
  owner: { login, url },
  stargazers_count,
  subscribers_count,
  forks_count,
}) => (
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
        <RepoDetail tag="Star" value={stargazers_count} />
        <RepoDetail tag="Fork" value={forks_count} />
      </RightNav>
    </Navmenus>
    <Navmenus row="second">
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
);

export default Header;

