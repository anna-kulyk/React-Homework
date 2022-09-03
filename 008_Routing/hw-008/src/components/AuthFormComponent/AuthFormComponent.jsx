import styles from "./AuthFormComponent.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { AUTH_MODAL_CLOSE, AUTH_TRUE, userLoginChangeAction, userPasswordChangeAction} from '../../redux-store/actions';

const AuthFormComponent = () => {

    const dispatch = useDispatch();
    const userStore = useSelector(state => state.user);

    const {login, password} = userStore;

    const hadleOnChange = (e) => {
        if (e.target.name === 'login') {
            dispatch(userLoginChangeAction(e.target.value))
        }
        else if (e.target.name === 'password') {
            dispatch(userPasswordChangeAction(e.target.value))
        }
    }

    const hadleOnClick = (e) => {
        const form = e.target.parentElement;
        for (let element of form.elements) {
            if(!element.validity.valid) {
                element.classList.remove(`${styles['form__input--valid']}`);
                element.classList.add(`${styles['form__input--invalid']}`);
            }
            else if (element.type !== "submit") {
                element.classList.remove(`${styles['form__input--invalid']}`);
                element.classList.add(`${styles['form__input--valid']}`);
            }
        }
    }

    const hadleOnSubmit = (e) => {
        e.preventDefault();
        dispatch({type: AUTH_TRUE});
        dispatch({type: AUTH_MODAL_CLOSE});

    }

    return (
        <div>
            <form className={styles.form} onSubmit={hadleOnSubmit}>
                <label className={styles['form__label']}>
                    Login 
                    <input 
                        type="text"
                        name="login"
                        className={styles['form__input--valid']}
                        value={login}
                        onChange={hadleOnChange}
                        required
                    />
                </label>
                <label className={styles['form__label']} >
                    Password
                    <input 
                        type="password"
                        name="password"
                        className={styles['form__input--valid']}
                        value={password}
                        onChange={hadleOnChange}
                        required
                    />
                </label>
                <input 
                    className={`button button--blue ${styles.form__btn}`} 
                    type='submit' 
                    value='Log In'
                    onClick={hadleOnClick} 
                />
            </form>
        </div>
    )
}

export default AuthFormComponent;