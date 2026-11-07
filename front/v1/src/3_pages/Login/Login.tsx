// import style from './Login.module.css';
// import { Link } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { account } from '../../../lib/appwrite';

// export function Login() {
//     const [email, setEmail] = useState<string>('');
//     const [password, setPassword] = useState<string>('');
//     const [loginAvailable, setLoginAvailable] = useState(false);
//     const navigate = useNavigate();

//     useEffect(() => {
//         if (email !== '' && password !== '') {
//             setLoginAvailable(true);
//         }
//         else {
//            setLoginAvailable(false); 
//         }
//     }, [email, password]);

//     async function login (e: any) {
//         e.preventDefault();
//         try {
//             await account.createEmailPasswordSession(
//                 {
//                     email: email, 
//                     password: password
//                 }
//             );
//             navigate('/profile');
//         } catch (error) {
//             console.log('Wrong email or password', error);  
//         }
//     }

//     return (
//     <div className={style['login-container']}>
//         <form
//             className={style['form']}
//             onSubmit={login} 
//         >
//             <h2>Вход</h2>
//             <div style={{ marginBottom: '5px' }}>
//                 <label 
//                     htmlFor="username" 
//                     style={{ display: 'block', marginBottom: '4px' }}
//                 >Email:
//                 </label>
//                 <input
//                     className={style['input']}
//                     id="username"
//                     type="text"
//                     name="name"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Введите email"
//                 />
//             </div>

//             <div style={{ marginBottom: '5px' }}>
//                 <label htmlFor="password" style={{ display: 'block', marginBottom: '4px' }}>
//                     Пароль:
//                 </label>
//                 <input
//                     className={style['input']}
//                     id="password"
//                     type="text"
//                     name="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="Введите пароль"
//                 />
//             </div>
//             <button
//                 className={style['submit']}
//                 type="submit"
//                 disabled={!loginAvailable}
//                 style={{
//                     color: loginAvailable ? 'black' : 'gray',
//                     marginTop: '20px'
//                 }}
//             >
//                 Войти
//             </button>
//             <Link to='/registration'>toRegistration</Link>
//         </form>
//     </div>
//     );
// }
