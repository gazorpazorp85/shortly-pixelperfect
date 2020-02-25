import React from 'react';

export default function mobileMenu() {

    return (
        <div className="flex column mobile-menu">
            <div className="pointer capitalize mobile-menu-button">features</div>
            <div className="pointer capitalize mobile-menu-button">pricing</div>
            <div className="pointer capitalize mobile-menu-button">resources</div>
            <div className="pointer capitalize mobile-menu-button">login</div>
            <div className="flex center align-center pointer btn mobile-menu-btn">
                <span className="capitalize btn-txt mobile-menu-btn-txt">sign up</span>
            </div>
        </div>
    )
}