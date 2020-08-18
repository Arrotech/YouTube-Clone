import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './assets/css/ChannelRow.css';
import VerifiedIcon from '@material-ui/icons/CheckCircleRounded';

function ChannelRow({ image, channel, verified, subscriptions, noOfVideos, description }) {
	return (
		<div className="channelRow">
			<Avatar className="channelRow__avatar" src={image} alt={channel} />
			<div className="channelRow__text">
				<h4>
					{channel} {verified && <VerifiedIcon />}
				</h4>
				<p>
					{subscriptions} subscribers . {noOfVideos} videos
				</p>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default ChannelRow;
