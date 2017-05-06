import React from 'react';
import { connect } from 'dva';

function Index () {
    return (
        <div>
        123
        </div>
    );
}

function mapStateToProps(state) {
    return {};
}
export default connect(mapStateToProps)(Index);