import React, { useState, useEffect } from 'react';
import './App.css';
import Taskbar from './comp/Taskbar';
import Window from './comp/baseWindow';
import DemoOne from './comp/windows/demo1';
import DemoTwo from './comp/windows/demo2';
import DisplayProperties from './comp/windows/displayProp';
import FloatingButton from './comp/FloatingButton';
import './comp/baseWindow.css';
import ContextMenu from './comp/ContextMenu'; 





const App = () => {
  const [isWindow1Open, setWindow1Open] = useState(false);
  const [isWindow2Open, setWindow2Open] = useState(false);
  const [isDisplayPropertiesOpen, setDisplayPropertiesOpen] = useState(false);
  const [frontWindow, setFrontWindow] = useState(null);
  const [contextMenu, setContextMenu] = useState({ visible: false, x: 0, y: 0 });  // state for the context menu

//   useEffect(() => {
//     const handleContextMenu = (event) => {
//       event.preventDefault();
//     };
  
//     const handleMouseUp = (event) => {
//       if (event.button === 2 && event.detail === 2) {
//         document.removeEventListener('contextmenu', handleContextMenu);
//       } else {
//         document.addEventListener('contextmenu', handleContextMenu);
//       }
//     };
  
//     document.addEventListener('contextmenu', handleContextMenu);
//     document.addEventListener('mouseup', handleMouseUp);
  
//     return () => {
//       document.removeEventListener('contextmenu', handleContextMenu);
//       document.removeEventListener('mouseup', handleMouseUp);
//     };
//   }, []);

  const handleButton1Click = () => {
      setWindow1Open(true);
      setFrontWindow(1);
  };

  const handleButton2Click = () => {
      setWindow2Open(!isWindow2Open);
      setFrontWindow(2);
  };

  const handleDisPropClick = () => {
    setDisplayPropertiesOpen(!isDisplayPropertiesOpen);
    setFrontWindow(3);
};

  const handleWindow1Close = () => {
      setWindow1Open(false);
  };

  const handleWindow2Close = () => {
      setWindow2Open(false);
  };

  const handleDisPropClose = () => {
    setDisplayPropertiesOpen(false);
};

  const handleContextMenu = (event) => {  // handle right click
    event.preventDefault();
    
    setContextMenu({
      visible: true,
      x: event.clientX,
      y: event.clientY
    });
  };

  const handleClick = () => {  // handle left click
    setContextMenu({ visible: false, x: 0, y: 0 });
   };

//   useEffect(() => {  // add event listeners when the component mounts
//     document.addEventListener('click', handleClick);
//     document.addEventListener('contextmenu', handleContextMenu);
    
//     return () => {  // remove event listeners when the component unmounts
//       document.removeEventListener('click', handleClick);
//       document.removeEventListener('contextmenu', handleContextMenu);
//     };
//   }, []);

  return (
      <div className="desktop">

        {contextMenu.visible && <ContextMenu x={contextMenu.x} y={contextMenu.y} />}  {/* render the ContextMenu if it's visible */}

          {isWindow1Open && <Window id={1} onClose={handleWindow1Close} frontWindow={frontWindow} setFront={setFrontWindow} resizable={false} size={{ width: 500, height: 500 }}><DemoOne /></Window>}

          {isWindow2Open && (<Window id={2} onClose={handleWindow2Close} frontWindow={frontWindow} setFront={setFrontWindow} resizable={true} size={{ width: 320, height: 400 }} ><DemoTwo />
                        {/* <FloatingButton 
                        image="/icons/cd_drive-0.png" 
                        alt="My Image 3" 
                        text="My Button 3" 
                        style={{ top: '10%', left: '10%' }}
                        onClick={handleButton1Click}
                    />
                    <FloatingButton 
                        image="/icons/briefcase-4.png" 
                        alt="My Image 4" 
                        text="My Button 4" 
                        style={{ top: '30%', left: '10%' }}
                        onClick={handleButton2Click}
                    /> */}
                    </Window>)}
          
          {isDisplayPropertiesOpen && <Window id={3} onClose={handleDisPropClose} frontWindow={frontWindow} setFront={setFrontWindow} resizable={false} size={{ width: 404, height: 448 }}><DisplayProperties /></Window>}

          <FloatingButton 
              image="/icons/internet_connection_wiz-2.png" 
              alt="My Image 1" 
              text="My Button 1" 
              style={{ top: '8%', left: '4%' }}
              onClick={handleButton1Click}
          />

          <FloatingButton 
              image="/icons/directory_open_file_mydocs_2k-4.png" 
              alt="My Image 2" 
              text="My Button 2" 
              style={{ top: '20%', left: '4%' }}
              onClick={handleButton2Click}
          />

          <FloatingButton 
              image="/icons/directory_open_file_mydocs_2k-4.png" 
              alt="My Image 2" 
              text="My Button 3" 
              style={{ top: '38%', left: '4%' }}
              onClick={handleDisPropClick}
          />

         <Taskbar 
    isWindow1Open={isWindow1Open} 
    handleWindow1Open={handleButton1Click}
    isWindow2Open={isWindow2Open} 
    handleWindow2Open={handleButton2Click}
/>
      </div>
  );
};

export default App;



