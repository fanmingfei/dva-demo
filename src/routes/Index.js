import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import Frame from '../components/common/frame/Frame';

function Index () {
    return (
        <div>
            <Frame/>
        </div>
    );
}

function mapStateToProps(state) {
    return {};
}
export default connect(mapStateToProps)(Index);