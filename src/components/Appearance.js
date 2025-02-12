import React from "react";
import styled, { keyframes } from "styled-components";

const kf = keyframes`
    50%{
        transform: scale(0.8);
    }
    100%{
        transform: scale(1);
        opacity: 1;
    }
`;

const StyledAppear = styled.div`
  p:last-of-type {
    border: none;
  }
`;
const StyledButton = styled.button`
  width: 60%;
  color: greenyellow;
  padding: 3%;
  border-radius: 5%;
  background-color: #7e7863;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const StyledPara = styled.p`
  border-bottom: 2px solid greenyellow;
  padding: 5%;
  transition: all 0.2s ease-in-out;
  transform: scale(1.2);
  opacity: 0;
  animation: ${kf} 0.3s ease-in-out forwards;
`;

export default function Appearance(props) {
  const { eye_color, hair_color, height, skin_color, gender } = props.character;

  return (
    <StyledAppear>
      <StyledButton onClick={props.close}>Less</StyledButton>
      <StyledPara>Gender: {gender} </StyledPara>
      <StyledPara>Hair Color: {hair_color} </StyledPara>
      <StyledPara>Eye Color: {eye_color} </StyledPara>
      <StyledPara>Height: {height} </StyledPara>
      <StyledPara>Skin Color: {skin_color} </StyledPara>
    </StyledAppear>
  );
}
