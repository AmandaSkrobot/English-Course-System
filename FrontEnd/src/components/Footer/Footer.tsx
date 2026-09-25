import styles from "./Footer.module.css"
function Footer(){
    return(
        <footer className={styles.footer}>         
              <p>                   
                    <span>  © 2026 FluentWay. Todos os direitos reservados.
                     Política de Privacidade · Termos de Uso · Contato
                   </span>                   
                </p>
        </footer>
    )
}

export default Footer;