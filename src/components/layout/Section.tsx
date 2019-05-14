import React from 'react';
import '../../css/Section.css';

type SectionProps = {
    title: string;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
    return (
        <div className="section">
            <div className="section-title">{title}</div>
            <div className="section-item">{children}</div>
        </div>
    )
}

export default Section;