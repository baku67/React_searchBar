import s from './style.module.css';
import { ResultItem } from '../ResultItem/ResultItem';


export function SearchResults({ resultsArray, onItemClick }) {

    const results = resultsArray.map((elem, index) => (
        <ResultItem onItemClick={onItemClick} title={elem} key={index} />
    ));

    return (
        <div className={s.resultsContainer}>
            {results}
        </div>
    );
}