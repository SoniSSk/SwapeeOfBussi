import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Issue from './component/Issue';
import IssueContainer from './component/IssueContainer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Issue/>
      <IssueContainer/>
      <Footer/>
    </div>
  );
}

export default App;
