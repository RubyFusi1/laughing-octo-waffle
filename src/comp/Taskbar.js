import React, { useState, useEffect } from 'react';
import './Taskbar.css';
import StateButton from '../controls/StateButton';


const Taskbar = ({ handleWindow1Open, isWindow1Open, handleWindow2Open, isWindow2Open }) => {
    const [isButtonOn, setButtonOn] = useState(false);
    

    const handleButtonClick = () => {
        setButtonOn(!isButtonOn);
    };

    return (
        <div>
            <div className="taskbar">
                <button 
                    className={`start-button ${isButtonOn ? 'on' : ''}`} 
                    onClick={handleButtonClick}>
                    My Button
                </button>
                <div className="taskbar-rectb1"></div>
                <div className="taskbar-rectb2"></div>

                <StateButton
                    isWindowOpen={isWindow1Open}
                    handleWindowOpen={handleWindow1Open}
                    icon="../icons/internet_connection_wiz-2.png"
                />

               <StateButton
                    isWindowOpen={isWindow2Open}
                    handleWindowOpen={handleWindow2Open}
                    icon="../icons/directory_open_file_mydocs_2k-4.png"
                />


                <div className="taskbar-rectb1"></div>
                <div className="taskbar-rectb2"></div>

                
            </div>
            {isButtonOn && <div className="start-menu">
            <div className="start-graph"></div>

            <div className="start-items" id="sItem1">

                 <StateButton
                    isWindowOpen={isWindow1Open}
                    handleWindowOpen={handleWindow1Open}
                    icon="../icons/internet_connection_wiz-2.png"
                    className="start-menu-button"
                    handleClick={handleButtonClick}
                     />

            </div>

            <div className="start-divide" id="sDivide1"></div>
            <div className="start-items" id="sItem2"></div>
            <div className="start-items" id="sItem3"></div>
            <div className="start-items" id="sItem4"></div>
            <div className="start-items" id="sItem5"></div>
            <div className="start-items" id="sItem6"></div>
            <div className="start-items" id="sItem7"></div>
            <div className="start-items" id="sItem8"></div>
            <div className="start-divide" id="sDivide2"></div>
            <div className="start-items" id="sItem9"></div>
            </div>}
        </div>
    );
}

export default Taskbar;
