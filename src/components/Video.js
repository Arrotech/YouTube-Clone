import React from 'react';
import './assets/css/Video.css';
import Avatar from '@material-ui/core/Avatar';

function Video({ image, title, channel, views, timestamp, channelImage }) {
	return (
		<div className="video">
			<img className="video__thumbnail" src={image} alt="" />
			<div className="video__info">
				<Avatar
					className="video__avatar"
					alt="Harun Gachanja"
					src="https://avatars0.githubusercontent.com/u/42092300?s=460&u=9150dfe9eb4668e1ab5e2c309a98e8ef526037dd&v=4"
				/>
				<div className="video__text">
					<h4>{title}</h4>
					<p>{channel}</p>
					<p>
						{views} . {timestamp}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Video;
