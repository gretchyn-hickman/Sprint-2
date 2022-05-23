import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Appearance from "./Appearance";

const StyledCreate = styled.div`
  width: 50%;
  margin: 3% auto;
  border-radius: 10px;
  background-color: #6245196a;
  padding: 0.5%;
  p:first-of-type {
    padding: 2%;
  }
`;

const StyledName = styled.h2`
  padding: 1rem;
  width: 70%;
  margin: 2% auto;
  background-color: #49494971;
  color: greenyellow;
`;

const StyledAdditional = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const StyledShowMore = styled.div`
  width: 40%;
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

export default function Character(props) {
  const { name, gender} = props.character;
  const [appear, setAppear] = useState(false);

  const close = () => {
    setAppear(false);
  };

  return (
    <StyledCreate>
      <StyledName>{name}</StyledName>
      <StyledAdditional>
        <StyledShowMore>
          {!appear && (
            <StyledButton onClick={() => setAppear(true)}>More</StyledButton>
          )}
          {appear && <Appearance character={props.character} close={close} />}
        </StyledShowMore>
      </StyledAdditional>
    </StyledCreate>
  );
}
