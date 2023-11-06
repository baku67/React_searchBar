import s from './style.module.css'

export function ResultItem({onItemClick, title}) {



    return(
        <div>
            <h2 onClick={() => onItemClick(true, title)} style={{cursor:"pointer"}}>{title}</h2>
        </div>
    )
}