import algoliasearch, { SearchIndex } from 'algoliasearch';
import axios from 'axios';
import dotenv from 'dotenv';
import { PokemonRecord } from './IPokemonRecord';

dotenv.config();

const { ALGOLIA_APP_ID, ALGOLIA_API_KEY, ALGOLIA_INDEX_NAME } = process.env;

if (!ALGOLIA_APP_ID || !ALGOLIA_API_KEY || !ALGOLIA_INDEX_NAME) {
    console.error('Algolia environment variables are not properly configured.');
    process.exit(1);
}

const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
const index: SearchIndex = client.initIndex(ALGOLIA_INDEX_NAME);

async function fetchPokemonData(objectID: string): Promise<{ imageUrl: string; gameVersions: string[] }> {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${objectID}`);
        const imageUrl: string = response.data.sprites.other['official-artwork'].front_default;
        const gameVersions: string[] = response.data.game_indices.map((index: any) => index.version.name);
        return { imageUrl, gameVersions };
    } catch (error) {
        console.error(`Failed to fetch data for Pokémon with objectID ${objectID}:`, error);
        throw error;
    }
}

async function updatePokemonRecord(pokemon: PokemonRecord & { objectID: string }): Promise<void> {
    const { objectID, name } = pokemon;
    try {
        const { imageUrl, gameVersions } = await fetchPokemonData(objectID);
        await index.partialUpdateObject({ objectID, imageUrl, game_versions: gameVersions });
        console.log(`Enriched data for Pokémon: ${name.english}`);
    } catch (error) {
        console.error(`Error updating Pokémon record for ${name.english}:`, error);
    }
}

async function enrichPokemonData(): Promise<void> {
    try {
        await index.browseObjects<PokemonRecord>({
            batch: async (batch: ReadonlyArray<PokemonRecord & { objectID: string }>) => {
                for (const pokemon of batch) {
                    await updatePokemonRecord(pokemon);
                }
            }
        });
        console.log('Enrichment process completed.');
    } catch (error) {
        console.error('Error during Pokémon enrichment process:', error);
    }
}

enrichPokemonData();