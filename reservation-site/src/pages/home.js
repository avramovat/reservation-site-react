
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import bgImage from "../assets/pngegg2.png";
import cornerImage from "../assets/pngegg (1).png"; 
import { HomePage,  BgImage, CornerImage, WelcomeContainer, Title, Button, } from '../styles/components/Home';

const Home = () => {

  const navigate = useNavigate();

  const startNewReservation = () => {
    localStorage.removeItem("reservationToEdit");
    navigate("/form");
  };

  return (
    <HomePage>
      <BgImage src={bgImage} alt="background" />
      <CornerImage src={cornerImage} alt="Food corner" />
      <WelcomeContainer>
        <Title>Enjoy a wonderful Dining Experience</Title>
        <p>
          Experience luxury and flavor in every bite. Reserve your table now and
          enjoy a remarkable meal with us.
        </p>
        <Button onClick={startNewReservation}>Make a reservation</Button>
      </WelcomeContainer>
    </HomePage>
  );
};

export default Home;
