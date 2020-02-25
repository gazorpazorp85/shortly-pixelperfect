import React from 'react';

import footerLogo from '../assets/imgs/footer-logo.png';
import iconFacebook from '../assets/imgs/icon-facebook.svg';
import iconTwitter from '../assets/imgs/icon-twitter.svg';
import iconPinterest from '../assets/imgs/icon-pinterest.svg';
import iconInstagram from '../assets/imgs/icon-instagram.svg';

export default function Footer() {

    return (
        <div className="footer">
            <div className="main-container">
                <div className="flex footer-subcontainer">
                    <div className="footer-logo-container">
                        <img src={footerLogo} />
                    </div>
                    <div className="footer-sub-menu features">
                        <div className="capitalize footer-sub-menu-title">
                            features
                        </div>
                        <div className="pointer capitalize footer-sub-menu-category">
                            link shortening
                        </div>
                        <div className="pointer capitalize footer-sub-menu-category">
                            branded links
                        </div>
                        <div className="pointer capitalize footer-sub-menu-category">
                            analytics
                        </div>
                    </div>
                    <div className="footer-sub-menu resources">
                        <div className="capitalize footer-sub-menu-title">
                            resources
                        </div>
                        <div className="pointer capitalize footer-sub-menu-category">
                            blog
                        </div>
                        <div className="pointer capitalize footer-sub-menu-category">
                            developers
                        </div>
                        <div className="pointer capitalize footer-sub-menu-category">
                            support
                        </div>
                    </div>
                    <div className="footer-sub-menu company">
                        <div className="capitalize footer-sub-menu-title">
                            company
                        </div>
                        <div className="pointer capitalize footer-sub-menu-category">
                            about
                        </div>
                        <div className="pointer capitalize footer-sub-menu-category">
                            our team
                        </div>
                        <div className="pointer capitalize footer-sub-menu-category">
                            careers
                        </div>
                        <div className="pointer capitalize footer-sub-menu-category">
                            contact
                        </div>
                    </div>
                    <div className="flex social-container">
                        <div className="pointer icon-container">
                            <img src={iconFacebook} />
                        </div>
                        <div className="pointer icon-container twitter">
                            <img src={iconTwitter} />
                        </div>
                        <div className="pointer icon-container">
                            <img src={iconPinterest} />
                        </div>
                        <div className="pointer icon-container">
                            <img src={iconInstagram} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}