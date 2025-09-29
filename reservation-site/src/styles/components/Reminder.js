import styled from 'styled-components';

export const ReminderContainer = styled.div`
  position: fixed;
  bottom: 1.5vh;
  right: 1.5vh;
  background: #fff3cd;
  border-left: 4px solid tomato;
  padding: 1vw;
  padding-top: 1.5vh;
  padding-bottom: 0.5vh;
  padding-left: 2vw;
  border-radius: 0.75rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  max-width: 300px;
  width: 90%;
  height: 50vh;
  z-index: 999;
  font-size: 1rem;

  @media (max-width: 768px) {
    max-width: 50%;
    height: 50vh;
  }

  @media (max-width: 480px) {
    max-width: 50%;
    height: 50vh;
  }
`;

export const DismissButton = styled.button`
  padding: 1vh 0.7vw;
  margin: 0.8vh 0.2vw;
  border: none;
  border-radius: 0.3vw;
  cursor: pointer;
  background-color: tomato;
  color: white;
  font-size: clamp(12px, 1.2vw, 16px);
  max-width: 100%;
  white-space: nowrap;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: rgb(246, 104, 88);
    transform: scale(1.05);
  }
`;
