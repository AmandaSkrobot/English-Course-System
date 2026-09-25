import styles from "./LogoIcon.module.css"
import logoIcon from "../../assets/logoIcon.png"
function LogoIcon() {

    return(<img 
            className={styles.logoImg}
            alt="Logo Fluent Way"
            src={logoIcon}/>   
)
}
export default LogoIcon;