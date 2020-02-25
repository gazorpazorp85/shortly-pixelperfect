import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import MobileMenu from './MobileMenu';

import logo from '../assets/imgs/logo.png';
import hamburger from '../assets/imgs/icon-hamburger.png';

export default class NavBar extends Component {

    state = {
        toggleMobileMenu: false
    }

    onToggleMobileMenu = (ev) => {
        ev.stopPropagation();
        this.setState(prevState => ({ toggleMobileMenu: !prevState.toggleMobileMenu }))
    }

    render() {
        return (
            <div className="nav-bar">
                <div className="flex main-container nav-bar-subcontainer">
                    <div className="flex logo-menu-container">
                        <div className="logo-container">
                            <img src={logo} />
                        </div>
                        <div className="menu-btn">
                            <img src={hamburger} onClick={this.onToggleMobileMenu} />
                        </div>
                    </div>
                    <CSSTransition
                        in={this.state.toggleMobileMenu}
                        timeout={700}
                        classNames="modal"
                        unmountOnExit>
                        <MobileMenu />
                    </CSSTransition>
                    <div className="full-menu">
                        <div className="flex">
                            <div className="pointer capitalize features-button">features</div>
                            <div className="pointer capitalize pricing-button">pricing</div>
                            <div className="pointer capitalize resources-button">resources</div>
                        </div>
                        <div className="flex">
                            <div className="pointer capitalize login-button">login</div>
                            <div className="flex center align-center pointer btn bar-btn">
                                <span className="capitalize">sign up</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}