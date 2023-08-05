import React from 'react';
import './ContextMenu.css'; 

const ContextMenu = ({ x, y }) => {
    return (
        <div className="context-menu" style={{ top: y, left: x }}>
            <p>Menu Item 1</p>
            <p>Menu Item 2</p>
            <p>Menu Item 3</p>
        </div>
    );
};

export default ContextMenu;