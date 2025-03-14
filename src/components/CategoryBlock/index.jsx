import { drilling } from '../../data/data';
import ArticleWithImage from '../ArticleWithImage';
import styles from './categoryBlock.module.css';

const CategoryBlock = ({category, reservedStories, onCurrentCategory, onCurrentArticle}) => {
    
    return (
        <div className={styles.container}>

            <a href="#navigation" onClick={() => onCurrentCategory(category)} className={styles.storyBlockHeaderButton}>{drilling.get('current')}</a>

            <div className={styles.storiesContainer}> 
                {reservedStories.map((story, index) =>  <ArticleWithImage article={story} key={index} onCurrentArticle={onCurrentArticle}/>)}         
            </div>

        </div>
    )

}

export default CategoryBlock;