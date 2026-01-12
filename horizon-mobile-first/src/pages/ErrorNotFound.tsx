import { Link } from "react-router"


const ErrorNotFound = () => {
    return (
        <div>
            <p>404 not found</p>
            <Link to="/">Home</Link>
        </div>
    )
}

export default ErrorNotFound