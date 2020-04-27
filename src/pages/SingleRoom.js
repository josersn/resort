import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { RoomContext } from "../context";

import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
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
    return(
      <Hero hero="roomsHero">
        <Banner title={`Quarto ${name}`}>
          <Link to="/rooms" className="btn-primary">
            Volta para os quartos
          </Link>
        </Banner>
      </Hero>
      )
  }
}
