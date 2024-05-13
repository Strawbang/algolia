import React from 'react';
import { Pokemon } from '../../types/Pokemon';
import Img from '../atoms/Img';
import { useLanguageContext } from '../context/LanguageContext';
import { getTranslation } from '../helpers/getTranslation';
import { getTypeColor } from '../helpers/getTypeColor';
import './PokemonCard.css'; // Import the CSS file for custom styles

interface PokemonCardProps {
	pokemon: Pokemon;
	onClick: () => void;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, onClick }) => {
	const { selectedLanguage } = useLanguageContext();

	const getLocalizedName = () => {
		switch (selectedLanguage) {
			case 'english':
				return pokemon.name.english;
			case 'japanese':
				return pokemon.name.japanese || pokemon.name.english;
			case 'chinese':
				return pokemon.name.chinese || pokemon.name.english;
			case 'french':
				return pokemon.name.french || pokemon.name.english;
			default:
				return pokemon.name.english;
		}
	};

	return (
		<div
			className="border rounded-lg cursor-pointer overflow-hidden hover:shadow-lg transform transition-transform duration-300 hover:scale-105 bg-white"
			onClick={onClick}
		>
			<div className="relative">
				<Img
					src={pokemon.imageUrl}
					alt={getLocalizedName()}
					className="w-full h-auto pokemon-image transition-all duration-300 hover:brightness-110"
				/>
			</div>
			<div className="p-2 sm:p-4">
				<p className="font-bold text-base sm:text-lg text-indigo-700">
					{getLocalizedName()}
				</p>
				<div className="mt-1 sm:mt-2">
					<p className="text-gray-600 text-xs sm:text-sm">
						<strong>{getTranslation('type', selectedLanguage)}:</strong>{' '}
						{pokemon.type.map((type, index) => (
							<span
								key={index}
								className={`inline-block px-1 sm:px-2 py-1 mr-1 sm:mr-2 rounded-full text-white font-bold text-xs sm:text-sm ${getTypeColor(type)}`}
							>
								{getTranslation(type, selectedLanguage)}
							</span>
						))}
					</p>
				</div>
			</div>
		</div>
	);
};

export default PokemonCard;
