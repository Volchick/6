﻿import { Header } from "../components/header/Header"
import styles from "./Asteroids.module.css"
import { useState } from "react"
import { AsteroidCard } from "../components/AsteroidCard/AsteroidCard.jsx"

export const Asteroids = () => {
    const [asteroids] = useState(generateAsteroids)
    const [onlyDangerous, setOnlyDangerous] = useState(false)
    let [isKM, setKM] = useState(false);
    return <div>
        <Header />
            <div className={styles.filterConteiner}>
                <div className={styles.showDangerousOnly}>
                    <input type="checkbox" value={onlyDangerous} onChange={() => setOnlyDangerous(!onlyDangerous)}></input>
                    Show only dangerous
                </div>
                    <div className={styles.distanceMode}>
                        Distance
                        <button className={styles.distanceButtons} value={isKM} onClick={() => setKM(isKM = false)}> in kilometers</button>
                        <button className={styles.distanceButtons} value={isKM} onClick={() => setKM(isKM = true)}> in distances to Moon</button>
                    </div>
                </div>
                {isKM ? onlyDangerous ? asteroids.filter((item) => item.isDangerous).map((item) => <AsteroidCard
                    name={item.name} date={item.date} size={item.size} distance={item.distance} isDangerous={item.isDangerous} DistanceMode={true} />) :
                    asteroids.map((item) => <AsteroidCard
                        name={item.name} date={item.date} size={item.size} distance={item.distance} isDangerous={item.isDangerous} DistanceMode={true} />) :
                    onlyDangerous ?
                        asteroids.filter((item) => item.isDangerous).map((item) => <AsteroidCard
                            name={item.name} date={item.date} size={item.size} distance={item.distance} isDangerous={item.isDangerous} DistanceMode={false} />) :
                        asteroids.map((item) => <AsteroidCard
                            name={item.name} date={item.date} size={item.size} distance={item.distance} isDangerous={item.isDangerous} DistanceMode={false} />)
                }
            </div>
}
const generateAsteroids = () => {
    const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
            ];

            const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            const result = [];
            for (let i = 0; i < 10; i++){
        const name = (Math.random() * 124 + 1900).toFixed(0) + ' ' + characters[(Math.random()*25).toFixed(0)] + characters[(Math.random()*25).toFixed(0)];
            const date = `${(Math.random() * 27 + 1).toFixed(0)} ${months[(Math.random() * 11).toFixed(0)]} 2024`;
            const size = (Math.random()*100 + 10).toFixed(0);
            const distance = (Math.random()*90000000).toFixed(0);
        const isDangerous = Math.random() >= 0.5;
            result.push({name, date, size, distance, isDangerous});
    }
            return result;
}