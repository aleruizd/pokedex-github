import PageHead from '../components/layout/PageHead'
import styles from '../styles/Home.module.css'
import PokemonCardList from '../components/layout/PokemonCardList'
import Header from '../components/layout/Header'
import Pagination from '../components/common/Pagination'
import {getPokemonList} from '../helpers'

export default function Home(props) {
  return (
    <div className={styles.container}>
      <PageHead/>
      <Header/>
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
  let limit = 6;
  let offset;
  (page > 1) ? offset = (limit*(page-1))+1 : offset = page
  
  if(page == 26) limit = 1;

  let pokemonList = await getPokemonList(limit,offset);
  
  return {
      props: {
        actualPage: page,
        pages: 26,
        pokemonList
    }
  }
}