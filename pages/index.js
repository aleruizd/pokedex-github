import Head from 'next/head'
import styles from '../styles/Home.module.css'
import PokemonCardList from '../components/layout/PokemonCardList'
import Header from '../components/layout/Header'
import Pagination from '../components/common/Pagination'
import {getPokemonList} from '../helpers'

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap" rel="stylesheet"/>
        <script src="https://kit.fontawesome.com/cc4e947371.js" crossorigin="anonymous"></script> 
      </Head>
      <Header/>
      <PokemonCardList pokemonList={props.pokemonList}/>
      <Pagination pages={5}/>
    </div>
  )
}

export async function getStaticProps(){
  let pokemonList = await getPokemonList(9,1);

  return {
      props: {
        pokemonList
    }
  }
}