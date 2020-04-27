import React from 'react';
import { Link } from "react-router-dom";

import Banner from "../components/Banner";
import Hero from "../components/Hero";

const Rooms = () => (
  <Hero hero="roomsHero">
    <Banner title="Nossos Quartos">
      <Link  class="btn-primary" to="/">Voltar para o início</Link>
    </Banner>
  </Hero>
)

export default Rooms;
