import styled from 'styled-components';

const FooterMenu = styled.div` 
      display: flex;
      flex-direction: row;
      width: 88%;
      margin: 0 auto;
      padding-top : 10px;
     
      
      @media (max-width: 600px) {
          flex-direction : column
          padding : 0px;
      }
`;

export default FooterMenu;
