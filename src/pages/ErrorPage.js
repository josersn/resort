import React from 'react';
import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import Banner from "../components/Banner";

const ErroPage = () => (
  <Hero>
    <Banner title="404" subtitle="Página não encontrada">
      <Link  class="btn-primary" to="/">Voltar para o início</Link>
    </Banner>
  </Hero>
)

export default ErroPage;
