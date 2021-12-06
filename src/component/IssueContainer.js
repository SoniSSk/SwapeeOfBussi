import styled from 'styled-components';
import React from 'react';
import IssueOpenedSVG from './commons/svg/IssueOpenedSVG';


const Container = styled.div`
    
    border: 1px solid #e1e4e8;
    width: 88%;
    height: 400px;
    border-top: none;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
   
    border-radius: 0 0 5px 5px ;
   
    position: relative;
    cursor : ponter;
        align-items: center;
    justify-content : space-between;
    
      @media (max-width: 820px) {
        flex-direction : column;
      }
`;


const IssueWrapper = styled.div`
   border :  1px solid #e1e4e8;
   background-color : #fff;
   height:80px;
   font-size:16px;
   display : flex;
   flex-direction : column;
   
   &:hover {
     background-color : #f6f8fa;
   }
`;



function IssueContainer() {
    // const [data, setData] = useState();
    async function getData(url="") {
        // Default options are marked with *
        const response = await fetch(url)
        .then(response => response.json())
        // console.log("KK",response.json());
        
        .then(data => console.log("KK",data));
        return response;
        // setData(response.json())
        // return response; // parses JSON response into native JavaScript objects
      }
      
     
     const data = getData('https://api.github.com/repos/facebook/react/issues');
    console.log("vvddf",data);

    return (
        <Container>
    <div style={{ width:"100%", height:"100%",overflow:"scroll"}}>


   <IssueWrapper>
        <div style={{
            paddingLeft:"10px",
            textAlign:"left",
            justifyContent:"left",
            marginTop:"10px",
             float:"left",
            display : "flex",
   flexdirection : "column",}}>
            <div >
                <IssueOpenedSVG color="green" /> </div>
                <div><b>[DevTools Bug] Could not find node with id \"99\" in commit tree</b>
              </div>  
        </div>
       
        
   </IssueWrapper>


   <IssueWrapper>
        <div style={{
            paddingLeft:"10px",
            textAlign:"left",
            justifyContent:"left",
            marginTop:"10px",
             float:"left",
            display : "flex",
   flexdirection : "column",}}>
            <div >
                <IssueOpenedSVG color="green" /> </div>
                <div><b>### Website or app\n\nhttps://consumption.coffee/\n\n### Repro steps\n\n1.</b>
              </div>  
        </div>
      
   </IssueWrapper>
   <IssueWrapper>
        <div style={{
            paddingLeft:"10px",
            textAlign:"left",
            justifyContent:"left",
            marginTop:"10px",
             float:"left",
            display : "flex",
   flexdirection : "column",}}>
            <div >
                <IssueOpenedSVG color="green" /> </div>
                <div><b>Bug:在联通4g或wifi网络环境下,引用在线cdn报错</b>
              </div>  
        </div>
        
        
   </IssueWrapper>
   <IssueWrapper>
        <div style={{
            paddingLeft:"10px",
            textAlign:"left",
            justifyContent:"left",
            marginTop:"10px",
             float:"left",
            display : "flex",
   flexdirection : "column",}}>
            <div >
                <IssueOpenedSVG color="green" /> </div>
                <div><b>[WIP]: Adding E2E test for ParseHookNames</b>
              </div>  
        </div>
       
   </IssueWrapper>
   <IssueWrapper>
        <div style={{
            paddingLeft:"10px",
            textAlign:"left",
            justifyContent:"left",
            marginTop:"10px",
             float:"left",
            display : "flex",
   flexdirection : "column",}}>
            <div >
                <IssueOpenedSVG color="green" /> </div>
                <div><b>Bug: Clicking button type=\"button\" submits form</b>
              </div>  
        </div>
       
   </IssueWrapper>
   <IssueWrapper>
        <div style={{
            paddingLeft:"10px",
            textAlign:"left",
            justifyContent:"left",
            marginTop:"10px",
             float:"left",
            display : "flex",
   flexdirection : "column",}}>
            <div >
                <IssueOpenedSVG color="green" /> </div>
                <div><b>Bug: Rendering content inside an iFrame using createPortal with Firefox is blank</b>
              </div>  
        </div>
      
        
   </IssueWrapper>
  
   <IssueWrapper>
        <div style={{
            paddingLeft:"10px",
            textAlign:"left",
            justifyContent:"left",
            marginTop:"10px",
             float:"left",
            display : "flex",
   flexdirection : "column",}}>
            <div >
                <IssueOpenedSVG color="green" /> </div>
                <div><b>Show warning on invalid value for option</b>
              </div>  
        </div>
        
   </IssueWrapper>
  
   <IssueWrapper>
        <div style={{
            paddingLeft:"10px",
            textAlign:"left",
            justifyContent:"left",
            marginTop:"10px",
             float:"left",
            display : "flex",
   flexdirection : "column",}}>
            <div >
                <IssueOpenedSVG color="green" /> </div>
                <div><b>Object.prototype` builtins should not be used directly</b>
              </div>  
        </div>
        
   </IssueWrapper>
  
   <IssueWrapper>
        <div style={{
            paddingLeft:"10px",
            textAlign:"left",
            justifyContent:"left",
            marginTop:"10px",
             float:"left",
            display : "flex",
   flexdirection : "column",}}>
            <div >
                <IssueOpenedSVG color="green" /> </div>
                <div><b>flight: Add a snapshot test for manifest generation</b>
              </div>  
        </div>
      
   </IssueWrapper>
  
   <IssueWrapper>
        <div style={{
            paddingLeft:"10px",
            textAlign:"left",
            justifyContent:"left",
            marginTop:"10px",
             float:"left",
            display : "flex",
   flexdirection : "column",}}>
            <div >
                <IssueOpenedSVG color="green" /> </div>
                <div><b>fix: SyntaxError: JSON.parse: bad parsing</b>
              </div>  
        </div>
      
   </IssueWrapper>
  
   <IssueWrapper>
        <div style={{
            paddingLeft:"10px",
            textAlign:"left",
            justifyContent:"left",
            marginTop:"10px",
             float:"left",
            display : "flex",
   flexdirection : "column",}}>
            <div >
                <IssueOpenedSVG color="green" /> </div>
                <div><b>React 18: How to \"wait\" for concurrent mode</b>
              </div>  
        </div>
       
        
   </IssueWrapper>
  
   <IssueWrapper>
        <div style={{
            paddingLeft:"10px",
            textAlign:"left",
            justifyContent:"left",
            marginTop:"10px",
             float:"left",
            display : "flex",
   flexdirection : "column",}}>
            <div >
                <IssueOpenedSVG color="green" /> </div>
                <div><b>React Hook useCallback has a missing dependency: 'groupInfo'. Either include it or remove the dependency array  react-hooks/exhaustive-deps</b>
              </div>  
        </div>
        
        
   </IssueWrapper>
  
   <IssueWrapper>
        <div style={{
            paddingLeft:"10px",
            textAlign:"left",
            justifyContent:"left",
            marginTop:"10px",
             float:"left",
            display : "flex",
   flexdirection : "column",}}>
            <div >
                <IssueOpenedSVG color="green" /> </div>
                <div><b>[DevTools Bug]: CDN-based site not working</b>
              </div>  
        </div>
     
        
   </IssueWrapper>
  
   <IssueWrapper>
        <div style={{
            paddingLeft:"10px",
            textAlign:"left",
            justifyContent:"left",
            marginTop:"10px",
             float:"left",
            display : "flex",
   flexdirection : "column",}}>
            <div >
                <IssueOpenedSVG color="green" /> </div>
                <div><b>React 18: Non-recoverable hydration mismatch if mismatch occurs in the same boundary as main script</b>
              </div>  
        </div>
       
        
   </IssueWrapper>
  
   <IssueWrapper>
        <div style={{
            paddingLeft:"10px",
            textAlign:"left",
            justifyContent:"left",
            marginTop:"10px",
             float:"left",
            display : "flex",
   flexdirection : "column",}}>
            <div >
                <IssueOpenedSVG color="green" /> </div>
                <div><b>Update Server Components dependencies</b>
              </div>  
        </div>
       
   </IssueWrapper>
  
    </div>
   
   
  </Container>
    )
}

export default IssueContainer



