import React from 'react';
import RoomFilter from "./RoomsFilter";
import RoomList from "./RoomList";

export default function components() {
  return (
      <div>
        <h1>
        Hello from Roomms container
        </h1>
        <RoomFilter />
        <RoomList />
        </div>
    );
}
