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
                <div className="titlee"> পডকাস্ট এর যে কোন পর্ব ইউটিউব , ফেইসবুক বা অন্য সোশ্যাল মিডিয়ায় প্রকাশ বা প্রচার করা থেকে বিরত থাকুন অন্যথায় আইনগত ব্যবস্থা নেওয়া হবে</div> <br />
                <div className="button_two">
                    <a href="https://najmulalammirajbd.github.io/pocast/">ক্লিক করুন</a>
                </div>

            </div>
        </div>
    );
};

export default ThankYou;