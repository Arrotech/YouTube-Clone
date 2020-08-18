import React from 'react';
import './assets/css/SearchPage.css';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
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
				subscriptions="289k"
				noOfVideos={27}
				description="You are entitled to success once you join Arrotech course"
			/>
			<hr />

			<VideoRow
				views="1.4M"
				subs="289K"
				description="The master class of front-end with ReactJs. Grab yourself a free course on how to be a legend in React"
				timestamp="2 days ago"
				channel="Harun Gachanja"
				title="Let's build clones for the world leading applications"
				image="https://cdn.pixabay.com/photo/2019/10/06/10/03/team-4529717__340.jpg"
			/>

			<VideoRow
				views="15.4M"
				subs="283K"
				description="Learn how to design an eye catching and intuitive twitter clone web application"
				timestamp="3 days ago"
				channel="Harun Gachanja"
				title="Twitter clone in ReactJs full tutorials for beginners"
				image="https://cdn.pixabay.com/photo/2017/09/25/11/55/cyberspace-2784907__340.jpg"
			/>

			<VideoRow
				views="8M"
				subs="278K"
				description="Keep yourself busy with covid-19 projects"
				timestamp="5 days ago"
				channel="Harun Gachanja"
				title="Learn how to design covid-19 tracker app that maps world cases by death, recoveries and new cases"
				image="https://cdn.pixabay.com/photo/2014/02/03/16/52/chain-257490__340.jpg"
			/>

			<VideoRow
				views="11.1M"
				subs="276K"
				description="Full ReactJs tutorial on YouTube clone"
				timestamp="6 days ago"
				channel="Harun Gachanja"
				title="Let's build ReactJs YouTube Clone"
				image="https://cdn.pixabay.com/photo/2015/03/10/17/23/youtube-667451__340.png"
			/>

			<VideoRow
				views="14M"
				subs="263K"
				description="Learn how to build a school portal in python-flask, postgres sql, HTML & CSS"
				timestamp="7 days ago"
				channel="Harun Gachanja"
				title="Python-Flask Gone Wild !!!"
				image="https://cdn.pixabay.com/photo/2012/11/13/17/44/e-mail-65927__340.jpg"
			/>

			<VideoRow
				views="19.6M"
				subs="259K"
				description="Learn how to integrate Mpesa API's B2C, C2B, B2B, reverse transaction and so on..."
				timestamp="11 days ago"
				channel="Harun Gachanja"
				title="Effortless MPESA API Integration with Java, Python, and Node Js"
				image="https://cdn.pixabay.com/photo/2017/05/05/22/49/phone-2288456__340.jpg"
			/>
		</div>
	);
}

export default SearchPage;
