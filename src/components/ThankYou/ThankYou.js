import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faLock, faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import './Thank.css';

const ThankYou = () => {
    const history = useHistory();
    const loginbtn = () => {
        history.push("/login")
    }
    return (
        <div className="bodyy">
            <div className="container">
                <div className="titlee"> দয়া করে আপনার ইমেইল চেক করুন</div> <br />

                <button className="btn" onClick={loginbtn}  > <FontAwesomeIcon icon={faSignInAlt} /> লগ-ইন করুন</button>


            </div>
        </div>
    );
};

export default ThankYou;