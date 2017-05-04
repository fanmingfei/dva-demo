import { NavBar, Icon } from 'antd-mobile';
import React from 'react';

function NavBar() {
    return (
        <NavBar mode="light" onLeftClick={() => console.log('onLeftClick')}>
            title
        </NavBar>
  );
}

export default NavBar;