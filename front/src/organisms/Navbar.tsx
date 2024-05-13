import React, { useEffect, useState } from 'react';
import Logo from '../icons/Logo';
import LanguageSwitcher from '../molecules/LanguageSwitcher';
import SearchBar from '../molecules/SearchBar';

const Navbar: React.FC = () => {
	const [isNavbarFixed, setIsNavbarFixed] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			setIsNavbarFixed(scrollPosition > 0);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<nav
			className={`${
				isNavbarFixed
					? 'fixed top-0 left-0 right-0 bg-white shadow-md'
					: 'relative'
			} transition-all duration-300 z-50`}
		>
			<div className="max-w-7xl mx-auto px-4 py-3">
				<div className="flex justify-between items-center">
					<div className="flex-shrink-0">
						<Logo className="h-8 md:h-12 w-auto" />{' '}
					</div>
					<div className=" flex-grow ml-4">
						<SearchBar />
					</div>
					<div className="ml-4">
						<LanguageSwitcher />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
