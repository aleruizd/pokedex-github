import styles from './PokemonCardList.module.css'
import PokemonCard from '../../common/PokemonCard/PokemonCard'

export default function PokemonCardList({pokemonList}){
    return(
        <div className={styles.pokemonCardList}>
            {pokemonList.map(pokemon => {
                return(<PokemonCard key={pokemon.id} pokemon={pokemon}/>)
            })}
        </div>
    )
}