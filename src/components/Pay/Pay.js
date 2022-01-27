import React from 'react';
import { useHistory } from 'react-router-dom';
import '../ThankYou/Thank.css';

const ThankYou = () => {
    const history = useHistory();
    const loginbtn = () => {
        history.push("/login")
    }
    return (
        <div className="bodyy">
            <div className="container">
                <div className="titlee"> যেভাবে পেমেন্ট করতে পারবেনঃ বিকাশ ও নগদ , ভিসা , মাস্টার ও আমেরিকান এক্সপ্রেস । পেমেন্ট করে অ্যাপে পূনরায় লগ-ইন করুন </div> <br />
                <div className="button_two">
                    <a href="https://payment.smanager.xyz/@Islavo89mdahpa">টাকা পরিশোধ করুন</a>
                </div>

            </div>
        </div>
    );
};

export default ThankYou;