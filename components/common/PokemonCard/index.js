import styles from './PokemonCard.module.css'
import type from '../../../styles/TypeColors.module.css'
import { capitalize } from '../../../helpers'
import Link from 'next/link'

export default function PokemonCard({ pokemon }) {
    return (
        <Link href={`/pokemon/${pokemon.name}`}>
            <a className={`${styles.pokemonCard} ${type[pokemon.types[0].type.name]}`}>
                <h2>{capitalize(pokemon.name)}</h2>
                <div className={styles.types}>
                    {pokemon.types.map(type => {
                        return (<p key={type.slot}>{capitalize(type.type.name)}</p>)
                    })}
                </div>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} />
            </a>
        </Link>
    )
}