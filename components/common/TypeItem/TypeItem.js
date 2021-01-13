import styles from './TypeItem.module.css'
import typeColors from '../../../styles/TypeColors.module.css'
import {capitalize} from '../../../helpers/stringFunctions'

export default function TypeItem({type}){
    return(
        <div className={`${styles.typeItem} ${typeColors[type]}`}>
            <p>{capitalize(type)}</p>
        </div>
    )
}