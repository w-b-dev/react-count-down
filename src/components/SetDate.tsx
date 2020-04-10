import React from 'react';
import './SetDate.css';

interface SetDateProps {
    targetDate: string
}

const SetDate = ({targetDate}: SetDateProps) => (
    <footer className="setDate" title="countdown input section">
        <span>{targetDate}</span>
    </footer>
);

export default SetDate;
