import React from 'react';
import { Resizable } from 're-resizable';
import Draggable from 'react-draggable';
import './baseWindow.css';

const Window = ({ id, onClose, children, frontWindow, setFront, resizable, size  }) => {
  return (
    <Draggable>
      {resizable ? (
        <Resizable
          className={`window ${frontWindow === id ? 'front' : ''}`}
          defaultSize={size || { width: 320, height: 240 }}
          minWidth={200}
          minHeight={150}
          onClick={() => setFront(id)}
          enable={{ top:false, right:true, bottom:true, left:false, topRight:false, bottomRight:true, bottomLeft:false, topLeft:false }}
        >
          <div className="inner-rectangle">
            <div className="window-title">hi</div>
          <button className="closeButton" onClick={(event) => { event.stopPropagation(); onClose(); }}>X</button>
          </div>
          {children}
          
        </Resizable>
      ) : (
        <div className={`window ${frontWindow === id ? 'front' : ''}`}style={size || { width: '320px', height: '240px' }} onClick={() => setFront(id)}>
          <div className="inner-rectangle">
          <button className="closeButton" onClick={(event) => { event.stopPropagation(); onClose(); }}>X</button>
          </div>
          {children}
          
        </div>
      )}
    </Draggable>
  );
};

export default Window;
