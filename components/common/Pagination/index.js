import { useEffect, useState } from 'react';
import styles from './Pagination.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'

export default function Pagination({pages,actualPage}){
    const [pageList,setPageList] = useState([]);

    useEffect(() => {
        let pageList = [];
        if(actualPage >= 4){
            for(let i=actualPage-2;i<=actualPage;i++){
                pageList.push(i);
            }
        }else{
            for(let i=1;i<=3;i++){
                pageList.push(i);
            }
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
            
            {actualPage >= 4 &&
                <>
                    <Link href="/1"><a>1</a></Link>
                    <p>...</p>
                </>
            }
            
            {pageList.map(page => {
                return <Link href={`/${page}`} key={page}><a>{page}</a></Link>
            })}

            {actualPage < pages &&
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