import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import IssuesTable from './issues-table/IssuesTable';
import Footer from './Footer';
import Header from './Header';

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
    <Header />
    <IssueListingContainer>
      
      <Router>
        <Switch>
          <Route exact path="/" component={IssuesTable} />
          
          <Route path="*" component={IssuesTable} />
        </Switch>
      </Router>
      
      <Footer/>
    </IssueListingContainer>
  </Container>
);
export default App;
