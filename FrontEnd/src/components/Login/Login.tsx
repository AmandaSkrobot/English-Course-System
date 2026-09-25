import { useState } from "react";
import styles from "./Login.module.css"
import { useLogin } from "../../hooks/useLogin";


function Login() {

     
const [email, setEmail] = useState<string>("");
const [password, setPassword] = useState<string>("");
const [msg,setMsg] = useState<string>("");

const { login, loading, error, user } = useLogin();
async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement, SubmitEvent>){
    event?.preventDefault();
    if(!email || !password){
        setMsg("Preencha os dados.");
        return;
    }
     try {
      await login(email, password);
    } catch {
      // O erro já foi armazenado no hook.
    }
}

return(
    <>  
        <form className={styles.form} onSubmit={handleSubmit}>
            <h1><strong>Login:</strong></h1>
            <label htmlFor="email">E-mail : </label>
            <input 
                className={styles.form}
                id="email"
                type="email" 
                value={email} 
                onChange={(event)=>setEmail(event.target.value)}
                placeholder="Digite seu email..." />
            <label htmlFor="senha">Senha :</label>
            <input
                 id="password" 
                 type="password" 
                 value={password} 
                 onChange={(event=> setPassword(event.target.value))}
                 placeholder="Digite sua senha..." />
                 {msg && <p className="mensagem">{msg}</p>}
                 <button type="submit" disabled={loading}>
                      {loading ? "Entrando..." : "Entrar"}
                 </button>
                 {error && <p>{error}</p>}
                  {user && <p>Bem-vindo, {user.name}</p>}
        </form>
   </>)
}
    
export default Login;


