import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Encode Sans Expanded', sans-serif;
 } 
 
 html{
  
   --webkit-background-size: cover;
   --moz-background-size: cover;
   --o-background-size: cover;
   background-size: cover;
 }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#7FCE06' : '#01bf71')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #010606;
  
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  
  align-items: center;

  &:hover {
    transition: all 0.3s ease-in-out;
    background: red;
    background-color: ${({ primary }) => (primary ? '#fff' : '#01BF71')};
  }

  @media screen and (max-width: 768px) {
    
    width: 100%;
  }
`;

export default GlobalStyle;
