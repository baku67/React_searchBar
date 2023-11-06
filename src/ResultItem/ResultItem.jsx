import s from './style.module.css'

export function ResultItem({onItemClick, title}) {


    function handleClick(newState) {
        onItemClick(true)
    }

    return(
        <div>
            <h2 onClick={onItemClick} style={{cursor:"pointer"}}>{title}</h2>
        </div>
    )
}