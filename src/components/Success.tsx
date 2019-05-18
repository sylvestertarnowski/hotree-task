import React from 'react';
import '../css/Success.css';

const Success: React.FC = () => {
    return (
        <div className="success">
            <div className="success-title">Success</div>
            <div className="success-message">Event has been created.</div>
        </div>
    )
}

export default Success;