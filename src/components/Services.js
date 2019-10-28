import React from "react"
import Title from "./Title";
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";

class Services extends React.Component{
    state = {
        services:[
            {
                icon: <FaCocktail/>,
                title: "free cocktails",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque!"
            },
            {
                icon: <FaHiking/>,
                title: "Endless Hiking",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque!"
            },
            {
                icon: <FaShuttleVan/>,
                title: "Free Shuttle",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque!"
            },
            {
                icon: <FaBeer/>,
                title: "Strongest beer",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque!"
            }
        ]
    }
    render() {
        return(
            <section className="services">
                    <Title title="services" />
                    <div className="services-center">
                        {this.state.services.map((item,index)=>{
                            return <article key={index}  className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>}


                        )}
                    </div>
            </section>
        )
    }
}
export default Services;