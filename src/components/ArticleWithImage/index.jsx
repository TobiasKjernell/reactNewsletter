import { getImageUrl } from '../../utils/functions';
import styles from './articleWithImage.module.css';

const ArticleWithImage = ({article, onCurrentArticle}) => {
   
    return (
        <a onClick={() => onCurrentArticle(article)} className={styles.article}>
            <img className={styles.image} src={`${getImageUrl(article.image)}`} alt="" />
            <h3>{article.headline}</h3>
            <p>{article.deck}</p>
        </a>
    )
}

export default ArticleWithImage;


