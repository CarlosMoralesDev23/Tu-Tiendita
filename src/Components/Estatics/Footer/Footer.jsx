import React from "react";
import "../EstaticsCSS/Statics.css";

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h3 className="footer-title">Tu Tiendita Sport</h3>
                    <p>
                        Aqui encontraras una variedad de productos ideales para practicar tus deportes favoritos y de alta calidad. ¡Vive el deporte al máximo!
                    </p>
                    <div className="contact-info">
                        <span>
                            <i className="fas fa-map-marker-alt"></i> Riglos 149, CABA.
                        </span>
                        <span>
                            <i className="fas fa-phone"></i> +54 9 11 22519382
                        </span>
                        <span>
                            <i className="fas fa-envelope"></i>{" "}
                            info@tutienditasport.com
                        </span>
                    </div>
                </div>

                <div className="footer-section links">
                    <h3 className="footer-title">Enlaces Rápidos</h3>
                    <ul>
                        <li>
                            <a href="#about-us">Quiénes Somos</a>
                        </li>
                        <li>
                            <a href="#faq">Preguntas Frecuentes</a>
                        </li>
                        <li>
                            <a href="#privacy-policy">Política de Privacidad</a>
                        </li>
                        <li>
                            <a href="#terms">Términos y Condiciones</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-section social">
                    <h3 className="footer-title">Síguenos</h3>
                    <div className="social-links">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} Tu Tiendita Sport. Todos los
                derechos reservados.
            </div>
        </footer>
    );
};

export default Footer;
