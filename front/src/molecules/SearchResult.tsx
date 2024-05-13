import React, { useState } from 'react';
import { useInfiniteHits } from 'react-instantsearch';
import { Pokemon } from '../../types/Pokemon';
import Button from '../atoms/Button';
import { useLanguageContext } from '../context/LanguageContext';
import { getTranslation } from '../helpers/getTranslation';
import Modal from '../organisms/Modal';
import PokemonCard from './PokemonCard';

interface SearchResultsProps {
	results: Pokemon[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
	const { showMore, isLastPage } = useInfiniteHits();
	const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
	const { selectedLanguage } = useLanguageContext();

	const openModal = (pokemon: Pokemon) => {
		setSelectedPokemon(pokemon);
	};

	const closeModal = () => {
		setSelectedPokemon(null);
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth', // Optional smooth scrolling
		});
	};

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
			{results.map((pokemon) => (
				<PokemonCard
					key={pokemon.id}
					pokemon={pokemon}
					onClick={() => openModal(pokemon)}
				/>
			))}
			<div className="col-span-1 sm:col-span-2 md:col-span-3 flex flex-col items-center mt-4">
				<Button
					children={getTranslation('showMore', selectedLanguage)}
					onClick={showMore}
					isDisabled={isLastPage}
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-4 sm:mr-4"
				/>
				<Button
					children={getTranslation('backToTop', selectedLanguage)}
					onClick={scrollToTop}
					className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
				/>
			</div>

			<Modal
				pokemon={selectedPokemon!}
				isOpen={selectedPokemon !== null}
				onClose={closeModal}
			/>
		</div>
	);
};

export default SearchResults;
