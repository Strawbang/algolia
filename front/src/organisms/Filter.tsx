import React from 'react';
import { useRefinementList, UseRefinementListProps } from 'react-instantsearch';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import { useLanguageContext } from '../context/LanguageContext';
import { getTranslation } from '../helpers/getTranslation';
import { getTypeColor } from '../helpers/getTypeColor';

export function Filter(props: UseRefinementListProps) {
	const {
		items,
		refine,
		searchForItems,
		canToggleShowMore,
		isShowingMore,
		toggleShowMore,
	} = useRefinementList(props);
	const { selectedLanguage } = useLanguageContext();

	const handleSearchInputChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const searchTerm = event.currentTarget.value;
		searchForItems(searchTerm);
	};

	return (
		<div className="bg-white rounded-md shadow-md p-4">
			<Input
				type="search"
				className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-blue-500"
				placeholder={getTranslation(
					'search-a-' + props.attribute,
					selectedLanguage
				)}
				autoComplete="off"
				autoCorrect="off"
				autoCapitalize="off"
				spellCheck={false}
				maxLength={512}
				onChange={handleSearchInputChange}
			/>
			<ul className="space-y-2">
				{items.map((item) => (
					<li key={item.label} className="flex items-center">
						<Input
							type="checkbox"
							checked={item.isRefined}
							onChange={() => refine(item.value)}
							className="mr-2 h-4 w-4 text-blue-500 border rounded focus:ring-blue-400"
						/>
						<span
							className={`inline-block px-2 py-1 rounded-full text-xs font-semibold leading-none text-white ${getTypeColor(
								item.label
							)} hover:bg-opacity-75 transition duration-300`}
						>
							{getTranslation(item.label, selectedLanguage)}
						</span>
						<span className="text-gray-500 text-sm ml-auto">
							<span className="text-green-600">{`(${item.count})`}</span>
						</span>
					</li>
				))}
			</ul>
			<Button
				onClick={toggleShowMore}
				isDisabled={!canToggleShowMore}
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
			>
				{isShowingMore
					? getTranslation('showLess', selectedLanguage)
					: getTranslation('showMore', selectedLanguage)}
			</Button>
		</div>
	);
}
