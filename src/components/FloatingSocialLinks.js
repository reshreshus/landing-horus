import React, { Component } from 'react'
import SocialLinks from './SocialLinks';
let bodyRect = document.documentElement;

const getOffset = el => {
    const rect = el.getBoundingClientRect();    
    return {
    //   left: rect.left + window.scrollX - bodyRect.left,
    //   top: rect.top + window.scrollY- bodyRect.top,
    //   bottom: rect.bottom + window.scrollY- bodyRect.bottom,
    //   right: rect.right + window.scrollY- bodyRect.right
      left: rect.left - bodyRect.left,
      top: rect.top - bodyRect.top,
      bottom: rect.bottom - bodyRect.bottom,
      right: rect.right - bodyRect.right
    };
  }

const getOffset2 =  el => {
    let _x = 0;
    let _y = 0;
    let width = el.offsetWidth;
    let height = el.offsetHeight;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x, right: _x + width, bottom: _y + height};
}

export default class Header extends Component {
    orderPlanets(offetY) {
        // if (matcher.matches) {
            // console.log("Matches!");
            let horus = document.querySelector('#horus');
            // let horus_position = horus.getBoundingClientRect();
            // let horusOffset = getOffset2(horus);
            let horusY = horus.offsetTop + horus.offsetHeight / 2;
            let horusX = horus.offsetLeft + horus.offsetWidth / 2;
            // let horusY = (horusOffset.top + horusOffset.bottom)/2;
            // let horusX = (horusOffset.left + horusOffset.right)/2;
            //fiddle with positioning
            // this offet things are a bitch
            horusY = horusY + offetY;
            // horusY = horusY + 100;

            let planets = document.querySelectorAll('.floating-links .social-link-container');

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
        // } else {
            // console.log("does not match!");
        // }
        
    }

   

    componentDidMount() {
        // let matcher = window.matchMedia("(min-width:565px");
        // this.orderPlanets(matcher, 100);
        this.orderPlanets(100);
        // matcher.addListener(this.orderPlanets)
    }
    render() {    
        return (
            <div className="floating-links">
                   <SocialLinks />
            </div>
        )
    }
}
