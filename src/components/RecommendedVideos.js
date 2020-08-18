import React from 'react';
import './assets/css/RecommendedVideos.css';
import Video from './Video';

function RecommendedVideos() {
	return (
		<div className="recommendedVideos">
			<h2>Recommended</h2>
			<div className="recommendedVideos__videos">
				<Video
					title="Effortless MPESA API Integration with Java, Python, and Node Js"
					views="15 Views"
					timestamp="1 day ago"
					channelImage="https://avatars0.githubusercontent.com/u/42092300?s=460&u=9150dfe9eb4668e1ab5e2c309a98e8ef526037dd&v=4"
					channel="Harun Gachanja"
					image="https://cdn.pixabay.com/photo/2017/05/05/22/49/phone-2288456__340.jpg"
        />
        <Video
					title="Python-Flask Gone Wild !!!"
					views="96 Views"
					timestamp="2 days ago"
					channelImage="https://avatars0.githubusercontent.com/u/42092300?s=460&u=9150dfe9eb4668e1ab5e2c309a98e8ef526037dd&v=4"
					channel="Harun Gachanja"
					image="https://cdn.pixabay.com/photo/2012/11/13/17/44/e-mail-65927__340.jpg"
        />
        <Video
					title="Full ReactJs tutorial on YouTube clone"
					views="137 Views"
					timestamp="4 days ago"
					channelImage="https://avatars0.githubusercontent.com/u/42092300?s=460&u=9150dfe9eb4668e1ab5e2c309a98e8ef526037dd&v=4"
					channel="Harun Gachanja"
					image="https://cdn.pixabay.com/photo/2015/03/10/17/23/youtube-667451__340.png"
        />
        <Video
					title="Keep yourself busy with covid-19 projects"
					views="200M Views"
					timestamp="2 weeks ago"
					channelImage="https://avatars0.githubusercontent.com/u/42092300?s=460&u=9150dfe9eb4668e1ab5e2c309a98e8ef526037dd&v=4"
					channel="Harun Gachanja"
					image="https://cdn.pixabay.com/photo/2012/11/13/17/44/e-mail-65927__340.jpg"
				/>
				<Video
					title="Twitter clone in ReactJs full tutorials for beginners"
					views="847M Views"
					timestamp="1 month ago"
					channelImage="https://avatars0.githubusercontent.com/u/42092300?s=460&u=9150dfe9eb4668e1ab5e2c309a98e8ef526037dd&v=4"
					channel="Harun Gachanja"
					image="https://cdn.pixabay.com/photo/2017/05/05/22/49/phone-2288456__340.jpg"
				/>
				<Video
					title="The master class of front-end with ReactJs."
					views="900M Views"
					timestamp="2 months ago"
					channelImage="https://avatars0.githubusercontent.com/u/42092300?s=460&u=9150dfe9eb4668e1ab5e2c309a98e8ef526037dd&v=4"
					channel="Harun Gachanja"
					image="https://cdn.pixabay.com/photo/2016/04/28/18/37/search-engine-optimization-1359429__340.jpg"
				/>
				<Video
					title="Get Started with python in 7 minutes!!!"
					views="1B Views"
					timestamp="6 months ago"
					channelImage="https://avatars0.githubusercontent.com/u/42092300?s=460&u=9150dfe9eb4668e1ab5e2c309a98e8ef526037dd&v=4"
					channel="Harun Gachanja"
					image="https://cdn.pixabay.com/photo/2017/08/28/08/43/antique-2688748__340.jpg"
				/>
				<Video
					title="What is JSON?"
					views="1.5B Views"
					timestamp="1 year ago"
					channelImage="https://avatars0.githubusercontent.com/u/42092300?s=460&u=9150dfe9eb4668e1ab5e2c309a98e8ef526037dd&v=4"
					channel="Harun Gachanja"
					image="https://cdn.pixabay.com/photo/2012/04/24/21/40/jigsaw-40975__340.png"
				/>
			</div>
		</div>
	);
}

export default RecommendedVideos;
