import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import useClickOutside from '../../hooks/useClickOutside';

import classes from './Header.module.scss';
import Container from '../../layout/Container';

import logo from '../../assets/image/header/logo.png';
import profileImg from '../../assets/image/header/profile-img.png';
import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Header = ({ barMenu, setBarMenu }) => {
	const [headerProfile, setHeaderProfile] = React.useState(false);
	const menuRef = React.useRef(null);

	useClickOutside(menuRef, () => {
		if(headerProfile) {
			setTimeout(() => setHeaderProfile(false), 50);
		}
	});
	return (
		<div ref={menuRef}  className={classes['header']}>
			<Container>
				<div className={classes['header__inner']}>
					<div className={classes['header__logo']}>
						<img src={logo} alt="" />
						<FontAwesomeIcon onClick={() => setBarMenu(!barMenu)} className={classes['header__logo-bar']} icon={faBars} />
					</div>
					<div className={classes['header__settings']}>
						<div onClick={() => setHeaderProfile(!headerProfile)} className={classes['header__settings-item']}>
							<img src={profileImg} alt="" />
							<p>Doniyor Yusupov</p>
							<FontAwesomeIcon className={classes['header__settings-arrow']} icon={faCaretDown} />
						</div>
						
						<div className={headerProfile ? classNames(classes['header__settings-dropdown'], classes['active']) : classes['header__settings-dropdown']}>
							<h3 className={classes['header__settings-dropdown-name']}>Doniyor Yusupov</h3>
							<p className={classes['header__settings-dropdown-role']}>Admin</p>
							<ul>
								<li className={classes['header__settings-profile']}>
									<Link to="/myProfile">
										<FontAwesomeIcon icon={faUser} className={classes['header__settings-profile-icon']}/>
										<p>My profile</p>
									</Link>
								</li>
								<li className={classes['header__settings-signOut']}>
									<a href="#!">
										<FontAwesomeIcon icon={faSignOutAlt} className={classes['header__settings-signOut-icon']}/>
										<p>Sign out</p>
									</a>
								</li>
								
							</ul>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Header;