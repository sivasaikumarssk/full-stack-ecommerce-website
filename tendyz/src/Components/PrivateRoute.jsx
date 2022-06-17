import { useNavigate } from 'react-router'

function PrivateRoute({ children }) {

    const navigate = useNavigate()

    let user = JSON.parse(localStorage.getItem('user'));
    console.log(user)

    if (user) {
        return children
    }
    else {
        navigate("/login");
    }
}

export default PrivateRoute;