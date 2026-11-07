import style from './Login.module.css';
import { Link } from "react-router-dom";
import { account } from '../../../lib/appwrite'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Registration() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [submitAvailable, setSubmitAvailable] = useState(false);

    useEffect(() => {
        if (name !== "" && email !== "" && password !== "") {
            setSubmitAvailable(true);
        }
        else {
           setSubmitAvailable(false); 
        }
    }, [name, email, password]);

    async function regist (e: any) {
        e.preventDefault();
        try {
            const result = await account.create({
                userId: "unique()", 
                email:  email!, 
                password: password!, 
                name: name
            });
            console.log("Registred user:", result.name);
            navigate('/login');
        } catch (err) {
            console.log("User not registred:", err);
        }
    } 
    return (
    <div className={style['login-container']}>
        <form
            className={style['form']}
            onSubmit={regist} 
        >
            <h2>Регистрация</h2>
            <div style={{ marginBottom: '5px' }}>
                <label 
                    htmlFor="username" 
                    style={{ display: 'block', marginBottom: '4px' }}
                >Имя пользователя:
                </label>
                <input
                    className={style['input']}
                    id="username"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e: any) => setName(e.target.value)}
                    placeholder="Введите имя пользователя"
                />
            </div>
            <div style={{ marginBottom: '5px' }}>
                <label 
                    htmlFor="email" 
                    style={{ display: 'block', marginBottom: '4px' }}
                >Почта:
                </label>
                <input
                    className={style['input']}
                    id="email"
                    type="text"
                    name="name"
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                    placeholder="Введите почту"
                />
            </div>
            <div style={{ marginBottom: '5px' }}>
                <label htmlFor="password" style={{ display: 'block', marginBottom: '4px' }}>
                    Пароль:
                </label>
                <input
                    className={style['input']}
                    id="password"
                    type="text"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Введите пароль"
                />
            </div>
            <button
                className={style['submit']}
                type="submit"
                disabled={!submitAvailable}
                style={{
                    color: submitAvailable ? 'black' : 'gray',
                    marginTop: '20px',
                }}
            >
                Зарегестрироваться
            </button>
            <Link to='/'>toLogin</Link>
        </form>
    </div>
    )
}
