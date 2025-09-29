import styled from "styled-components";

export const ReservationsPageWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

export const BackgroundWrapper = styled.div`
    background: url();
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    overflow-x: hidden;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const Button = styled.button`
    padding: 1vh 0.7vw; 
    margin: 0.8vh 0.2vw; 
    border: none;
    border-radius: 0.3vw; 
    cursor: pointer;
    background-color: #e0e0e0; 
    color: white;
    transition: background-color 0.3s; 
    font-size: 1.2vw;
    font-size: clamp(12px, 1.2vw, 16px);
    max-width: 100%;
    white-space: nowrap;
     &:hover {
        background-color: #d0d0d0;
    }
`;


export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;


export const ModalContent = styled.div`
    background: white;
    padding: 4vh 4vw; 
    border-radius: 0.6vw; 
    max-width: 30vw; 
    text-align: center;
`;


export const TopBar = styled.div`
    position: fixed;
    top: 2vh;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    z-index: 999;
`; 


export const NavButton = styled.button`
    padding: 1vh 0.7vw; 
    margin: 0.8vh 0.2vw; 
    border: none;
    border-radius: 0.3vw; 
    cursor: pointer;
    background-color: #e0e0e0; 
    color: white;
    transition: background-color 0.3s; 
    font-size: 1.2vw;
    font-size: clamp(12px, 1.2vw, 16px);
    max-width: 100%;
    white-space: nowrap;
     &:hover {
        background-color: #d0d0d0;
    }
    background: none;
    border: none;
    font-size: 1.8vw;
    cursor: pointer;
    padding: 1vh 1vw; 
    padding-top: 1.5vh;
    border-radius: 30%;
    margin: 0 3vw;
    background-color:white;
    color: black;
    transition: color 1.5s;
    &:hover {
       color: #000;
    }
  @media (max-width: 768px) {
        padding: 1.5vh 2vw;
        font-size: 3vw;
  }
  
  @media (max-width: 480px) {
        padding: 2vh 2.5vw;
        font-size: 3vw;
    }
`;

  

  
