import styled from "styled-components";

export const HomePage = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
`;

export const BgImage = styled.img`
  
  position: absolute;
  top: 0;
  right: 0;
  width: 60vw;
  height: auto;
  max-width: 700px;
  height: auto;
  z-index: 0;
  object-fit: contain;
  pointer-events: none;
  user-select: none;

  @media (max-width: 768px), (max-width: 480px) {
    bottom: 0;
    top: unset;
    height: 100vh;
    width: 60vw;
    object-fit: cover;
    object-position: left;
  }
`;

export const CornerImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 20%;
  transform: rotate(-25deg);
  z-index: 0;

  @media (max-width: 768px) {
    width: 35%;
    transform: rotate(-15deg);
  }
`;

export const WelcomeContainer = styled.div`
  max-width: 90%;
  width: 35vw;
  margin-top: 15vh;
  margin-left: 7vw;
  padding: 4vh 5vw;
  border-radius: 2vw;
  z-index: 1;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-right: 5vw;
    padding: 3vh 10vw;
    width: 40vw;
  }

  @media (max-width: 480px) {
    margin-top: 10vh;
    padding: 2vh 10vw;
    width: 40vw;
    position: relative;
    z-index: 2;
  }
`;

export const Title = styled.h1`
  color: black;
  font-size: 4vw;
  font-weight: bold;
  font-family: 'Playfair Display', serif;

  @media (max-width: 768px) {
    font-size: 6vw;
  }

  @media (max-width: 480px) {
    font-size: 8vw;
  }
`;

export const Button = styled.button`
  padding: 3vh 4vw;
  font-size: 1.5vw;
  margin: 1vw 0 1vw 0;
  background-color: tomato;
  color: white;
  border: none;
  border-radius: 1.5vw;
  cursor: pointer;
  box-shadow: 0 0.8vh 1.5vh rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, background-color 0.3s ease;
  font-weight: bold;

  &:hover {
    background-color: rgb(246, 104, 88);
    transform: scale(1.05);
  }

  @media (max-width: 768px), (max-width: 480px) {
    font-size: 1rem;
    white-space: nowrap;
  }
`;
