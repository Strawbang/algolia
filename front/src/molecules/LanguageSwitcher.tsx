import React, { useState } from 'react';
import { useLanguageContext } from '../context/LanguageContext';
import ChineseFlag from '../icons/ChineseFlag';
import EnglishFlag from '../icons/EnglishFlag';
import FrenchFlag from '../icons/FrenchFlag';
import JapaneseFlag from '../icons/JapaneseFlag';

const LanguageSwitcher: React.FC = () => {
	const { selectedLanguage, handleLanguageChange } = useLanguageContext();
	const [isOpen, setIsOpen] = useState(false);

	const languageOptions = [
		{ code: 'english', label: 'English', flag: <EnglishFlag /> },
		{ code: 'japanese', label: '日本語', flag: <JapaneseFlag /> },
		{ code: 'chinese', label: '中文', flag: <ChineseFlag /> },
		{ code: 'french', label: 'Français', flag: <FrenchFlag /> },
	];

	const handleItemClick = (code: string) => {
		handleLanguageChange(code);
		setIsOpen(false);
	};

	return (
		<div className="relative inline-block">
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline flex items-center"
			>
				{
					languageOptions.find((option) => option.code === selectedLanguage)
						?.flag
				}
				<span className="ml-2">
					{
						languageOptions.find((option) => option.code === selectedLanguage)
							?.label
					}
				</span>
			</button>
			{isOpen && (
				<ul className="absolute z-10 bg-white border border-gray-300 mt-1 w-full shadow-lg">
					{languageOptions.map((option) => (
						<li
							key={option.code}
							className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
							onClick={() => handleItemClick(option.code)}
						>
							{option.flag}
							<span className="ml-2">{option.label}</span>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default LanguageSwitcher;
