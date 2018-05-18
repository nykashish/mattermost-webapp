// Copyright (c) 2017 Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import {connect} from 'react-redux';

import ProfilePopoverUChat from './profile_popover_uchat.jsx';

function mapStateToProps(state, ownProps) {
    const config = state.entities.general.config;

    const enableWebrtc = config.EnableWebrtc === 'true';
    const enableTimezone = config.ExperimentalTimezone === 'true';

    return {
        ...ownProps,
        enableWebrtc,
        enableTimezone,
    };
}

export default connect(mapStateToProps)(ProfilePopoverUChat);