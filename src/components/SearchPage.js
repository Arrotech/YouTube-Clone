import React from 'react';
import './assets/css/SearchPage.css';
import ChannelRow from './ChannelRow';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';

function SearchPage() {
	return (
		<div className="searchPage">
			<div className="searchPage__filter">
				<TuneOutlinedIcon />
				<h2>FILTER</h2>
			</div>
			<hr />
			<ChannelRow
				image="https://avatars0.githubusercontent.com/u/42092300?s=460&u=9150dfe9eb4668e1ab5e2c309a98e8ef526037dd&v=4"
				channel="Harun Gachanja"
				verified
				subscriptions="254k"
				noOfVideos={27}
				description="You are entitled to success once you join Arrotech course"
            />
            <hr/>
		</div>
	);
}

export default SearchPage;
