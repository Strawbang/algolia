import algoliasearch from 'algoliasearch/lite';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { InstantSearch } from 'react-instantsearch';
import App from './App.tsx';
import { LanguageProvider } from './context/LanguageContext.tsx';
import './index.css';

const { VITE_ALGOLIA_APP_ID, VITE_ALGOLIA_API_KEY, VITE_ALGOLIA_INDEX_NAME } =
	import.meta.env;

if (!VITE_ALGOLIA_APP_ID || !VITE_ALGOLIA_API_KEY || !VITE_ALGOLIA_INDEX_NAME) {
	console.error('Algolia environment variables are not properly configured.');
	process.exit(1);
}

const searchClient = algoliasearch(VITE_ALGOLIA_APP_ID, VITE_ALGOLIA_API_KEY);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<InstantSearch
			searchClient={searchClient}
			indexName={VITE_ALGOLIA_INDEX_NAME}
		>
			<LanguageProvider>
				<App />
			</LanguageProvider>
		</InstantSearch>
	</React.StrictMode>
);
