import styled from 'styled-components';
export const ServicesContainer= styled.div `
height: 800px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
/* background: #010606; */
background: #E5E5E5;
padding: 10px;
border-top: 4px solid #7FCE06;
border-bottom: 4px solid #7FCE06;

@media screen and (max-width: 768px) {
    height: 1000px;
}
@media screen and (max-width: 1000px) {
    height: 1000px;
}
@media screen and (max-width: 480px) {
    height: 1000px;
}
`;
export const ServiceWrapper = styled.div `
max-width: 1000px;
height: 400px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr  1fr 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;

@media screen and (max-width: 1000px){
    grid-template-columns: auto auto;
    
}

@media screen and (max-width: 768px){
     grid-template-columns: auto auto auto auto ;
     
    
}
@media screen and (max-width: 480px){
     grid-template-columns: auto auto  ;
     height:1400px;
     
    
}
`;

export const ServicesCard = styled.div `
background: #545A77;
display: flex;
flex-direction: column;
  justify-content: flex-start; 
align-items: center; 
align-contents: center;
border-radius:50px;
height: 120px;
width: 120px;
padding: 20px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;

&:hover {
    transform: scale(1.02);
    background-color: #b8113a;
    transition:all 0.2s ease-in-out;
    cursor: pointer;
}
`;

export const ServicesIcon = styled.img `
height:80px;
width: 80px;
margin-bottom: 1px;
`;
export const ServicesH1 = styled.h1 `
font-size= 2.5rem;
color: #7FCE06;
margin-bottom: 64px;
@media screen and (max-width: 480px) {
    font-size:2rem;
}
`;

export const ServicesH2 = styled.h2 `
font-size: 1rem;
margin-top:40px;
text-align: center;

`;
export const ServicesP = styled.p `
font-size: 1rem;
text-align: center;
`;