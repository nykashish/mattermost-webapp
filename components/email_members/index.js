// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getCurrentChannel} from 'mattermost-redux/selectors/entities/channels';
import {getChannelMembersEmails} from 'mattermost-redux/actions/channels';
import {getConfig} from 'mattermost-redux/selectors/entities/general';

import EmailMembers from './email_members.jsx';
import {getCurrentUser} from "mattermost-redux/selectors/entities/users";

function mapStateToProps(state) {
    const channel = getCurrentChannel(state);
    return {
        channelId: channel ? channel.id : '',
        config: getConfig(state),
        currentUserEmail: getCurrentUser(state).email,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            getChannelMembersEmails,
        }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailMembers);
