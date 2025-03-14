import { getImageUrl } from '../../utils/functions';
import ArticleNoImage from '../ArticleNoImage';
import ArticleWithImage from '../ArticleWithImage';
import styles from './mainSection.module.css';

const MainSection = ({articles, onCurrentArticle}) => {

    return (
        <div className={styles.articlesContainer}>
            <div className={styles.leftContainer}>

                <h2 className={styles.sideHeader}>Recent News</h2>
                
                {Array.from({length: 4}, (_,i) => i).map(num => <ArticleNoImage key={num} article={articles[num]} onCurrentArticle={onCurrentArticle}/>)}

            </div>

            <div className={styles.midContainer}>
                <a className={styles.midArticle} onClick={() => onCurrentArticle(articles[4])}>
                    <img className={styles.midImage} src={`${getImageUrl(articles[4].image)}`} alt="" />
                    <h2>{articles[4].headline}</h2>
                    <p>{articles[4].deck}</p>
                </a>

                <div className={styles.midFooter}>
                    <div className={styles.user}>
                        <img src={`${getImageUrl('tobbe.png')}`} alt="" />
                        <div className={styles.userContainer}>
                            <p>10 Jan, 2025</p>
                            <p>Tobias Kjernell</p>
                        </div>
                    </div>

                    <div className={styles.stats}>
                        <p>Comments</p>
                        <p>Likes</p>
                    </div>
                </div>
            </div>

            <div className={styles.rightContainer}>
                <ArticleWithImage article={articles[5]} onCurrentArticle={onCurrentArticle}/>
                <ArticleWithImage article={articles[6]} onCurrentArticle={onCurrentArticle}/>
            </div>
        </div>
    )

}

export default MainSection;