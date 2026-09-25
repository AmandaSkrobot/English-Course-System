import styles from "./Button.module.css"
interface buttonProps
{
    buttonText: string;
    variant?: 'primary'  | 'secondary';
}

function Button({buttonText, variant = 'primary'}:buttonProps,
   
) {
   return(
    <button type="button" className={`${styles.ButtonStyle} ${styles[variant]}`}>
        {buttonText}
    </button> 
    )
}

export default Button;