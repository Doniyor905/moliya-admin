import React from 'react';
import Container from '../../layout/Container';
import classes from './Home.module.scss';
const RouterHome = () => {
	return (
		<Container>
			<div className={classes['home']}>
				<h2 className={classes['home__title']}>Panel</h2>
				<div className={classes['home__inner']}>
					<p className={classes['home__copyright']}>© Copyright <span>Doniyor Web</span>. All Rights Reserved</p>
					<p className={classes['home__powered']}>Powered by <a href="#!">Doniyor Web</a> </p>
				</div>
			</div>
		</Container>
	);
};

export default RouterHome;