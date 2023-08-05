import React from 'react';
import FloatingButton from '../FloatingButton';

const DemoTwo = ({ handleButton1Click, handleButton2Click }) => {
    return (
        <div>
            Content of Window 2
            <FloatingButton 
                image="/icons/cd_drive-0.png" 
                alt="My Image 3" 
                text="My Button 3" 
                style={{ top: '40%', left: '10%' }}
                onClick={handleButton1Click}
            />
            
        </div>
    );
};

export default DemoTwo;
