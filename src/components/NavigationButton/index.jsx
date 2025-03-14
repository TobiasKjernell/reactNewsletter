import styles from './navigationButton.module.css';

const NavigationButton = ({category, onCurrentCategory}) => {
    return (
        <button onClick={() => onCurrentCategory(category)} className={styles.button}>{category}</button>
    )
}

export default NavigationButton;