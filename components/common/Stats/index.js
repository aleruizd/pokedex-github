import styles from './Stats.module.css'
import typeColors from '../../../styles/TypeColors.module.css'
import {capitalize} from '../../../helpers/stringFunctions'

export default function Stats(props){
    return(
        <div className={`${styles.stats} ${typeColors[props.color]}`}>
            <p><b>HP:</b> {props.hp}</p>
            <p><b>Attack:</b> {props.attack}</p>
            <p><b>Defense:</b> {props.defense}</p>
            <p><b>Special Attack:</b> {props.specialAttack}</p>
            <p><b>Special Defense:</b> {props.specialDefense}</p>
            <p><b>Speed:</b> {props.speed}</p>
        </div>
    )
}