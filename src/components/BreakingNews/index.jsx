import styles from './breakingNews.module.css';

const BreakingNews = ({articles, onCurrentArticle}) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.headline}>Breaking News</h2>
            <div className={styles.articles}>
                {articles.map((article, index) => <button onClick={() => onCurrentArticle(article)} key={index} className={styles.articleButton}> {article.deck}</button> )}
            </div>
        </div>
    )
}

export default BreakingNews;