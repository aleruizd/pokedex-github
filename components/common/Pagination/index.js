import { useEffect, useState } from 'react';
import styles from './Pagination.module.css'

export default function Pagination({pages}){
    const [pageList,setPageList] = useState([]);

    useEffect(() => {
        let pageList = [];
        for(let i=0;i<pages;i++){
            pageList.push(i+1);
        }
        setPageList(pageList)
    },[pages])

    return(
        <div className={styles.pagination}>
            <i className={`fas fa-chevron-left ${styles.previous}`}></i>
            {pageList.map(page => {
                return <p key={page}>{page}</p>
            })}
            <i className={`fas fa-chevron-right ${styles.next}`}></i>
        </div>
    )
}