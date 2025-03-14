import styles from './articleNoImage.module.css';

const ArticleNoImage = ({ article, onCurrentArticle }) => {
    return (

        <article className={styles.article}>
            <a onClick={() => onCurrentArticle(article)} className={styles.deck}>{article.deck}</a>
            <div className={styles.nameAndDate}>
                <p>Tobias Kjernell</p>
                <p>10 Jan, 2025</p>
            </div>
        </article>

    )
}

export default ArticleNoImage;


