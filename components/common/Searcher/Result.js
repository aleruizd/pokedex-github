import styles from './Result.module.css'
import Link from 'next/link'
import {capitalize} from '../../../helpers'

export default function Result({id,name}){
    return(
        <Link href={`/pokemon/${name}`}>
            <a className={styles.result}>
                <p>{capitalize(name)}</p>
                <p>#{id}</p>
            </a>
        </Link>
    )
}