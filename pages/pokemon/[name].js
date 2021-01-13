import styles from '../../styles/PokemonPage.module.css'
import { capitalize } from '../../helpers/stringFunctions'
import { Stats,TypeItem } from '../../components/common';
import { PageHead,Header } from '../../components/layout'

export default function PokemonPage({ pokemon }) {
    return (
        <div className={`${styles.container}`}>
            <PageHead />
            <Header />
            <div className={styles.title}>
                <h1>{capitalize(pokemon.name)}</h1>
                <h2>N°{pokemon.id}</h2>
            </div>
            <img className={styles.photo} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}/>
            <div className={styles.types}>
                {pokemon.types.map(type => {
                    return <TypeItem key={type.slot} type={type.type.name} />
                })}
            </div>
            <Stats
                hp={pokemon.stats[0].base_stat}
                attack={pokemon.stats[1].base_stat}
                defense={pokemon.stats[2].base_stat}
                specialAttack={pokemon.stats[3].base_stat}
                specialDefense={pokemon.stats[4].base_stat}
                speed={pokemon.stats[5].base_stat}        
                color={pokemon.types[0].type.name}
            />
        </div>
    )
}

export async function getStaticPaths() {
    let res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0");
    let pokemonList = await res.json();
    let paths = pokemonList.results.map(pokemon => {
        return {
            params: {
                name: pokemon.name
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
    let pokemon = await res.json();

    return {
        props: {
            pokemon
        }
    }
}

