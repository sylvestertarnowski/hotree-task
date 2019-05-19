import React from 'react';
import '../../css/Tooltip.css';

type P = {
    title?: string;
    message?: string;
}

const Tooltip: React.FC<P> = (props) => {
    const { title, message } = props;

    return (
        <div className="tooltip">
            <div title={title} className="hidden">
                <div className="arrow-left"></div>
                <div className="tooltip-body">
                    {message}
                </div>
            </div>
        </div>
    )
}

export default Tooltip;