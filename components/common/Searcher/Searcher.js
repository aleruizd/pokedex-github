import { useState } from 'react'
import styles from './Searcher.module.css'
import Result from './Result'

export default function Searcher({pokemonNameList}){
    const [input,setInput] = useState('');
    const [results,setResults] = useState([])

    async function handleInput(e){
        let value = e.target.value;

        setInput(value)

        if(value != ''){
            let results = []
            pokemonNameList.forEach((pokemon,index) => {
                if(pokemon.name.includes(value.toLowerCase())){
                    results.push({
                        id: index+1,
                        name: pokemon.name
                    })
                }
            });
        
            setResults(results);
        }else{
            setResults([])
        }
    }

    return(
        <div className={styles.searcher}>
            <input type="text" value={input} onChange={handleInput} placeholder='Search...'/>
            <div className={styles.results}>
                {results.map(pokemon => {
                    return <Result key={pokemon.id} id={pokemon.id} name={pokemon.name}/>
                })}
            </div>
        </div>
    )
}