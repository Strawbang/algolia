# Pokémon Search Experience with Algolia

This project is a responsive web application that enables users to search for Pokémon using Algolia. It integrates with the PokéAPI to enrich Pokémon data and implements dynamic search features with filters, including a language switcher to display Pokémon names in multiple languages. Additionally, it includes a translation feature for the entire application.

## Overview

- **Pokedex**: The `pokedex/` directory contains the Algolia indexing of relevant PokéAPI resources.

- **Frontend**: The web app is located in the `front/` directory (cloned from the original repository). It's deployed with [Vercel](https://vercel.com/) and can be accessed at [this link](https://test.vercel.app/). The Vercel deployment relies on the `dist/` subdirectory, which can be updated by running `$ npm run build`.

- **Backend**: The `enrichPokemon` feature is located in the `back/` directory.

## Indexing and Transforming Data for Pokémon Search

This project includes a guide on how to index and transform Pokémon data for search using Algolia and the PokéAPI.

### Requirements

1. **Node.js**: Ensure you have Node.js installed on your machine. You can download it from [Node.js](https://nodejs.org/).

2. **Algolia Account**: Sign up for an Algolia account at [Algolia](https://www.algolia.com/) and create a new index to store Pokémon data.

3. **PokéAPI**: Obtain Pokémon data in JSON format. You can use sources like [PokéAPI](https://pokeapi.co/) or other datasets.

### Running the Project Back

```bash
git clone algolia
```

To run the project locally, follow these steps:

1. Navigate to the project directory:
   ```bash
   cd back
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npm start
   ```

### Running the Project Front

To run the project locally, follow these steps:

1. Navigate to the project directory:
   ```bash
   cd front
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npm run dev
   ```

## Technologies Used

- Algolia InstantSearch
- React
- Node.js
- TypeScript
- Vite
- React Spectrum
- TailwindCSS
- Vercel

## Important

**_Make sure to provide the relevant environment variables (ALGOLIA_APP_ID, ALGOLIA_API_KEY, ALGOLIA_INDEX_NAME) before running the application back._**

**_Make sure to provide the relevant environment variables (VITE_ALGOLIA_APP_ID, VITE_ALGOLIA_API_KEY, VITE_ALGOLIA_INDEX_NAME) before running the application front._**

## Features

- Live Search Results: Utilizes Algolia InstantSearch to dynamically display results while typing in the search bar.

- Search Refinement: Offers search filters and range sliders (using React Spectrum) in the sidebar.

- Search Results Preview: Clicking on individual Pokémon displays its image and characteristics in a modal window.

- Language Switcher: Allows users to switch between different languages for the application, with settings preserved using React local storage.

- Advanced Language Switcher: Provides translation for all text within the application.
