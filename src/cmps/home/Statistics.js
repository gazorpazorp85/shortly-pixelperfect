import React from 'react';

import brandIcon from '../../assets/imgs/brand-icon.png';
import detailedIcon from '../../assets/imgs/detailed-icon.png';
import customIcon from '../../assets/imgs/custom-icon.png';

export default function Statistics() {

    return (
        <div className="flex statistics">
            <div className="main-container">
                <div className="flex statistics-container">
                    <div className="statistics-title">
                        <h2>Advanced Statistics</h2>
                    </div>
                    <div className="statistics-subtitle">
                        Track how your links are performing across the web with our
                        advanced statistics dashboard.
                    </div>
                </div>
                <div className="flex statistics-cards-container">
                    <div className="flex column statistics-card">
                        <div className="flex center align-center card-icon">
                            <img src={brandIcon} />
                        </div>
                        <div className="card-title">
                            Brand Recognition
                        </div>
                        <div className="card-description">
                            Boost your brand recognition with each click.
                            Generic links don’t mean a thing.
                            Branded links help instil confidence in your content.
                        </div>
                    </div>
                    <div className="flex column statistics-card detailed-card">
                        <div className="flex center align-center card-icon detailed-icon">
                            <img src={detailedIcon} />
                        </div>
                        <div className="card-title">
                            Detailed Records
                        </div>
                        <div className="card-description">
                            Gain insights into who is clicking your links.
                            Knowing when and where people engage with your content helps inform better decisions.
                        </div>
                    </div>
                    <div className="flex column statistics-card custom-card">
                        <div className="flex center align-center card-icon custom-icon">
                            <img src={customIcon} />
                        </div>
                        <div className="card-title">
                            Fully Customizable
                        </div>
                        <div className="card-description">
                            Improve brand awareness and content discoverability through customizable links,
                            supercharging audience engagement.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}