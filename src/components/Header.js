import React, { useState } from 'react';
import './assets/css/Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

function Header() {
	const [inputSearch, setInputSearch] = useState('');
	return (
		<div className="header">
			<div className="header__left">
				<MenuIcon />
				<Link to="/">
					<img
						className="header__logo"
						src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
						alt=""
					/>
				</Link>
			</div>
			<div className="header__center">
				<input
					onChange={(e) => setInputSearch(e.target.value)}
					value={inputSearch}
					placeholder="Search"
					type="text"
				/>
				<Link to={`/search/${inputSearch}`}>
					<SearchIcon className="header__searchButton" />
				</Link>
			</div>
			<div className="header__right">
				<VideoCallSharpIcon className="header__icon" />
				<AppsIcon className="header__icon" />
				<NotificationsIcon className="header__icon" />
				<Avatar
					alt="Harun Gachanja"
					src="https://avatars0.githubusercontent.com/u/42092300?s=460&u=9150dfe9eb4668e1ab5e2c309a98e8ef526037dd&v=4"
				/>
			</div>
		</div>
	);
}

export default Header;
