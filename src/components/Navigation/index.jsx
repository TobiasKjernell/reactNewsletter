import styles from './navigation.module.css';
import NavigationButton from '../NavigationButton';
import { useState } from 'react';
import Menu from '../Menu';

const Navigation = ({ onCurrentCategory, uniqueCategories }) => {
    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = (value) => {
        setShowMenu(value)
    }

    return (

        <nav id="navigation" className={styles.navigation}>
            <div onClick={() => setShowMenu(true)} className={styles.menu}>Menu {showMenu && <Menu onShowMenu={handleShowMenu} category={uniqueCategories} onCurrentCategory={onCurrentCategory} />}</div>

            <div className={styles.navigationContainer}>
                <NavigationButton category={'home'} onCurrentCategory={onCurrentCategory} />
                {uniqueCategories.map((categoryNames, index) => <NavigationButton category={categoryNames} key={index} onCurrentCategory={onCurrentCategory} />)}
            </div>

            <div className={styles.date}>Monday , 10 Mars 2025</div>
        </nav>

    )
}
export default Navigation;