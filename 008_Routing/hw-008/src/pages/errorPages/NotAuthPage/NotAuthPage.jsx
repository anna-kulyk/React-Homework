import '../ErrorPage.scss'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { AUTH_MODAL_OPEN } from '../../../redux-store/actions';

const NotAuthPage = () => {
    const dispatch = useDispatch();
    
    return (
        <div className="error-page">
            <p className="error-number">403</p>
            <p className="error-text">We're sorry, you don't have access to the page you requested.</p>
            <p className="error-text">
                Please, go back to the <Link className='button button--blue' to="/">Home Page</Link> 
                or <button className='button button--blue' onClick={()=>dispatch({type: AUTH_MODAL_OPEN})}>Log in</button>
            </p>
        </div>
    )
}

export default NotAuthPage;