import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
 border-radius: 50px;
  /* background: ${({ primary }) => (primary ? '#01BF71' : '#01BF71')}; */
  background: ${({ primary }) => (primary ? '#7FCE06' : '#7FCE06')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark})=> (dark ? '#01606' : '#fff')};
  
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.3s ease-in-out;
    
    background-color: ${({ primary }) => (primary ? '#fff' : '#000')};
  }

  @media screen and (max-width: 768px) {
    
    width: 100%;
  }
`;