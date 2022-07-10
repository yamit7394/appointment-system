import React from "react";
import './Footer.css';
const Footer = () => {
    return (
        <div className="footer-basic mt-5 text-dark bg-warning">
        <footer>
            <div className="social">
                <a href={"#"}><i class="bi bi-linkedin text-primary"></i></a>
                <a href={"#"}><i class="bi bi-instagram text-danger"></i></a>
                <a href={"#"}><i class="bi bi-twitter"></i></a>
                <a href={"#"}><i class="bi bi-facebook"></i></a>
            </div>
            <ul className="list-inline">
                <li className="list-inline-item"><a href={"#"}>Home</a></li>
                <li className="list-inline-item"><a href={"#"}>Services</a></li>
                <li className="list-inline-item"><a href={"#"}>About</a></li>
                <li className="list-inline-item"><a href={"#"}>Terms</a></li>
                <li className="list-inline-item"><a href={"#"}>Privacy Policy</a></li>
            </ul>
            <p class="copyright text-dark">Relax Physiotherapy © 2022</p>
        </footer>
    </div>
    );
}

export default Footer;