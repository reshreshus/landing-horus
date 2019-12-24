import React, { Component } from 'react'

export default class Header extends Component {
    componentDidMount() {
        let horus = document.querySelector('#horus');
        let horus_position = horus.getBoundingClientRect();
        let horusY = horus.offsetTop + horus.offsetHeight / 2;
        let horusX = horus.offsetLeft + horus.offsetWidth / 2;
        //fiddle with positioning
        horusY = horusY + 100;

        let planets = document.querySelectorAll('.nav-item');

        let rToPlanets = 210;
        let planetsCirc = 2 * Math.PI * rToPlanets;
        let planetsNumber = planets.length;
        let planetsWidth = 65;
        let planetsMargin = (planetsCirc - planetsNumber * planetsWidth) / planetsNumber;
        let distanceBetweenCenters = planetsWidth + planetsMargin;
        let planetArc = 0;
        let planetAngle = 0;
        for (let i = 0; i < planetsNumber; i++) {
            planetArc = i * distanceBetweenCenters;
            planetAngle = planetArc / planetsCirc * 2 * Math.PI;
            let planetX = horusX + rToPlanets * Math.sin(planetAngle);
            let planetY = horusY - rToPlanets * Math.cos(planetAngle);
            
            planets[i].style.position = "absolute";
            planets[i].style.zIndex = "1";
            planets[i].style.left = (planetX - planetsWidth / 2).toString() + "px";
            planets[i].style.top = (planetY - planetsWidth / 2).toString() + "px";
    }
}
    render() {    
        return (
            <div className="header-horus">
                <div className="nav-item">
                    <a href='https://t.me/reshreshus' className="nav-link">
                    <i className="fab fa-telegram fa-4x" />
                    </a> 
                </div>
                <div className="nav-item">
                    <a href='mailto:merumeru.ceo@yandex.ru' className="nav-link">
                        <i className="far fa-envelope fa-4x" />
                    </a> 
                </div>
                <div className="nav-item">
                    <a href='https://vk.com/reshreshus' className="nav-link">
                        <i className="fab fa-vk fa-4x" />
                    </a> 
                </div>
                <div className="nav-item">
                    <a href='#projects' className="nav-link">
                        <div className="d-flex align-items-center">
                            <i className="fas fa-project-diagram fa-4x" />
                            <h3>Projects</h3>
                        </div>
                    </a> 
                </div>
                <div className="nav-item">
                    <a href='https://twitter.com/reshreshus2' className="nav-link">
                    <i className="fab fa-twitter fa-4x" />
                    </a> 
                </div>
                <div className="nav-item">
                    <a href='https://github.com/reshreshus' className="nav-link">
                        <i className="fab fa-github fa-4x" />
                    </a> 
                </div>
                
                <div className="nav-item">
                    <a href='https://merume.ru' className="nav-link">
                        <h3>Blog</h3>
                        <i className="fas fa-bus fa-4x" />
                    </a> 
                </div>
            </div>
        )
    }
}
