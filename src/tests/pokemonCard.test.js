import { render, screen } from '@testing-library/react'
import PokemonCard from '../components/pokemonCard/PokemonCard'
import '@testing-library/jest-dom'

describe("PokemonCard", () => {
    const props = { data: { name: 'TestPokeName' } };

    test('should be rendering', () => {
        render(<PokemonCard {...props} />)
        const topArtistListEl = screen.getByTestId('pokemonCardTest');
        expect(topArtistListEl).toBeInTheDocument();
    });

    test('should be true poke name', () => {
        render(<PokemonCard {...props} />)
        const getText = screen.getByText(props.data.name);
        expect(getText).toBeDefined();
    });
});
