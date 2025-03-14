import MenuItem from '../MenuItem';
import styles from './menu.module.css';

const Menu = ({onShowMenu, category, onCurrentCategory}) => {


    return (
        <div className={styles.menuContainer}> 
            <ul onMouseLeave={() => onShowMenu(false)} className={styles.list}>
                <MenuItem category={'home'} onCurrentCategory={onCurrentCategory} />
                {category.map((element, index) => <MenuItem key={index} category={element} onCurrentCategory={onCurrentCategory} />)}
    
            </ul>
        
        </div>
    )
}

export default Menu;