import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const Background = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1; 
  opacity: 0.9; 
`;

export const FormContainer = styled.div`
  background: white;
  padding: 5vh 4vw 4vh; 
  border-radius: 1rem; 
//   min-width: 30vw;
  height: auto;
  width: 100%;
  max-width: 30vw;
  max-height: 90vh;
  box-shadow: 0 0.8vw 2.4vw rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;

    @media (max-width: 768px) {
    max-width: 90vw;
    max-height: 90vh;
    margin: 1vh 1vw;
    // padding: 6vh 5vw;
  }

  @media (max-width: 480px) {
    max-width: 90vw;
    max-height: 90vh;
    margin: 1vh 1vw;
    // padding: 8vh 6vw;
    // border-radius: 4vw;
  }
`;

export const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 2vh;
  left: 0;
  right: 0;
  padding: 0 1vw;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2vw; 
  cursor: pointer;
  color: tomato;
  display: flex;
  align-items: center;
  gap: 0.5vw; 
//   &:hover {
//     color: rgb(246, 104, 88);
//     background-color: white;
//     transform: scale(1.5);
//   }

      @media (max-width: 768px) {
      font-size: 3vw;
  }

  @media (max-width: 480px) {
    font-size: 2vw;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2em;
  font-family: 'Playfair Display', serif;
  margin-bottom: 2vh; 
  margin-top: 2vh;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2vh; 
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1.1vw; 

    @media (max-width: 768px) {
      font-size: 2vw;
  }

  @media (max-width: 480px) {
      font-size: 2vw;
  }
`;

export const Input = styled.input`
  padding: 0.6rem;
  font-size: 1rem;
  margin-top: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const Textarea = styled.textarea`
  padding: 0.6rem;
  font-size: 1rem;
  margin-top: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: vertical;
`;

export const Error = styled.span`
  color: red;
  font-size: 0.9rem;
  margin-top: 0.3rem;
`;

export const SubmitButton = styled.button`
  padding: 0.8rem;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  background-color:tomato;
  color: white;
  transition: background-color 0.2s ease;
  cursor: pointer;
  &:hover {
    // background-color: #111;
  background-color: rgb(246, 104, 88);
  transform: scale(1.05);
  color: white;
  font-weight: bold;
  }
`;



