import { useEffect, useState } from 'react';
import styles from './Pagination.module.css'
import Link from 'next/link'

export default function Pagination({pages,actualPage}){
    const [pageList,setPageList] = useState([]);

    useEffect(() => {
        let pageList = [];
        for(let i=actualPage;i<(actualPage+3);i++){
            pageList.push(i);
        }
        setPageList(pageList)
    },[actualPage])

    return(
        <div className={styles.pagination}>
            <Link href={`/${actualPage-1}`}>
                <a><i className={`fas fa-chevron-left ${styles.previous}`}></i></a>
            </Link>
            {pageList.map(page => {
                return <Link href={`/${page}`} key={page}><a>{page}</a></Link>
            })}
            <p>...</p>
            <Link href={`/${pages}`}><a>{pages}</a></Link>
            <Link href={`/${actualPage+1}`}>
                <a><i className={`fas fa-chevron-right ${styles.next}`}></i></a>
            </Link>
        </div>
    )
}