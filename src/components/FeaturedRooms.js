import React, { Component } from "react";
import { RoomContext } from "../context";

export default class FeaturedRooms extends Component{
    static contextType = RoomContext;

    render(){
        return(
            <h2>Hello World</h2>
        )
    }
}