import React from 'react';
import { Link } from "react-router-dom";

import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Container from "../components/RoomsContainer";
const Rooms = () => (
  <>
  <Hero hero="roomsHero">
    <Banner title="Nossos Quartos">
      <Link  className="btn-primary" to="/">Voltar para o início</Link>
    </Banner>
  </Hero>
  <Container />
  </>
)

export default Rooms;
