import { Header } from "../components/header/Header"
import destroyImage from "../images/aboba.jpg"

export const Destroyment = () => {
    return <div>
        <Header />
        <h2>Destroyment</h2>
        <div className="img-container">
            
            <img src={destroyImage} alt="*destroy*"></img>
        </div>
    </div>
}