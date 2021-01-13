import { useEffect, useState } from 'react';
import styles from './Pagination.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'

export default function Pagination({pages,actualPage}){
    const [pageList,setPageList] = useState([]);

    useEffect(() => {
        let pageList = [];
        if(actualPage <= 2){
            pageList = [1,2,3]
        }else if(actualPage > 2 && actualPage < pages){
            pageList = [actualPage-1,actualPage,actualPage+1]
        }else if(actualPage == pages){
            pageList = [actualPage-2,actualPage-1,actualPage]
        }
        setPageList(pageList)
    },[actualPage])

    return(
        <div className={styles.pagination}>
            {actualPage > 1 &&
                <Link href={`/${actualPage-1}`}>
                    <a className={styles.icon}><FontAwesomeIcon icon={faChevronLeft}/></a>
                </Link>
            }
            
            {actualPage > 2 &&
                <>
                    <Link href="/1"><a>1</a></Link>
                    <p>...</p>
                </>
            }
            
            {pageList.map(page => {
                if(page == actualPage)
                    return <Link href={`/${page}`} key={page}><a className={styles.actualPage}>{page}</a></Link>
                return <Link href={`/${page}`} key={page}><a>{page}</a></Link>
            })}

            {actualPage < pages-1 &&
                <>
                    <p>...</p>
                    <Link href={`/${pages}`}><a>{pages}</a></Link>
                </>
            }
            
            {actualPage < pages &&
                <Link href={`/${actualPage+1}`}>
                    <a className={styles.icon}><FontAwesomeIcon icon={faChevronRight}/></a>
                </Link>
            }
        </div>
    )
}