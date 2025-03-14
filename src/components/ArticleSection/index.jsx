import { drilling } from '../../data/data';
import ArticleWithImage from '../ArticleWithImage';
import styles from './articleSection.module.css';

const ArticleSection = ({ articles, onCurrentArticle }) => {
   
    return (
        <div className={styles.articlesContainer}>
            <h2 className={styles.header}>{drilling.get('current')}</h2>
            <div className={styles.grid}>
                {articles.map((article, index) => <ArticleWithImage key={index} article={article} onCurrentArticle={onCurrentArticle} />)}
            </div>
        </div>
    )
}

export default ArticleSection;