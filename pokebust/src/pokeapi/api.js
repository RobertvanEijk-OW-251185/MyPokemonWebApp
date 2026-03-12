import { useState, useEffect } from "react";

function PokiAPICall({ pokemonName }) {
	const [pokemon, setPokemon] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchPokemon = async () => {
			try {
				setLoading(true);

				// ENDPOINT: https://pokeapi.co/api/v2/pokemon/{name or id}
				// RETURNS: full pokemon object with name & sprites,
				const response = await fetch(
					`https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
				);
				const rawData = await response.json();

				// Extract only what we need and store it in state
				const data = {
					name: rawData.name,
					image: rawData.sprites.other["official-artwork"].front_default,
				};

				setPokemon(data);
			} catch (err) {
				setError("Pokemon not found!");
			} finally {
				setLoading(false);
			}
		};

		fetchPokemon();
	}, [pokemonName]); // re-fetches Pokemon's name?

	if (loading) return <p>Loading...</p>;
	if (error) return <p>{error}</p>;

	return (
		<div class="PokemonTests">
			<h2>{pokemon.name}</h2>
			<img src={pokemon.image} alt={pokemon.name} width="200" />
		</div>
	);
}

export default PokiAPICall;
