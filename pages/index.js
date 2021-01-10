import Head from 'next/head'
import styles from '../styles/Home.module.css'
import PokemonCard from '../components/common/PokemonCard'
import {getPokemonList} from '../helpers'

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap" rel="stylesheet"/> 
      </Head>
  
      {props.pokemonList.map((pokemon) => {
        return (<PokemonCard key={pokemon.id} pokemon={pokemon}/>)
      })}
    </div>
  )
}
export async function getStaticProps(){
  let pokemonList = await getPokemonList(6);

  return {
      props: {
        pokemonList
    }
  }
}