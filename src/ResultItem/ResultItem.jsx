import { useState } from 'react'
import s from './style.module.css'

export function ResultItem({onItemClick, title, src}) {

    const [isHovered, setIsHovered] = useState(false)

    console.log(isHovered)

    return(

        <div                 
            onClick={() => onItemClick(true, title, src)} 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                cursor:"pointer",
                backgroundColor: isHovered ? "lightgreen" : "lightGrey",
                transition: "all 0.4s",
                width: "250px",
                margin: "2px",
                padding: "15px 10px",
                borderRadius: "5px"
            }}
        >
            <h2>{title}</h2>
            <img className={s.itemImg} src={src} />
        </div>
    )
}