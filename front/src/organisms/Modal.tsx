import React from 'react';
import { Pokemon } from '../../types/Pokemon';
import Button from '../atoms/Button';
import Img from '../atoms/Img';
import Input from '../atoms/Input';
import { useLanguageContext } from '../context/LanguageContext';
import { getTranslation } from '../helpers/getTranslation';
import { getTypeColor } from '../helpers/getTypeColor';

interface ModalProps {
	pokemon: Pokemon;
	isOpen: boolean;
	onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ pokemon, isOpen, onClose }) => {
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

	if (!isOpen) {
		return null;
	}

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
			<div className="bg-white p-4 sm:p-8 rounded-lg max-w-full sm:max-w-4xl w-full">
				<Button
					className="absolute top-2 right-2 text-green-500 hover:text-green-700"
					onClick={onClose}
				>
					<svg
						className="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</Button>
				<div className="flex flex-col sm:flex-row">
					<div className="mb-4 sm:mr-8 sm:mb-0">
						<Img
							src={pokemon.imageUrl}
							alt={getLocalizedName()}
							className="w-full"
						/>
					</div>
					<div className="flex-1">
						<p className="font-bold text-xl mb-2">{getLocalizedName()}</p>
						<p>
							{getTranslation('type', selectedLanguage)}:{' '}
							{pokemon.type.map((type, index) => (
								<span
									key={index}
									className={`inline-block px-2 py-1 mr-2 rounded-full text-white ${getTypeColor(type)}`}
								>
									{getTranslation(type, selectedLanguage)}
								</span>
							))}
						</p>
						{pokemon.gameVersion && (
							<p className="mt-2">
								{getTranslation('gameVersion', selectedLanguage)}:{' '}
								{pokemon.gameVersion}
							</p>
						)}
						<div className="mt-4">
							<p>
								{getTranslation('HP', selectedLanguage)}: {pokemon.base.HP}
							</p>
							<Input
								type="range"
								min="0"
								max="200"
								value={pokemon.base.HP}
								disabled
								className="w-full"
							/>
							<p>
								{getTranslation('Attack', selectedLanguage)}:{' '}
								{pokemon.base.Attack}
							</p>
							<Input
								type="range"
								min="0"
								max="200"
								value={pokemon.base.Attack}
								disabled
								className="w-full"
							/>
							<p>
								{getTranslation('Defense', selectedLanguage)}:{' '}
								{pokemon.base.Defense}
							</p>
							<Input
								type="range"
								min="0"
								max="200"
								value={pokemon.base.Defense}
								disabled
								className="w-full"
							/>
							<p>
								{getTranslation('Sp.Attack', selectedLanguage)}:{' '}
								{pokemon.base['Sp. Attack']}
							</p>
							<Input
								type="range"
								min="0"
								max="200"
								value={pokemon.base['Sp. Attack']}
								disabled
								className="w-full"
							/>
							<p>
								{getTranslation('Sp.Defense', selectedLanguage)}:{' '}
								{pokemon.base['Sp. Defense']}
							</p>
							<Input
								type="range"
								min="0"
								max="200"
								value={pokemon.base['Sp. Defense']}
								disabled
								className="w-full"
							/>
							<p>
								{getTranslation('Speed', selectedLanguage)}:{' '}
								{pokemon.base.Speed}
							</p>
							<Input
								type="range"
								min="0"
								max="200"
								value={pokemon.base.Speed}
								disabled
								className="w-full"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
