import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Detail from './Detail';
const RepoDetailContainer = styled.div`
  display: inline-block;
  margin:5px;
  font-size: 12px;
  border-collapse : collapse;
`;

const RepoDetailTagContainer = styled.span`
   border: 1px solid #cdcfd1;
   border-width: 1px 1px 1px 1px;
   padding: 5px 10px;
   font-weight : bold;
   border-radius : 5px 5px 5px 5px;
   background-color : #f4f7f9;
   line-height: 20px;
   cursor : pointer;
   
   &:hover {
     background-color : #e7eaed;
   }
`;


const RepoNotification = ({ tag }) => (
  <RepoDetailContainer>
    <RepoDetailTagContainer>
      { tag === 'Notification'  }
      {tag}
     
    </RepoDetailTagContainer> 
  </RepoDetailContainer>
);


export default RepoNotification;

Detail.propTypes = {
  tag: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
