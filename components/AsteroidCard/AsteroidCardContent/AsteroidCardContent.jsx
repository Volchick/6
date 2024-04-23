import styles from "./AsteroidCardContent.module.css"

export const AsteroidCardContent = (props) => {
    const { name, date, distance, size, DistanceMode } = props;
    return (<div>
        <div className={styles.contentName}>{name}</div>
        <div className={styles.contentWrapper}>
            <div className={styles.contentDate}>{`Date: ${date}`}</div>
            <div className={styles.contentDistance}> {`Distance: ${DistanceMode ? (distance / 385000).toFixed(0) : distance} ${DistanceMode ? 'dist.' : 'km'}`}</div>
            <div className={styles.contentSize}>{`Size: ${size} m`}</div>
        </div>
    </div>)
}
