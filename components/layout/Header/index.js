import styles from './Header.module.css'

export default function Header(){
    return(
        <header className={styles.header}>
            <img className={styles.logo} src='https://i.ibb.co/mJpgFr9/Png-Item-24215.png'/>
        </header>
    )
}