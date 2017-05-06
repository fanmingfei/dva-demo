import { NavBar, Icon } from 'antd-mobile';
import React from 'react';

const NBar = () => {
    return (
        <NavBar mode="light" onLeftClick={() => console.log('onLeftClick')}>
            title
        </NavBar>
  );
}

export default NBar;