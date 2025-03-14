import { drilling } from '../../data/data';
import { getImageUrl } from '../../utils/functions';
import styles from './displayArticle.module.css'

const DisplayArticle = () => {
    return (
        <div className={styles.container}>
            <div className={styles.article}>
                <img className={styles.image} src={`${getImageUrl(drilling.get('currentArticle').image)}`} alt={`${drilling.get('currentArticle').image}`} />
                <h3 className={styles.headline}>{drilling.get('currentArticle').headline}</h3>
                <p>{drilling.get('currentArticle').story}</p>
                <button onClick={() => drilling.get('updateArticle')(null)} className={styles.button}>Back</button>
            </div>
        </div>
    )
}

export default DisplayArticle;