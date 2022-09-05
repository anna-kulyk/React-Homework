import '../ErrorPage.scss'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <div className="error-page">
            <p className="error-number">404</p>
            <p className="error-text">Oops... Page not found!</p>
            <Link className='button button--blue' to="/">Home Page</Link>
        </div>
    )
}

export default NotFoundPage;