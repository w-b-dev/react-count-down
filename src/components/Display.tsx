import React from 'react';
import './Display.css';

interface DisplayProps {
    targetDate: string
}

const Display = ({targetDate}: DisplayProps) => (
    <section className="display" title="countdown display">
        <span>{targetDate}</span>
    </section>
);

export default Display;
