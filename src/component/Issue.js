import styled from 'styled-components';
import React from 'react';
import IssueOpenedSVG from './commons/svg/IssueOpenedSVG';
import CompletedSVG from './commons/svg/CompletedSVG';


const Caret = styled.span`
    padding: 0px 5px;
    
    &:after {
      border: 4px solid transparent;
      border-top-color: currentcolor;
      content: "";
      display: inline-block;
      height: 0;
      vertical-align: -2px;
      width: 0;
 }`;

const IssuesTableHeaderContainer = styled.div`
    background-color: #f6f8fa;
    border: 1px solid #e1e4e8;
    width: 88%;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    padding-top : 10px;
    padding-bottom: 10px;
    border-radius: 5px 5px 0 0;
    margin-top: 20px;
    position: relative;
    cursor : ponter;
        align-items: center;
    justify-content : space-between;
    
      @media (max-width: 820px) {
        flex-direction : column;
      }
`;

const OpenClosedIssueDetails = styled.div`
     padding-left: 16px
`;

const OpenClosedIssueAnchor = styled.a`
    
    border: 1px solid transparent;
    border-radius: 5px 5px 0 0;
    border-top: 3px solid transparent;
    float: left;
    font-weight : 'bold'
    padding: 13px 0px;
    white-space: nowrap;
    cursor : pointer;
    text-decoration : none;
    color :'grey';
    &:hover {
     color : #24292e;
    }
    
`;

const otherValues = ['Auther', 'Label', 'Projects', 'Milestones', 'Assignee', 'Sort'];

const DetailSpan = styled.span`
     padding-left: 15px;
     padding-right: 15px;
     padding-top: 5px;
     padding-bottom: 5px;
     color: #586069;
     &:hover {
     color : #24292e;
    }
`;
const OtherDetail = ({ value }) => (
  <DetailSpan>
    {value}
    {' '}
    <Caret />
    {' '}
  </DetailSpan>
);


const OtherDetails = styled.div`
   display : flex;
   flex-direction : row;
   
   @media (max-width: 820px) {
        flex-direction : column;
      }
   
`;


const IssuesTableHeader = () => (
  <IssuesTableHeaderContainer>
    <OpenClosedIssueDetails>
      <OpenClosedIssueAnchor
        selected
        // href={`${WEB_URL}/${OWNER}/${REPO}/issues?q=is%3Aopen+is%3Aissue`}
      >
        <IssueOpenedSVG color="black" />
           <span style={{color:"black"}}> 625 Open</span>
      </OpenClosedIssueAnchor>
      <OpenClosedIssueAnchor
        style={{ marginLeft: '10px' }}
        // href={`${WEB_URL}/${OWNER}/${REPO}/issues?q=is%3Aopen+is%3Aissue`}
      >
        <CompletedSVG color="grey" hoverColor="#24292e" />
        <span style={{color:"grey"}}> 10,104 closed</span>
      </OpenClosedIssueAnchor>
    </OpenClosedIssueDetails>
    <OtherDetails>
      {otherValues.map(value => <OtherDetail key={value} value={value} />)}
    </OtherDetails>
  </IssuesTableHeaderContainer>
);

export default IssuesTableHeader;





