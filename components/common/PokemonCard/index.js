import styles from './PokemonCard.module.css'
import type from '../../../styles/TypeColors.module.css'
import {capitalize} from '../../../helpers'
import { useEffect, useState } from 'react'

export default function PokemonCard({pokemon}){

    return(
        <div className={`${styles.pokemonCard} ${type[pokemon.types[0].type.name]}`}>
            <h2>{capitalize(pokemon.name)}</h2>
            <div className={styles.types}>
                {pokemon.types.map(type => {
                    return(<p>{capitalize(type.type.name)}</p>)
                })}
            </div>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}/>
        </div>
    )
}