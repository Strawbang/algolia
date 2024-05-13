import React from 'react';
import { useInfiniteHits } from 'react-instantsearch';
import { Pokemon } from '../types/Pokemon';
import { useLanguageContext } from './context/LanguageContext';
import { getTranslation } from './helpers/getTranslation';
import SearchResults from './molecules/SearchResult';
import { Filter } from './organisms/Filter';
import Navbar from './organisms/Navbar';
import { RangeSlider } from './organisms/RangeSlider';

const App: React.FC = () => {
	const { hits } = useInfiniteHits<Pokemon>();
	const { selectedLanguage } = useLanguageContext();

	return (
		<div className="min-h-screen bg-yellow-100">
			<header className="bg-white shadow-md">
				<div className="max-w-7xl mx-auto py-4 px-4">
					<Navbar />
				</div>
			</header>
			<main className="max-w-7xl mx-auto px-4 py-8 md:flex">
				<aside className="w-full md:w-1/4 pr-0 md:pr-8">
					<div>
						<p className="pt-5 pb-2 font-semibold">
							{getTranslation('type', selectedLanguage)}
						</p>
						<Filter attribute="type" showMore={true} showMoreLimit={20} />
					</div>
					<div className="mt-8">
						<p className="pt-5 pb-2 font-semibold">
							{getTranslation('game_versions', selectedLanguage)}
						</p>
						<Filter
							attribute="game_versions"
							showMore={true}
							showMoreLimit={20}
						/>
					</div>
					<p className="pt-5 pb-2 font-semibold">
						{getTranslation('stats', selectedLanguage)}
					</p>
					<div className="py-2">
						<p>{getTranslation('HP', selectedLanguage)}</p>
						<RangeSlider attribute="base.HP" label="" />
					</div>
					<div className="py-2 mt-2">
						<p>{getTranslation('Attack', selectedLanguage)}</p>
						<RangeSlider attribute="base.Attack" label="" />
					</div>
					<div className="py-2 mt-2">
						<p>{getTranslation('Defense', selectedLanguage)}</p>
						<RangeSlider attribute="base.Defense" label="" />
					</div>
					<div className="py-2 mt-2">
						<p>{getTranslation('Speed', selectedLanguage)}</p>
						<RangeSlider attribute="base.Speed" label="" />
					</div>
				</aside>
				<div className="w-full md:w-3/4">
					<SearchResults results={hits} />
				</div>
			</main>
		</div>
	);
};

export default App;
