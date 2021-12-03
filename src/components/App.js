import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import HeaderContainer from '../containers/HeaderContainer';
import IssuesTable from './issues-table/IssuesTable';
import IssuesDetail from './issue-detail/IssueDetail';
import Footer from './header/Footer';

const Container = styled.div`
  font-size : 14px;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,
  Helvetica,Arial,sans-serif,Apple Color Emoji,
  Segoe UI Emoji,Segoe UI Symbol;
  margin : 0px;
  padding : 0px;
`;

const IssueListingContainer = styled.div`
  font-size : 14px;
  width : 88%;
  margin : 0 auto;
`;

const App = () => (
  <Container>
    <HeaderContainer />
    <IssueListingContainer>
      
      <Router>
        <Switch>
          <Route exact path="/" component={IssuesTable} />
          <Route path="/:id" component={IssuesDetail} />
          <Route path="*" component={IssuesTable} />
        </Switch>
      </Router>
      <p style={{ textAlign: 'center' }}><strong>ProTip</strong> What's not been update in a month:update:2021-08-17</p>
     <hr/>
      <Footer/>
    </IssueListingContainer>
  </Container>
);
export default App;
