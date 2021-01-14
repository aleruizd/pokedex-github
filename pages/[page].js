import styles from '../styles/Home.module.css'
import {Pagination, Searcher} from '../components/common'
import {getPokemonList, getPokemonNameList} from '../helpers'
import {PageHead,PokemonCardList,Header} from '../components/layout'

export default function Home(props) {
  return (
    <div className={styles.container}>
      <PageHead/>
      <Header/>
      <Searcher pokemonNameList={props.pokemonNameList}/>
      <PokemonCardList pokemonList={props.pokemonList}/>
      <Pagination pages={props.pages} actualPage={props.actualPage}/>
    </div>
  )
}

export async function getStaticPaths(){
  let paths = [];

  for(let i=1;i<=26;i++){
    paths.push({
      params: {
        page: i.toString()
      }
    })
  }

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}){
  let page = parseInt(params.page);
  let offset = page - 1;
  let limit = 6;

  let pokemonList = await getPokemonList(limit,offset);
  let pokemonNameList = await getPokemonNameList(151);
  
  return {
      props: {
        actualPage: page,
        pages: 26,
        pokemonList,
        pokemonNameList: pokemonNameList.results
    }
  }
}