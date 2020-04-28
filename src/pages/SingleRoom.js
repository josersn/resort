import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { RoomContext } from "../context";
import { StyledHero } from "../components/StyledHero";

import defaultBcg from "../images/room-1.jpeg";
import Banner from "../components/Banner"

export default class SingleRoom extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg
    };
  }
    static contextType = RoomContext;

    componentDidMount(){
      
    }

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if(!room){
      return <div className="error"> <h3> Nem um quarto foi encontrado. </h3> 
        <Link to="/" className="btn-primary">Voltar ao Inicio</Link>
      </div>
    }
    const { name, description, capacity, size, price, extras, breakfast, pets, images} = room;  
    const [ mainImg, ...defaultImg ] = images;  
    return(
      <>
      <StyledHero img={mainImg || this.state.defaultBcg}>
        <Banner title={`Quarto ${name}`}>
          <Link to="/rooms" className="btn-primary">
            Volta para os quartos
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
        { defaultImg.map((image, index) => (
          <img src={ image} alt={ name } key={ index }/>
        ) )}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3> Detalhes:</h3>
            <p>{ description }</p>
          </article>
          <article className="info">
            <h3>Informações</h3>
            <h6>Preço: R$ { price } </h6>
            <h6>Tamanho:{ (size/10)*0.9 } M²</h6>
            <h6>Capacidade Máxima: { capacity > 1 ? `${ capacity } Pessoa` : `${ capacity } Pessoas`} </h6>
            <h6>Animais: {pets ? "Pets Permitidos." : "Não Aceitos." } </h6>
            <h6>{ breakfast && "Café da Manha Incluso" }</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>Mais Informações</h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={ index }>{item}</li> 
            ))}
          </ul>
      </section>
      </>
      )
  }
}
