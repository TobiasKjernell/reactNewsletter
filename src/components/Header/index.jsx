import { getImageUrl } from '../../utils/functions';
import styles from './header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.social}>
                <img className={styles.social__icon} src={`${getImageUrl('instagram.png')}`} alt="" />
                <img className={styles.social__icon} src={`${getImageUrl('tiktok.png')}`} alt="" />
                <img className={styles.social__icon} src={`${getImageUrl('facebook.png')}`} alt="" />
                <img className={styles.social__icon} src={`${getImageUrl('twitter.png')}`} alt="" />
            </div>
            <h1>Welcome message</h1>
            
            <div className={styles.header__phone}>076-2008014</div>

        </header>

    )
}

export default Header;