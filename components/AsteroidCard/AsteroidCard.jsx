import { AsteroidCardAction } from "./AsteroidCardAction/AsteroidCardAction"
import { AsteroidCardContent } from "./AsteroidCardContent/AsteroidCardContent"
import { AsteroidCardImage } from "./AsteroidCardImage/AsteroidCardImage"
import styles from "./Card.module.css"

export const AsteroidCard = (props) => {
    const { name, date, distance, size, isDangerous, DistanceMode } = props;

    return (<div className={styles.card}>
        <div className={isDangerous ? styles.cardRed : styles.cardRegular}><AsteroidCardImage />
            <AsteroidCardContent name={name} date={date} distance={distance} size={size} DistanceMode={DistanceMode} />
            <AsteroidCardAction isDangerous={isDangerous} /></div>
    </div>)
}
