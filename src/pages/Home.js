import React, { Component } from 'react';

import NavBar from '../cmps/NavBar';
import HomeHero from '../cmps/home/HomeHero';
import Statistics from '../cmps/home/Statistics';
import CallToAction from '../cmps/CallToAction';
import Footer from '../cmps/Footer';

export default class Home extends Component {

    render() {
        return (
            <React.Fragment>
                    <NavBar />
                    <HomeHero />
                    <Statistics />
                    <CallToAction />
                    <Footer />
            </React.Fragment>
        );
    }
}