import React from 'react';
import { useNavigate } from 'react-router-dom';
function Logout() {
    const navigate = useNavigate();
    const doLogout = () => {
        const loggedInUser = localStorage.getItem("userData");
        localStorage.removeItem(loggedInUser);
        localStorage.clear();
        alert("Logged out");
        navigate('/');
    }
    return (
        <div>
            <button onClick={doLogout}>Logout</button>
        </div>
    )
}
export default Logout;