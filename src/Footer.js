import React from "react";
import "./Footer.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { useHistory } from "react-router-dom";

function Footer() {
    const history = useHistory();
    return (
        <div className="footer">
            <p className="footer__credit">
                made by: <strong>M. Mohamed Rami</strong>
            </p>

            <a href="https://www.linkedin.com/in/mohamed-rami-megherbi-1a18b91b2/">
                <LinkedInIcon className="footer__icon" />
            </a>

            <a href="https://github.com/ReyZis">
                <GitHubIcon className="footer__icon" />
            </a>
        </div>
    );
}

export default Footer;
