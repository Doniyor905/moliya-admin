import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import classes from './Home.module.scss';
import classNames from 'classnames';
import News from '../../routes/News';
import AddNews from '../../routes/AddNews';
import Services from '../../routes/Services';
import AddServices from '../../routes/AddServices';
import Partners from '../../routes/Partners';
import AddPartners from '../../routes/AddPartners';
import Banners from '../../routes/Banners';
import About from '../../routes/About';
import AddAbout from '../../routes/AddAbout';
import Language from '../../routes/Language';
import AddLanguage from '../../routes/AddLanguage';
import AddBanners from '../../routes/AddBanners';
import RouterHome from '../../routes/RouterHome';

const Home = () => {

	const [barMenu, setBarMenu] = React.useState(false);
	return (
		<div className={barMenu ? classNames(classes['wrapper'],classes['active']) : classes['wrapper']}>
			<Header barMenu={barMenu} setBarMenu={setBarMenu} />
			<Sidebar barMenu={barMenu} setBarMenu={setBarMenu} />
			
			<Routes>
				<Route path="/" element={<RouterHome/>}/>
				<Route path="/table/services" element={<Services/>}/>
				<Route path="/add/services" element={<AddServices/>}/>
				<Route path="/table/about" element={<About/>}/>
				<Route path="/add/about" element={<AddAbout/>}/>
				<Route path="/table/language" element={<Language/>}/>
				<Route path="/add/language" element={<AddLanguage/>}/>
				<Route path="/table/news" element={<News/>}/>
				<Route path="/add/news" element={<AddNews/>}/>
				<Route path="/table/partners" element={<Partners/>}/>
				<Route path="/add/partners" element={<AddPartners/>}/>
				<Route path="/table/banners" element={<Banners/>}/>
				<Route path="/add/banners" element={<AddBanners/>}/>
				<Route path="/table/banners" element={<Banners/>}/>
				<Route path="/add/banners" element={<Banners/>}/>
			</Routes>

		</div>
	);
};

export default Home;