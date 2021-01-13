import styles from './Header.module.css'
import Link from 'next/link'
export default function Header(){
    return(
        <header className={styles.header}>
            <Link href="/1">
                <a><img className={styles.logo} src='https://i.ibb.co/mJpgFr9/Png-Item-24215.png'/></a>
            </Link>
        </header>
    )
}