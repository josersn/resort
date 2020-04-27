import React from 'react';
import { Link } from "react-router-dom"

import Hero from "../components/Hero";
import Services from "../components/Services";
import Banner from "../components/Banner";

const Home = () => (
  <>
  <Hero>
    <Banner 
    title="Acomodações de Luxo" 
    subtitle="Tenha o Maior Luxo dentro de 4 paredes por 2999" >
      <Link to="/rooms" className="btn-primary" > Nossos quartos </Link>
    </Banner>
  </Hero>
  <Services />
  </>
)

export default Home;
