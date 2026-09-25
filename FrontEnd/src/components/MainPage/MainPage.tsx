import styles from "../MainPage/MainPage.module.css"
import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"
import { Outlet } from "react-router-dom";
function MainPage() {

    return (
        <>
            <NavBar/>
            <main className={styles.main}>               
                <Outlet/>
            </main>
           <Footer/>
        </>
    )
}

export default MainPage;