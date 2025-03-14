import styles from './menuItem.module.css'

const MenuItem = ({ category, onCurrentCategory }) => {
    return (
        <a onClick={() => onCurrentCategory(category)}><li className={styles.item}>{category}</li></a>
    )
}

export default MenuItem;