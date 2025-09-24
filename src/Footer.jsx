import React from "react";
import { Link } from "react-router-dom";


function Footer() {
    return(
        <footer>

            <div>
                <hr className="my-horizontal-line" />
                <div className = "footer-links">

                    <Link to = "/" onClick = {window.scrollTo(0, 0)}>
                        <div className = "footer-logo-container">
                            <img src = "/ElToro.png" alt="ElToro" className="footer-logo" />
                        </div>
                    </Link>

                    <Link to="/PrivacyPolicy" onClick = {window.scrollTo(0, 0)}>
                        <p>Privacy Policy</p>
                    </Link>
            
                    <Link to="/TermsOfService" onClick = {window.scrollTo(0, 0)}>
                        <p>Terms of Service</p>
                    </Link>

                    <Link to="/HelpSupport" onClick = {window.scrollTo(0, 0)}>
                        <p>Help & Support</p>
                    </Link>

                </div>
            </div>

            <hr className="my-horizontal-line" />
            <p className = "footer-text">&copy; LGT Productions</p>
        </footer>
    );
}

export default Footer