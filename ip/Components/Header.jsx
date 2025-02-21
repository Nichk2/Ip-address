import styled from "styled-components";
import BackgroundImg from '../Images/pattern-bg-desktop.png';

export const Header = styled.header`
   margin: 0;
   padding: 0;
   display: column;
   height: 250px;
   justify-content: center;
   align-items: center;
   text-align: center;
   background-image: url(${BackgroundImg});
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;

   div {
      margin-bottom: 20px;
      position: relative;
   }

   h1 {
      padding: 30px;
      color: white;
   }

   @media (max-width: 768px) {
      height: 300px;
   }
`;

export const InputCoord = styled.input`
width: 450px;
height: 40px;
border: none;
border-radius: 10px;
background-color: white;
padding: 5px;
position: relative;

&::placeholder {
   padding-left: 5px;
}
`;

export const InputButton = styled.button`
width: 50px;
height: 40px;
text-align: center;
border: none;
border-radius: 0 10px 10px 0;
background-color: black;
color: white;
padding: 5px;
cursor: pointer;
position: absolute;
margin-left: -50px;
display: inline-block;

img {
display: inline-block;
color: white;
}
`

export default Header;