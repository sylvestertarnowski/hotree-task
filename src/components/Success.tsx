import React from 'react';
import '../css/Success.css';

const Success: React.FC = () => {
    return (
        <div className="success-wrapper">
            <div className="main-width-wrapper">
                <div className="success">
                    <div className="success-title">Success</div>
                    <div className="success-message">Event has been created.</div>
                </div>
            </div>
        </div>
    )
}

export default Success;