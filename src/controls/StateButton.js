import React, { useState, useEffect } from 'react';

const StateButton = ({ isWindowOpen, handleWindowOpen, icon, className, handleClick   }) => {
    const [buttonState, setButtonState] = useState('off');

    useEffect(() => {
        if (isWindowOpen) {
            setButtonState('on');
        } else {
            setButtonState('off');
        }
    }, [isWindowOpen]);

    const handleStateButtonClick = () => {
        handleWindowOpen();

        if (buttonState === 'off') {
            setButtonState('on');
        } else if (buttonState === 'on') {
            setButtonState('standby');
        } else if (buttonState === 'standby') {
            setButtonState('on');
        }

        // If handleClick prop exists, call it
        if (handleClick) handleClick();
    };

    return (
        <button 
            className={`state-button ${buttonState} ${className}`} 
            onClick={handleStateButtonClick}>
            <img src={icon} alt="State" height="30px"/>
        </button>
    );
};

export default StateButton;
