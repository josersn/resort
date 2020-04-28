import React from 'react';

import { withRoomConsumer } from "../context";
import Loading from "./Loading";
import Title from "./Title";  
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";


function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />
  }
  return (
    <>
     <Title title="Pesquisar Quarto"/>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  )
}

export default withRoomConsumer(RoomContainer);

// import React from 'react';
// import { RoomConsumer } from "../context";
// import Loading from "./Loading";
// import Title from "./Title";  
// import RoomFilter from "./RoomFilter";
// import RoomList from "./RoomList";

// export default function components() {
//   return (
//     <RoomConsumer>
//       {
//         (value) => {

//           const { loading, sortedRooms, rooms} = value;
//           if(loading){
//             return <Loading />
//           }
//           return (
//             <div>
//             <h1>
//             Hello from Roomms container
//             </h1>
//             <RoomFilter rooms={ rooms } />
//             <RoomList  rooms={ sortedRooms } />
//             </div>
//           )
//         }
//       }
//     </RoomConsumer>
//     );
// }
