import React from 'react';
import NavBar from '../nav-bar/NavBar';
function Frame(content) {
    return (
        <div>
            <NavBar/>
            <div>
                {content}
            </div>
        </div>
  );
}

export default Frame;