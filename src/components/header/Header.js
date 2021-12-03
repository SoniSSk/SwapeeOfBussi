/* eslint-disable camelcase */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Anchor from '../commons/Anchor';
import RepoDetail from '../commons/RepoDetail';
import NavigationItem from './NavigationItem';
import Nav from './Nav';
import Navmenus from './Navmenus';
import RepoLogoSVG from '../commons/svg/RepoLogoSVG';
import { OWNER, REPO, WEB_URL } from '../../api/constants';
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
    name: 'Security', value: 2, selected: false,
  },
  {
    name: 'Insights', selected: false, 
  },
];


const PathDivider = styled.span`
  margin: 0 .25em;
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
          href={url}
          color="#0366d6"
        >
          <p>facebook/react</p>
        </Anchor>
        <PathDivider></PathDivider>
        
      </RepoTitleInfo>
      <RightNav>
        <RepoNotification tag = "Notification"/>
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


Header.propTypes = {
  name: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    login: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  stargazers_count: PropTypes.number.isRequired,
  subscribers_count: PropTypes.number.isRequired,
  forks_count: PropTypes.number.isRequired,
};
