import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
    state = {
        services:[
            {
                icon: <FaCocktail />,
                title: "Bebida à vontade",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, itaque!"
            },
            {
                icon: <FaHiking />,
                title: "Tenha aventuras paradisiacas",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, itaque!"
            },
            {
                icon: <FaShuttleVan />,
                title: "Tenho todo o translato por nossa conta",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, itaque!"
            },
            {
                icon: <FaBeer />,
                title: "Bebida à vontade eu já disse ? :D",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, itaque!"
            }
        ]
    }
    render(){
        return (
        <section className="services">
            <Title title="Serviços" />
            <div className="services-center">
                { this.state.services.map((item, index) => (
                    <article key={ index } className="service">
                        <span>{ item.icon } </span>
                        <h6>{ item.title }</h6>
                        <p>{ item.info } </p>
                    </article>
                )) }
            </div>
        </section>
        )
    }
}