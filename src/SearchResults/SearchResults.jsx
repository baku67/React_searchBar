import s from './style.module.css';
import { ResultItem } from '../ResultItem/ResultItem';

export function SearchResults({ resultsArray, init }) {

    console.log(resultsArray);

    const results = resultsArray.map((elem, index) => (
        <ResultItem key={index} title={elem} />
    ));

    return (
        <div className={s.resultsContainer}>
            {results}
        </div>
    );
}