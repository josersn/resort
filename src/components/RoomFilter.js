import React from 'react';

import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";

const getUnique = (items, value) => {
 return [...new Set(items.map(item => item[value]))]
}

export default function RoomFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    // eslint-disable-next-line
    handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets
  } = context;
  // get all types just once time
  let types = getUnique(rooms, "type");
  types = ["todos", ...types];

  // map of types to jsx 
  types = types.map((item, index) => (
    <option value={ item } key={ index }>{ item }</option>
  ))
  // get capacitys 
  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  return (
    <section className="filter-container">
      <Title title="Pesquisar Quarto" />
      <form  className="filter-form">

        {/* select type  */}
        <div className="form-group">
          <label htmlFor="type">Tipo de Quarto</label>
          <select name="type" id="type" value={ type } className="form-control" onChange={handleChange}>
            { types }
          </select>
        </div>
        {/* end select type  */}

        {/* guests  */}
        <div className="form-group">
          <label htmlFor="capacity">Hóspedes</label>
          <select
            name="capacity"
            id="capacity"
            onChange={handleChange}
            className="form-control"
            value={capacity}
          >
            {people}
          </select>
        </div>
        {/* end of guests */}

        {/* room price */}
          <div className="form-group">
            <label htmlFor="price">
              Preço ${ price }
            </label>
            <input type="range" name="price" min={ minPrice } max={ maxPrice }  id="price" value={ price } onChange={ handleChange } className="form-control"/>
          </div>
        {/* end of room price  */}

        {/* size  */}
        <div className="form-group">
          <label htmlFor="size">Tamanho</label>
          <div className="size-inputs">
            <input type="number" name="minSize" id="size" value={ minSize } onChange={ handleChange } className="size-input" />
            
            <input type="number" name="maxSize" id="size" value={ maxSize } onChange={ handleChange } className="size-input" />
          </div>
        </div>
        {/* end of size  */}

        {/* extras  */}
          <div className="form-group">
            
            <div className="single-extra">
              <input type="checkbox" name="breakfast" id="breakfast" checked={ breakfast } onChange={ handleChange } />
              <label htmlFor="breakfast">Café da Manha</label>
            </div>
            
            <div className="single-extra">
              <input type="checkbox" name="pets" id="pets" checked={ pets } onChange={ handleChange } />
              <label htmlFor="pets">Animais</label>
            </div>

          </div>
        {/* end of extras  */}
      </form>
      {/* <div>Hello from RoomFilter</div> */}
    </section>
  );
}
