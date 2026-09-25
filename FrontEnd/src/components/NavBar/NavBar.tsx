import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import LogoIcon from "../LogoIcon/LogoIcon";
import styles from "./NavBar.module.css"
function NavBar() {

    return(
    <header className={styles.header}>
        <div className={styles.headerDiv}>
          <NavLink to="/">
            <LogoIcon/>
          </NavLink>       
          <nav className={styles.navBar}>
            <NavLink className={styles.links} to="/">Início</NavLink>
            <NavLink className={styles.links} to="/">Sobre Nós</NavLink>
            <NavLink className={styles.links} to="/">Contato</NavLink>
          </nav>
          <nav>
          <NavLink className={styles.button} to="entrar">
              <Button buttonText="Entrar"/>
          </NavLink> 
            <NavLink className={styles.button} to="/cadastrar">
              <Button buttonText="Cadastrar" variant="secondary"/>
            </NavLink> 
          </nav>     
        </div>
     </header>)

}

export default NavBar;