import React from 'react';

export default function HomeHero() {

    return (
        <div className="hero">
            <div className="main-container">
                <div className="flex hero-container">
                    <div className="hero-title">
                        <h1>More than just shorter links</h1>
                    </div>
                    <div className="flex column hero-text-container">
                        Build your brand’s recognition and get detailed insights on how your
                        links are performing.
                    </div>
                    <div className="flex center align-center pointer capitalize btn get-started">
                        <span className="btn-txt">get started</span>
                    </div>
                </div>
                <div className="flex shorten-link-container">
                    <input type="text" placeholder="Shorten a link here..." />
                    <div className="pointer flex center align-center btn shorten">
                        <span className="capitalize btn-txt shorten-txt">shorten it!</span>
                    </div>
                </div>
            </div>
        </div>
    );
}