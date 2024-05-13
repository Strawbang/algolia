"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const algoliasearch_1 = __importDefault(require("algoliasearch"));
const axios_1 = __importDefault(require("axios"));
// Algolia configuration
const ALGOLIA_APP_ID = 'CLZ42GKSJ8';
const ALGOLIA_API_KEY = '14ea23fbd9a109b16964419749574fd1';
const ALGOLIA_INDEX_NAME = 'id';
// Initialize Algolia client and index
const client = (0, algoliasearch_1.default)(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
const index = client.initIndex(ALGOLIA_INDEX_NAME);
// Function to enrich Pokémon data
function enrichPokemonData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield index.browseObjects({
                batch: (batch) => __awaiter(this, void 0, void 0, function* () {
                    for (const pokemon of batch) {
                        const { objectID, name } = pokemon;
                        // Fetch Pokémon details from PokéAPI
                        const response = yield axios_1.default.get(`https://pokeapi.co/api/v2/pokemon/${name.english}`);
                        // Extract image URL and game versions from PokéAPI response
                        const imageUrl = response.data.sprites.other['official-artwork'].front_default;
                        const gameVersions = response.data.game_indices.map((index) => index.version.name);
                        // Update Pokémon record in Algolia with enriched data
                        yield index.partialUpdateObject({
                            objectID,
                            imageUrl,
                            game_versions: gameVersions
                        });
                        console.log(`Enriched data for Pokémon: ${name}`);
                    }
                })
            });
            console.log('Enrichment process completed.');
        }
        catch (error) {
            console.error('Error enriching data:', error);
        }
    });
}
// Trigger the enrichment process
enrichPokemonData();
