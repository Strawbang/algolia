import React, { useRef, useState } from 'react';
import { useSearchBox } from 'react-instantsearch';
import Input from '../atoms/Input';
import { useLanguageContext } from '../context/LanguageContext';
import { getTranslation } from '../helpers/getTranslation';

const SearchBar: React.FC = () => {
	const { query, refine } = useSearchBox();
	const [inputValue, setInputValue] = useState(query);
	const inputRef = useRef<HTMLInputElement>(null);
	const { selectedLanguage } = useLanguageContext();

	function setQuery(newQuery: string) {
		setInputValue(newQuery);
		refine(newQuery);
	}

	return (
		<div className="relative">
			<form
				action=""
				role="search"
				noValidate
				onSubmit={(event) => {
					event.preventDefault();
					event.stopPropagation();

					if (inputRef.current) {
						inputRef.current.blur();
					}
				}}
				onReset={(event) => {
					event.preventDefault();
					event.stopPropagation();

					setQuery('');

					if (inputRef.current) {
						inputRef.current.focus();
					}
				}}
			>
				<Input
					ref={inputRef}
					className="w-full bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500 shadow-sm"
					autoComplete="off"
					autoCorrect="off"
					autoCapitalize="off"
					placeholder={getTranslation('search-a-pokemon', selectedLanguage)}
					spellCheck={false}
					maxLength={512}
					type="search"
					value={inputValue}
					onChange={(event) => {
						setQuery(event.currentTarget.value);
					}}
					autoFocus
				/>
			</form>
		</div>
	);
};

export default SearchBar;
